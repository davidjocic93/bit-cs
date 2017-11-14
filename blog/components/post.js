import React from "react";
import PropTypes from "prop-types";



const Post = function (props) {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <hr/>
        </div>
    );
};

// Post.propTypes = {
//     post: PropTypes.shape ({
//         title: PropTypes.string.isRequired,
//         body: PropTypes.number.isRequired
//     })
// };



export default Post;