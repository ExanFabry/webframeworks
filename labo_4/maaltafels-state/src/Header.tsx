export const Header = ({max} : {max : number}) => {
  let numbers = Array.from({length: max}, (_, i) => i+1)

  return (
    <tr>
        <td>

        </td>
        {
          numbers.map((number) => (<td>{number}</td>))
        }
    </tr>
  )
}