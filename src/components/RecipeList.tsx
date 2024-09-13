import React from 'react';
import Recipe from './Recipe';

interface RecipeData {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string[];
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
    ]
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
    ]
  }
];

const RecipeList: React.FC = () => {
  return (
    <div className="space-y-8">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
};

export default RecipeList;