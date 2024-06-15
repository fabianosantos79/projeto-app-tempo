'use client';
import Card from "@/components/Card";
import { useState } from "react";
import fetchData from "@/services/api";
import initialData from "@/helpers/initialData";

export default function Home() {

  const [city, setCity] = useState("");
  const [data, setData] = useState(initialData);
  const [imageCity, setImageCity] = useState("");


  const fecthImage = async () => {
    const backgroundCity = `https://api.unsplash.com/search/photos?query=${city}&page=1&per_page=1&client_id=EdHwWZ9Led9w-i3PXhfOd1cA1aXLxjTuRUOAgVFzAgQ`;

    const response = await fetch(backgroundCity);
    const data = await response.json();
    const locationCity = data.results[0].urls.full;
    console.log(locationCity);
    setImageCity(locationCity);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city).then((response) => {
      setData(response)
      console.log(response)
      setCity("")
      fecthImage();
    });
  }


  return (
    <main className="flex min-h-screen flex-col justify-evenly items-center bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url(" + imageCity + ")" }}>
      <h2 className="font-bold text-center text-5xl backdrop-filter backdrop-blur-xl text-white p-4 rounded-lg drop-shadow-xl">Tempo nas cidades</h2>
      <div className="flex flex-col gap-4 lg:flex-row justify-around items-center w-full">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-1">
          <input className="w-96 py-2 px-3 rounded-lg border-none outline-none text-lg mb-1" type="text" placeholder="Digite o nome da cidade" value={city} onChange={(e) => setCity(e.target.value)} />
          <button className="bg-blue-500 text-white py-2 px-3 rounded-lg text-xl mb-1">Consultar</button>
        </form>
        <Card data={data} />
      </div>
    </main>
  );
}
