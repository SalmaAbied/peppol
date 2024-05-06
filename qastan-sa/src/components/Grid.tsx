import React from 'react'

function Grid() {
  return (
    <div className="max-w-[600px] grid grid-cols-3 grid-rows-3 gap-2 mb-5 justify-start">
        <span className="bg-legoOrange aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIG4.Iz68qxSxR0LWtlBzUHUQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt="werkveld met veel mensen"
          className="aspect-square object-cover"
        />
        <span className="bg-legoRed aspect-square"></span>
        <img
          src="https://magazynvip.pl/wp-content/uploads/2021/11/KLOCKI-LEGO.jpeg"
          alt="ondernemers"
          className="aspect-square object-cover"
        />
        <span className="bg-white border-2 border-legoOrange aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIG4.xuW1oCoSwcgBm8PDU4lg?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt="verschillende jobs"
          className="aspect-square object-cover"
        />
        <span className="bg-legoYellow aspect-square"></span>
        <img
          src="https://th.bing.com/th/id/OIG1.1BQCEQcvDmT3EKgNrBst?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt="mensen in een bedrijf die zich veilig voelen"
          className="aspect-square object-cover"
        />
        <span className="bg-legoBlue aspect-square"></span>
      </div>
  )
}

export default Grid
