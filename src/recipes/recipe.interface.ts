export interface BaseRecipe {
  name: string;
  description: string;
}

export interface Recipe extends BaseRecipe {
  id: number;
}