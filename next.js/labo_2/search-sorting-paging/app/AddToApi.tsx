import { Spell } from "./interfaces";

export async function useSpells(): Promise<Spell[]>{
    const response = await fetch("https://sampleapis.assimilate.be/harrypotter/spells", { cache: "no-store" });
    const data : Spell[] = await response.json();
    return data;
}