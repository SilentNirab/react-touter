import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, address, phone, website, email} = user;
    return (
        <div className="text-center border-r-2 border-orange-500 text-white text-lg ">
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p>Website:{website}</p>
            <p>Addres:{address.street},{address.city}</p>
            <Link to={`/posts`}>View Post</Link>
        </div>
    );
};


export default UserDetails;