export interface CocktailModel {
  id: string;
  name: string;
  isAlcoholic: boolean;
  imageUrl: string;
  instructions: string;
  ingredients: string[];
  favorite?: boolean;
}
