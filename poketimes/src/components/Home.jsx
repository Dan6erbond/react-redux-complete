import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pokeball from "../img/pokeball.png";
import AddPost from "./AddPost";

const Home = (props) => {
  const { posts } = props;

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      <AddPost />
      <div style={{ display: "block", width: "100%", paddingTop: 40 }}>
        {posts.length ? (
          posts
            .sort((a, b) => (a.id === b.id ? 0 : a.id > b.id ? -1 : 0))
            .slice(0, 10)
            .map((post) => (
              <div className="post card" key={post.id}>
                <img src={Pokeball} alt="pokeball" />
                <div className="card-content">
                  <span className="card-title">{post.title}</span>
                  <p>{post.body}</p>
                </div>
                <div className="card-action">
                  <Link to={`/posts/${post.id}`}>View</Link>
                </div>
              </div>
            ))
        ) : (
          <div className="center">No posts yet!</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(Home);
