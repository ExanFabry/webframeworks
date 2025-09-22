export const TextInput = ({size}: {size: number}) => {
    return(
        <>
            {
                Array.from({length: size}, (_,i) => <textarea onChange={(event) => alert(i + " " + event?.target.value)}></textarea>)
            }
        </>
    )
}