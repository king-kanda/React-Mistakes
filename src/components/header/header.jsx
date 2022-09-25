import React , {useRef} from 'react'
import './header.css'

const Header = () => {

  const mobNav = useRef(null);

  const showNav = () => {
    mobNav.current.classList.toggle("hide")
    console.log("vijana fire")
  }
 

  return (
    <div className='menu-wrapper  bg-blue-900'>
    
       <nav className='flex items-center justify-between container text-white p-5' >
          <a href="/" className="logoo">
            logoX
          </a>
          <div className="mobile-menu-trigger lg:hidden md:hidden border p-2" onClick={showNav}>
            open menu 
          </div>
          <div className="main-menu hidden w-full md:block md:w-auto " >
            <ul className='flex  items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                <li className='font-bold' >Item 1 </li>
                <li>Item 1 </li>
                <li>Item 1 </li>
                <li>Item 1 </li>
            </ul>
          </div>
       </nav>
       <div ref={mobNav} className="mobile-nav  lg:hidden md:hidden bg-blue-700 container ">
           <div className="mob-items p-4">
            <div className="mob-item-nav flex items-center justify-between">
                <a href="/" className='border text-white p-2 font-bold'>
                    logo
                </a>
                <div className="close">
                    <button onClick={showNav} className="clos border p-2 text-white">
                        close
                    </button>
                </div>
            </div>
            <div className="links flex items-center justify-center ">
                <ul className='text-white text-2xl p-5'>
                    <li className='p-3 font-bold'>
                        1. Item
                    </li>
                    <li className='p-3 font-bold'>
                        2. Item
                    </li>
                    <li className='p-3 font-bold'>
                        3. Item
                    </li>
                </ul>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Header