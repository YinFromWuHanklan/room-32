import React, { useState } from 'react';

// import { Link } from "gatsby"

// export default function Nav() {
//     return <nav class="nav justify-content-center">
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="#kontakt">Kontakt</Link>
//             </li>
//             <li>
//                 <Link to="#kontakt">Kontakt</Link>
//             </li>
//             <li>
//                 <Link to="#kontakt">Kontakt</Link>
//             </li>
//         </ul>
//     </nav>
// }


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  
  function Navi(props) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="me-auto">
            Room 32
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default Navi;