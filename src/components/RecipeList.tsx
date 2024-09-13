"use client";

import React from 'react';
import Recipe from './Recipe';
import { motion } from 'framer-motion';

interface RecipeData {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: number;
  image: string;
}

const recipes: RecipeData[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g pecorino cheese", "50g parmesan", "Black pepper"],
    instructions: [
      "Cook spaghetti in salted water until al dente",
      "Fry pancetta until crispy",
      "Beat eggs with grated cheeses",
      "Toss hot pasta with pancetta, then add egg mixture",
      "Serve with extra cheese and black pepper"
    ],
    prepTime: "20 mins",
    servings: 2,
    image: "https://source.unsplash.com/random/800x600/?spaghetti-carbonara"
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil leaves", "Olive oil"],
    instructions: [
      "Preheat oven to 450°F (230°C)",
      "Roll out pizza dough",
      "Spread tomato sauce on dough",
      "Add sliced mozzarella",
      "Bake for 10-12 minutes",
      "Top with fresh basil and drizzle with olive oil"
    ],
    prepTime: "30 mins",
    servings: 4,
    image: "https://source.unsplash.com/random/800x600/?margherita-pizza"
  },
  {
    id: 3,
    title: "Grilled Salmon with Lemon-Dill Sauce",
    ingredients: ["4 salmon fillets", "2 tbsp olive oil", "1 lemon", "2 tbsp fresh dill", "Salt and pepper", "1/4 cup Greek yogurt"],
    instructions: [
      "Preheat grill to medium-high heat",
      "Brush salmon with olive oil and season with salt and pepper",
      "Grill salmon for 4-5 minutes per side",
      "Mix Greek yogurt with lemon juice and chopped dill",
      "Serve salmon with lemon-dill sauce"
    ],
    prepTime: "25 mins",
    servings: 4,
    image: "https://source.unsplash.com/random/800x600/?grilled-salmon"
  },
  {
    id: 4,
    title: "Vegetarian Buddha Bowl",
    ingredients: ["Quinoa", "Roasted chickpeas", "Avocado", "Roasted sweet potato", "Kale", "Hummus", "Tahini dressing"],
    instructions: [
      "Cook quinoa according to package instructions",
      "Roast chickpeas and sweet potato cubes in the oven",
      "Massage kale with olive oil and lemon juice",
      "Assemble bowl with quinoa, roasted veggies, kale, and avocado",
      "Top with hummus and drizzle with tahini dressing"
    ],
    prepTime: "40 mins",
    servings: 2,
    image: "https://source.unsplash.com/random/800x600/?buddha-bowl"
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    ingredients: ["100g dark chocolate", "100g butter", "2 eggs", "2 egg yolks", "100g sugar", "50g flour", "Vanilla ice cream"],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Melt chocolate and butter together",
      "Whisk eggs, egg yolks, and sugar until light and fluffy",
      "Fold in melted chocolate and flour",
      "Pour into greased ramekins and bake for 12-14 minutes",
      "Serve warm with a scoop of vanilla ice cream"
    ],
    prepTime: "25 mins",
    servings: 4,
    image: "https://source.unsplash.com/random/800x600/?chocolate-lava-cake"
  }
];

const RecipeList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe, index) => (
        <motion.div
          key={recipe.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Recipe
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            prepTime={recipe.prepTime}
            servings={recipe.servings}
            image={recipe.image}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default RecipeList;