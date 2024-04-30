'use client';
import Card from "@/components/Card";
import { useState } from "react";
import fetchData from "@/services/api";
import initialData from "@/helpers/initialData";

export default function Home() {

  const [city, setCity] = useState("");
  const [data, setData] = useState(initialData);

  let backgroundCity = `https://source.unsplash.com/1600x900/?${data.location.name}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city).then(response => {
      setData(response);
      setCity("")
    });
  }

  // useEffect((city) => {
  //   backgroundCity = `https://source.unsplash.com/1600x900/?${city}`;
  // }, [city])

  return (
    <main className="flex min-h-screen flex-col justify-around items-center bg-cover" style={{ backgroundImage: "url(" + backgroundCity + ")" }}>
      <h2 className="font-bold text-5xl backdrop-filter backdrop-blur-xl text-white p-4 rounded-lg drop-shadow-xl">Tempo nas cidades</h2>
      <div className="flex flex-row justify-around items-center w-full">
        <form onSubmit={handleSubmit}>
          <input className="w-96 py-2 px-3 rounded-l-lg border-none outline-none text-lg" type="text" placeholder="Digite o nome da cidade" value={city} onChange={(e) => setCity(e.target.value)} />
          <button className="bg-blue-500 text-white py-2 px-3 rounded-r-lg text-xl">Consultar</button>
        </form>
        <Card data={data} />
      </div>
    </main>
  );
}
