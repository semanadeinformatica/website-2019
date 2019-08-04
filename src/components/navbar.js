import React from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import Logo from "../images/svg/logo_sinf_simp.inline.svg"
import NavbarStyles from "../styles/navbar.module.css"

// Markup for navbar links redirecting to an internal page
const InternalNavLink = ({ to, text }) => (
  <Link
    className={`nav-link ${NavbarStyles.navLink}`}
    activeClassName={NavbarStyles.navLinkActive}
    to={to}
  >
    {text}
  </Link>
)

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
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className=" w-100 order-1 order-md-0 dual-collapse2"
          >
            <Nav navbar className="mr-auto ml-0">
              <NavItem className="px-2">
                <InternalNavLink to="/#sobre-nos" text="Sobre nós" />
              </NavItem>
              <NavItem className="px-2">
                <InternalNavLink to="/#speakers" text="Speakers" />
              </NavItem>
              <NavItem className="px-2">
                <InternalNavLink to="/#sponsors" text="Sponsors" />
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
                <InternalNavLink to="/#contactos" text="Contactos" />
              </NavItem>
            </Nav>
          </Collapse>
          <div className="mx-auto order-0">
            <Link className="navbar-brand mx-auto" to="/">
              <Logo fill="#000" className={NavbarStyles.logo} />
            </Link>
          </div>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="w-100 order-3 dual-collapse2"
          >
            <Nav navbar className="ml-auto">
              <NavItem className="px-2">
                <InternalNavLink to="/programa" text="Programa" />
              </NavItem>
              <NavItem className="px-2">
                <InternalNavLink to="/equipa" text="Equipa" />
              </NavItem>
              <NavItem className="px-2">
                <InternalNavLink
                  to="/competicao-programacao"
                  text="Competição"
                />
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
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    )
  }
}
