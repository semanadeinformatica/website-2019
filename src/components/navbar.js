import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import Logo from "../images/svg/logo_sinf_simp.inline.svg"

import NavbarStyles from "../styles/navbar.module.css"

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar dark fixed="top" expand="md" className={NavbarStyles.navbar}>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className=" w-100 order-1 order-md-0 dual-collapse2"
          >
            <Nav navbar className="mr-auto ml-0">
              <NavItem className="px-2">
                <NavLink className={NavbarStyles.navLink} href="#sobre-nos">
                  Sobre nós
                </NavLink>
              </NavItem>
              <NavItem className="px-2">
                <NavLink className={NavbarStyles.navLink} href="#speakers">
                  Speakers
                </NavLink>
              </NavItem>
              <NavItem className="px-2">
                <NavLink
                  className={NavbarStyles.navLink}
                  href="https://www.eventbrite.com/e/semana-de-informatica-tickets-50695985056"
                >
                  Bilhetes
                </NavLink>
              </NavItem>
              <NavItem className="px-2">
                <NavLink className={NavbarStyles.navLink} href="#contactos">
                  Contactos
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <div className="mx-auto order-0">
            <NavbarBrand className="mx-auto" href="/">
              <Logo className={NavbarStyles.logo} />
            </NavbarBrand>
          </div>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="w-100 order-3 dual-collapse2"
          >
            <Nav navbar className="ml-auto">
              <NavItem className="px-2">
                <NavLink className={NavbarStyles.navLink} href="#programa">
                  Programa
                </NavLink>
              </NavItem>
              <NavItem className="px-2">
                <NavLink className={NavbarStyles.navLink} href="/equipa">
                  Equipa
                </NavLink>
              </NavItem>
              <NavItem className="px-2">
                <NavLink
                  className={NavbarStyles.navLink}
                  href="/competicao-programacao"
                >
                  Competição
                </NavLink>
              </NavItem>
              <NavItem className="px-2">
                <NavLink
                  className={NavbarStyles.navLink}
                  href="http://2018.sinf.pt"
                >
                  2018
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
