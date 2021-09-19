import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements';

export const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Shawarma</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                    </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar;