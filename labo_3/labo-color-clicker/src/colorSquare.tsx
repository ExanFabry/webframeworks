export const ColorSquare = ({color, size}: {color: string, size: number}) => {
    return(
        <input type="button" id="submit" style={{height: size, width: size, backgroundColor: color}} onClick={() => alert(color)}></input>
    )
}