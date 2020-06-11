import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../app/actions/postActions";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    userId: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h5>Add New Post</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Post title:</label>
          <input
            id="title"
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Post body:</label>
          <input
            id="body"
            type="text"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <label>Post userId:</label>
          <input
            id="userId"
            type="text"
            onChange={this.handleChange}
            value={this.state.userId}
          />
          <div className="right">
            <button className="btn-flat">Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(null, mapDispatchToProps)(AddPost);
