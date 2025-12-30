import Image from "next/image";

const fetchPrices = async() => {
    const response = await fetch("https://sampleapis.assimilate.be/bitcoin/current", { cache: "no-store" });
    const data: Bitcoin = await response.json();
    return data;
}

export default async function Home() {
  return <CurrencyList/>
}

export async function CurrencyList() {
  return (
    <>
      <CurrencyCard currencyType={0}/>
      <CurrencyCard currencyType={1}/>
      <CurrencyCard currencyType={2}/>
    </>
  )
}

export async function CurrencyCard({ currencyType }: { currencyType: number }) {
  const prices = await fetchPrices();
  if(currencyType === 0){
    return <p>USD: {prices.bpi.USD.rate}</p>;
  }
  else if(currencyType === 1){
    return <p>GBP: {prices.bpi.GBP.rate}</p>;
  }
  else if(currencyType === 2){
    return <p>EUR: {prices.bpi.EUR.rate}</p>;
  }
}
export interface Bitcoin {
    time:       Time;
    disclaimer: string;
    chartName:  string;
    bpi:        Bpi;
}

export interface Bpi {
    USD: Eur;
    GBP: Eur;
    EUR: Eur;
}

export interface Eur {
    code:        string;
    symbol:      string;
    rate:        string;
    description: string;
    rate_float:  number;
}

export interface Time {
    updated:    string;
    updatedISO: Date;
    updateduk:  string;
}
