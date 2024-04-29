import React from 'react'

function Grid() {
  return (
    <div className="max-w-[600px] grid grid-cols-3 grid-rows-3 gap-2 mb-5 justify-start">
        <span className="bg-legoOrange aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIG2.bIhK2e9xqczu65Z24iEI?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-legoRed aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIG4.Rkx_bg8ibfF8J8BJASXr?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-white border-2 border-legoOrange aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIG2.iAVNGqT8WysexsLLv7GS?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-legoYellow aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIP.BK6-OLOyTJbQDqZ5aFZvTgHaGd?rs=1&pid=ImgDetMain"
          alt="safety"
          className="aspect-square object-cover"
        />
        <span className="bg-legoBlue aspect-square"></span>
      </div>
  )
}

export default Grid
