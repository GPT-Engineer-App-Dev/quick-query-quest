import RecipeList from '@/components/RecipeList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Delicious Recipes
        </h1>
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-orange-300 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white">
            Find Recipes
          </Button>
        </div>
        <RecipeList />
      </div>
    </div>
  );
}