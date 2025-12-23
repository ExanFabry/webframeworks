export interface Spell {
    id: number;
    name: string;
    type: string;
    mana: number;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    effectDuration: string;
    isUnforgivable: boolean;
    range: string;
    counterSpell: string;
    alignment: "Good" | "Neutral" | "Dark";
}

export type SortField = "name" | "difficulty" | "type" | "id";
export type SortDirection = "asc" | "desc";