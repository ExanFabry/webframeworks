import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/search">Search</Link>
      <Link href="/sorting">Sorting</Link>
      <Link href="/paging">Paging</Link>
    </nav>
  );
};

export default function Home() {
  return (
    <>
      <NavBar/>
    </>
  );
}
