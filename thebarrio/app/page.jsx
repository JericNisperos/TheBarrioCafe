import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import Movies from "./Movies";
import Navbar from "./Navbar";
import TestConsole from "./TestConsole";


export default async function Home() {
  // const data = await fetch(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=5a3d9dbee8518a2b7403554c09c06823`
  // );
  // const data = await fetch(`http://play.mine-smp.me:25571/player/CyaniceBlitz/raw?server=MineCommunity%20Guilds`);
  // const res = await data.json();
  // console.log(res);
  return (
    <main className="main">
      {/* <Navbar /> */}
      {/* <div className="grid gap-16 grid-cols-fluid mx-12 mt-24">
        {res.results.map((movie) => (
          <Movies movie={movie} key={movie.id} /> 
        ))}
      </div> */}
      {/* <Navbar /> */}
      {/* <Carousel /> */}
      {/* <div className="flex justify-center items-center w-full">
      <Image className="w-full" src="https://media.discordapp.net/attachments/1083083786704658472/1083083816475840512/wwwww.png" width={2000} height={2000} alt="something"/>
      </div> */}
      <TestConsole />
    </main>
  );
}
