import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <a className="navbar-brand"><NavLink to="/">WikiCountries</NavLink></a>
    </div>
  </nav>
  )
}

export default NavBar