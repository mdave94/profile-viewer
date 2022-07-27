import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral-50 tex-neutral-content'>

      <div className='container mx-auto'>
        <FaGithub className='inline pr-2 text-3xl'/>
          <Link to ='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>      
        </div> 

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to="/" className=' btn btn-ghost'>Home</Link>
          </div>
          <div className='flex justify-end'>
            <Link to="/about" className=' btn btn-ghost'>About</Link>
          </div>
        </div>
    </nav>
  )
}



Navbar.defaultProps = {
  title:'Github Finder'
}

Navbar.propTypes = {
  title: PropTypes.string
}



export default Navbar
