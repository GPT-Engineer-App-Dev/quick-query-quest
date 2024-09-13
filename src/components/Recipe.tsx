import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string[];
}

const Recipe: React.FC<RecipeProps> = ({ title, ingredients, instructions }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal list-inside">
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Recipe;