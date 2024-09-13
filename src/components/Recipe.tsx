import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from 'lucide-react';

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: number;
  image: string;
}

const Recipe: React.FC<RecipeProps> = ({ title, ingredients, instructions, prepTime, servings, image }) => {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <CardHeader className="absolute bottom-0 left-0 right-0 text-white">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {prepTime}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {servings} servings
          </Badge>
        </div>
        <h3 className="font-semibold mb-2 text-lg">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-sm">{ingredient}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2 text-lg">Instructions:</h3>
        <ol className="list-decimal list-inside space-y-2">
          {instructions.map((instruction, index) => (
            <li key={index} className="text-sm">{instruction}</li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Recipe;