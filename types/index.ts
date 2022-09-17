export interface Meal {
    id: number | string;
    name: string;
    description: string;
    price: number | string;
    image: string,
    nutritions: Nutritions
    category: string,
    vegan: boolean,
    vegetarian: boolean,
    glutenFree: boolean,

}

export interface Nutritions {
    calories: number | string;
    fats: number | string;
    proteins: number | string;
}