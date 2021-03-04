import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav class="">
      <div class="nav-wrapper container">
        <NavLink id="linkStartPage" to="/">Breakout</NavLink>
        <ul id="nav-mobile" class="right">
          <li>
            <NavLink id="linkMainPage"  to="/main">Main</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink id="linkStatisticPage" to="/statistic">Statistic</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}