import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAuth = ({ title, paragraph1, paragraph2, link }) => {
  return (
    <div className="navbar shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <p>
            {paragraph1}{' '}
            <Link to={link} className="text-blue-500 font-medium">
              {paragraph2}
            </Link>
          </p>
        </ul>
      </div>
    </div>
  )
}

export default NavbarAuth