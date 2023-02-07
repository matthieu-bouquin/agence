import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( ) => {
return (
<div className='navbarItems'>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/works">Works</Link>
</div>
)};
export default Navbar;