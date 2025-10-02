import React, { useState } from "react"
interface Shopping{
    name: string | undefined,
    quantity: number | undefined
}
export const ShoppingList = ({}) => {
    const [shoppingItems, setShoppingItems] = useState<Shopping[]>([]);
    const [shoppingName, setShoppingName] = useState<string>();
    const [shoppingQuantity, setShoppingQuantity] = useState<number>();
    const [warningMessage, setWarningMessage] = useState<string>("");
    const AddToArray: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(shoppingName === "" || shoppingName === undefined){
            setWarningMessage("Voer een product in.");
            return;
        }
        if(shoppingQuantity === undefined || shoppingQuantity <= 0){
            setWarningMessage("Het minimum aantal moet minstens 0 zijn.");
            return;
        }
        setWarningMessage("");
        setShoppingItems([...shoppingItems, { name: shoppingName, quantity: shoppingQuantity}]);
    }
    const removeItem = (i: number) => {
        let shoppingItemsCopy = shoppingItems.filter((item, index) => index !== i);
        setShoppingItems(shoppingItemsCopy);
        setWarningMessage("Het item is verwijderd");
    }
    return(
        <>
            <p>{warningMessage}</p>
            <label htmlFor="">Name: </label>
            <input type="text" onChange={(event) => setShoppingName(String(event.target.value))}/><br></br>
            <label htmlFor="">Quantity: </label>
            <input type="text" onChange={(event) => setShoppingQuantity(Number(event.target.value))}/><br></br>
            <button onClick={AddToArray}>Add</button>
            { /*<p>{shoppingItems.length}</p>
            /*<p>{shoppingItem?.name}</p>
            <p>{shoppingName}</p>
            <p>{shoppingQuantity}</p> */}
            {shoppingItems.map((item: Shopping, index: number) => 
                <React.Fragment key={index}>
                    <p>{item.name}</p> 
                    <p>{item.quantity}</p>
                    <button onClick={() => removeItem(index)}>Delete</button>
                </React.Fragment>
            )}
        </>
    )
}