import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <footer className="footer">
      <div className="contact">
        <h3 style={{paddingLeft: '30px' }} >Contact: +91-9352299663</h3>
      </div>
      <ul style={{paddingRight: '80px', fontFamily: 'cursive' }}>
        <CustomLink to="https:/vishalsmyportfolio.netlify.app">About</CustomLink>
        <CustomLink to="https:/www.linkedin.com/in/vishal-sharma-a0724a197">LinkedIn</CustomLink>
        <CustomLink to="https:/www.instagram.com/vishal__4802">Instagram</CustomLink>
      </ul>
    </footer>
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