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
    image: "https://source.unsplash.com/random/800x600/?pasta"
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
    image: "https://source.unsplash.com/random/800x600/?pizza"
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