// "use client"

import React from 'react'

async function TestConsole() {
    const data = await fetch(`http://play.mine-smp.me:25571/v1/serverOverview?server=MineCommunity%20Guilds`);
  const res = await data.json();
//   console.log(res);
  return (
    <div>
        
    <div>Max Players: {res.numbers.total_players}</div>
    <div>Current Players: {res.numbers.online_players}</div>
    
    </div>
  )
}

export default TestConsole