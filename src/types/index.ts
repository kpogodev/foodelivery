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

export interface Post {
    id: number | string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: Comment[];
    images: string[];
    tags: string[];
}

export interface Comment {
    id: number | string;
    author: string;
    body: string;
    date: string;
}
