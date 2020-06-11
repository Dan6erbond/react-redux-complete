import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchPosts, setUrl } from "./app/actions/postActions";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const App = (props) => {
  const { fetchPosts, setUrl, url } = props;

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/posts");
  });

  useEffect(() => {
    if (url) {
      fetchPosts(url);
    }
  }, [url, fetchPosts]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/posts/:id" component={Post} />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  url: state.url,
});

const mapDispatchToProps = (dispatch) => ({
  setUrl: (url) => dispatch(setUrl(url)),
  fetchPosts: (url) => dispatch(fetchPosts(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
