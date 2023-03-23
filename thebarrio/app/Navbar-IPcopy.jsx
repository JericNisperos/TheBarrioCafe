"use client";
import React from 'react'

function Navbar-IPcopy() {
  return (
    <div>
    <a
          onClick={() => {navigator.clipboard.writeText(IPAddress); setIPAddress("Copied!"); IPAddress === "Copied!" ? setIPAddress("PLAY.MINE-SMP.ME") : null}}
          href="#"
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-300"
        >
          {IPAddress}
        </a>
    </div>
  )
}

export default Navbar-IPcopy