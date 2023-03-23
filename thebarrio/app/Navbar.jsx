"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from "next/router";


function Navbar() {
  // jest.mock('next/router')
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(router);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      {/* Logo on the left */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="https://media.discordapp.net/attachments/1083083786704658472/1088132326732607609/MineCommunity_Icon.png" alt="Logo" className="h-8 w-8" />
        <span className="font-semibold text-xl tracking-tight ml-2">
          MineCommunity
        </span> 
      </div>

      {/* Hamburger menu for small screens */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>

      {/* Options in the middle */}
      <div className="w-full hidden lg:block flex-grow lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="NavbarOptions">
              Home
          </Link>
          <Link href="/about" className={currentRoute == "/about" ? "bg-white" : "bg-white"}>
              About
          </Link>
          <Link href="/guide" className="NavbarOptions" >
              Guide
          </Link>
          <Link href="/shop" className="NavbarOptions">
              Shop

          </Link>
        </div>
      </div>

      {/* Buttons on the right */}
      <div className="hidden lg:inline-block">
        <a
          href="#"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-2 hover:bg-blue-100 hover:text-black "
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faDiscord} />
        </a>
        {/* <a
          onClick={() => {navigator.clipboard.writeText("play.mine-smp.me")}}
          href="#"
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-300"
        >
        </a> */}
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
