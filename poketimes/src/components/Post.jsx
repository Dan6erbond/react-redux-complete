import React from "react";
import { connect } from "react-redux";
import { deletePost as deletePostAction } from "../app/actions/postActions";

const Post = (props) => {
  const { post, deletePost } = props;

  const handleClick = () => {
    deletePost(post.id);
    props.history.push("/");
  };

  return (
    <div className="container">
      {post ? (
        <div>
          <h4>
            {post.title} #{post.id}
          </h4>
          <span className="light small">by {post.userId}</span>
          <p style={{ marginBottom: 20 }}>{post.body}</p>
          <div className="right">
            <button className="btn-flat" onClick={handleClick}>
              <i className="material-icons left">delete</i>Delete Post
            </button>
          </div>
        </div>
      ) : (
        <div className="center">Loading post...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    post: state.posts.find((post) => post.id == id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePostAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
