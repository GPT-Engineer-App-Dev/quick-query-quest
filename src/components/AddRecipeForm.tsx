"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface AddRecipeFormProps {
  onAddRecipe: (recipe: any) => void;
}

const AddRecipeForm: React.FC<AddRecipeFormProps> = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split('\n'),
      instructions: instructions.split('\n'),
      prepTime,
      servings: parseInt(servings),
      image: `https://source.unsplash.com/random/800x600/?${title.toLowerCase().replace(/ /g, '-')}`
    };
    onAddRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
    setPrepTime('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <Textarea
        placeholder="Instructions (one per line)"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Prep Time"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">Add Recipe</Button>
    </form>
  );
};

export default AddRecipeForm;