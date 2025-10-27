export const Maaltafels = () => {
    let maaltafels : number[] = [];
  for(let i : number = 1; i < 11; i++){
    for(let j : number = 1; j < 11; j++){
      maaltafels.push(i*j);
    }
  }

  return (
    <>
      <table>
        {maaltafels.map((number: number) => <tr>{number}</tr>)}
      </table>
    </>
  )
}