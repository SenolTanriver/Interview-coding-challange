import React from 'react';
import "../App.css"
const PostTitleList = ({ posts, onTitleClick }) => {


// Props olarak alınan post listesi li olarak listelendi ve onClick eventi verildi.
    return (
        <ul className='title-list'>
            {posts.map(post => (
                <li key={post.id} onClick={() => onTitleClick(post)}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default PostTitleList