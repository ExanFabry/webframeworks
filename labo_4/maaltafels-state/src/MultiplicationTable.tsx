import { MultiplicationRow } from "./MultiplicationRow";
import { Header } from "./Header";

export const MultiplicationTable = ({max} : {max:number}) => {
  let numbers = Array.from({length: max}, (_, i) => i+1)

  return (
    <table>
      <Header max={max}/>
      {
        numbers.map(number => <MultiplicationRow factor={number} max={max}/>)
      }
    </table>
  )
}