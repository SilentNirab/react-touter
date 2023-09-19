import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto"> 
            <h3 className="text-xl font-bold text-white">My WebSite</h3>
            <nav className="text-center my-5 space-x-4 text-lg font-semibold text-white ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};



export default Header;