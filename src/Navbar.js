import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        <h1 style={{paddingLeft: '30px', fontFamily: 'cursive' }}>FITYATRA</h1>
      </div>
      <ul style={{paddingLeft: '30px', fontFamily: 'cursive' }}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">Report</CustomLink>
        <CustomLink to="/pricing">Products</CustomLink>
        <button disabled style={{ cursor: 'not-allowed', margin: 'auto' }}>
              Subscribe
            </button>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}