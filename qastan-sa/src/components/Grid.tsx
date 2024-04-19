import React from 'react'

function Grid() {
  return (
    <div className="max-w-[600px] grid grid-cols-3 grid-rows-3 gap-2 mb-5 justify-start">
        <span className="bg-legoOrange aspect-square"></span>
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-legoRed aspect-square"></span>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-legoAzure aspect-square"></span>

        <img
          src="https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-legoPurple aspect-square"></span>
        <img
          src="https://plus.unsplash.com/premium_photo-1661281337214-c5f344300d92?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="aspect-square object-cover"
        />
        <span className="bg-legoPink aspect-square"></span>
      </div>
  )
}

export default Grid
