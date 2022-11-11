import { Link, NavLink } from 'react-router-dom'
import "./style/header.css"



const Header = () => {
    return (
        <>
            <div className='navbar'>
                <NavLink className="active" to="/Home">Home</NavLink>
                <Link className="bollywood" to="/Bollywood">Bollywood</Link>
                <Link className='hollywood' to="/Hollywood">Hollywood</Link>
                <Link className="techology" to="/Technology">Technology</Link>
                <Link className='fitness' to="/Fitness">Fitness</Link>
                <Link className="food" to="/Food">Food</Link>
            </div>
        </>
    )
}

export default Header;
