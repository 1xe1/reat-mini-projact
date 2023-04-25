import { Link } from "react-router-dom"
import './Header.scss'
type Props = {}

const Header = ({}: Props) => {
  return (
    <nav>
        <div className="contianer">
            <ul className="nav-wrapper">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header