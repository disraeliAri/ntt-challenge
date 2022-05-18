export interface Pokemon {
    id: number;
    idAuthor: number;
    name: string;
    type: string;
    attack: number;
    defense: number;
    hp: number;
    image: string;
    created_at?: Date;
    updated_at?: Date;
}