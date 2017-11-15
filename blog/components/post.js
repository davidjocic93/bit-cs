import React from "react";
import PropTypes from "prop-types";



const Post = function (props) {
    return (
        <div style={{ textAlign: "center", width: "80%", borderBottom: "1px solid black", margin: "0px auto" }}>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
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