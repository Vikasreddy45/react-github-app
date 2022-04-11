import React,{useContext,useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap"

import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Header() {

    const context = useContext(UserContext)
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color='info' light expand="md">
        <NavbarBrand><Link to='/' className='text-white'>Git App</Link></NavbarBrand>
        <NavbarText className='text-white'>{context.user?.email ? context.user.email : ""}</NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" style={{marginLeft:'auto'}} navbar>
                {
                    context.user ? (
                        <NavItem>
                    <NavLink
                    className='text-white'
                    style={{cursor:'pointer'}}
                    onClick={()=>{context.setUser(null)}}
                    >
                        Logout
                    </NavLink>
                </NavItem>
                    ) : (
                        <>
                        <NavItem>
                    <NavLink
                    className='text-white'
                    tag={Link}
                    to='/signup'
                    >
                        Signup
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className='text-white'
                    tag={Link}
                    to='/signin'
                    >
                        Signin
                    </NavLink>
                </NavItem>
                        </>
                    )
                }
            </Nav>
        </Collapse> 
    </Navbar>
  )
}
