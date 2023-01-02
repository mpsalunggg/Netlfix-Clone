import React, { useEffect, useState } from "react";

function Navbar() {
  const [handle, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {
        if(window.scrollY > 100) {
          handleShow(true)
        } else {
          handleShow(false)
        }
      })
    }
  },[])

  const list = ["Home", "TV Shows", "Movies", "Latest", "My List"]

  return (
    <nav className={`flex items-center justify-between flex-wrap p-6 fixed top-0 w-full transition ease-in duration-300 z-10  ${handle && 'bg-black'}`}>
      <div className="flex items-center flex-shrink-0 text-white left-6 object-contain">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className="sm:w-36 w-28 mr-5" alt=""/>
        <ul className="sm:flex hidden">
          {
            list.map((val,i) => {
              return <li key={i} className={`mr-4`}>{val}</li>
            })
          }
        </ul>
      </div>
      <div className="right-6 object-contain">
        <img src="https://i.pinimg.com/736x/c3/7e/e2/c37ee2012b6e650656bdce0eda0e5294.jpg" className="sm:w-12 w-8" alt=""/>
      </div>
    </nav>
  );
}

export default Navbar;
