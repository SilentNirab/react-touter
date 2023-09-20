import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id ,name,email, website, phone} = user;
    return (
        <div className='border-2 border-amber-400 p-4 rounded-lg text-left'>
            <h2 className='text-xl'>{name}</h2>
            <p className='text-lg'>Email: {email}</p>
            <p className='text-lg'>Phone: {phone}</p>
            <p className='text-lg'>Website: {website}</p>
            <Link to={`/users/${id}`}>UserDetails</Link>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object,
};

export default User;