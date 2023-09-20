import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto"> 
            <h3 className="text-xl font-bold text-white">My WebSite</h3>
            <nav className="text-center my-5 space-x-4 text-lg font-semibold text-white ">
                <NavLink className="" to="/">Home</NavLink>
                <NavLink className="" to="/users">Users</NavLink>
                <NavLink  className=""to="/posts">Posts</NavLink>
                <NavLink className="" to="/about">About</NavLink>
                <NavLink className="" to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};



export default Header;