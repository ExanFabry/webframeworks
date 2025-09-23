export const MultiplicationRow = ({factor, max} : { factor : number, max: number}) => {
  let numbers = Array.from({length: max}, (_, i) => i+1)

  return (
    <tr>
      <td>{factor}</td>
      {
        numbers.map((number) => (
          <td>{number * factor}</td>
        )) 
      }
    </tr>
  )
}