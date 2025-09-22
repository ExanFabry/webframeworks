export const CheckBox = ({size}: {size: number}) => {
    return(
        <>
            {
                Array.from({length: size}, (_,i) => 
                    Array.from({length: size}, (_,j) => 
                        <input type="checkbox" onClick={() => alert("[" + i + ", " + j + "]")}></input>
                    )
                )
            }
        </>
    )
}