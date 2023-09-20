import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {userId,title,body} = post;
    console.log(post);
    return (
        <div className='border-2 border-amber-500 p-5 rounded-lg space-y-4'>
            <h2 className='text-white text-xl font-bold normal-case'>{title}</h2>
            <p className='text-white text-md'>{body}</p>
            <Link to={`/users/${userId}`}>user</Link>
        </div>
    );
};

Post.propTypes = {
    post:PropTypes.object
};
export default Post;