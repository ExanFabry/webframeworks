import { Spell } from "../interfaces";
import Link from "next/link";
import { useSpells } from "../AddToApi";
import { NavBar } from "../page";

const ProductsPage = async(props: PageProps<"/">) => {    
    const searchParams = await props.searchParams;
    const q = typeof searchParams.q === "string" ? searchParams.q : "";
    const spells = await useSpells();
    let filteredSpells: Spell[] = [];
    if(spells !== undefined){
        filteredSpells = spells.filter(spell => spell.name.startsWith(q));
    }

    return (
        <>
            <NavBar/>
            <div>
                <h1>Spells</h1>
                <ul>
                {filteredSpells.map((spell) => (
                    <li key={spell.id}>
                    <Link href={`/${spell.id}`}>{spell.name}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </>
    );
}

// export default function Page(props: PageProps<"/">) {
//   return (
//     <>
//         <NavBar/>
//         <ProductsPage props={props}/>
//     </>
//   );
// }

export default ProductsPage;