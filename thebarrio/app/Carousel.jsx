import Image from 'next/image'
import React from 'react'

function Carousel() {
  return (
    <div>
        
<div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative overflow-hidden rounded ">
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image className='rounded border' src="https://media.discordapp.net/attachments/1083083786704658472/1083083816475840512/wwwww.png?width=1083&height=610" width={1000} height={1000} alt="something"/>
        </div>
    </div>
</div>

    </div>
  )
}

export default Carousel