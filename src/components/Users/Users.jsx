import { useLoaderData } from "react-router-dom";
import User from "../User/User";

 const Users = () => {
   const users = useLoaderData();
    return (
        <div className="text-center max-w-7xl mx-auto">
            <h2 className="text-3xl">Our Users:{users.length}</h2>
           <div className=" grid grid-cols-3 gap-4">
            {
                    users.map((user, idx) => <User key={idx} user={user}></User>)
                }
           </div>
        </div>
    );
};

export default Users;