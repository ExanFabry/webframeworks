import './App.css'

function App() {
  let items: string[] = ["item 1", "item 2", "item 3"]
  return (
    <>
      <Header title="Labo 2" subtitle="Basic components"/>
      <List items={items}/>
      <Footer copy="&#169;" year="Andie Similon (2021)"/>
    </>
  )
}
const Header = ({title, subtitle}: {title: string; subtitle: string}) => {
  return(
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}
const List = ({items}: {items: string[]}) => {
  return(
    <>
      <li>
        {items.map((item: string) => <ListItem item={item}/>)}
      </li>
    </>
  )
}
const ListItem = ({item}: {item: string}) => {
  return(
    <>
      <ul>{item}</ul>
    </>
  )
}
const Footer = ({copy, year}: {copy: string, year: string}) => {
  return(
    <>
      <footer>
        {copy} {year}
      </footer>
    </>
  )
}

export default App
