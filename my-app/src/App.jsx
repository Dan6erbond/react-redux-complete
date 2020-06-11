import React, { Component } from "react";
import AddNinja from "./AddNinja";
import Ninja from "./Ninja";
import Heading from "react-bulma-components/lib/components/heading";
import Columns from "react-bulma-components/lib/components/columns";
import "./App.scss";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    this.setState({
      ninjas: [
        ...this.state.ninjas,
        (({ name, age, belt }) => ({
          name,
          age,
          belt,
          id: this.state.ninjas.length + 1,
        }))(ninja),
      ],
    });
  };

  deleteNinja = (id) => {
    this.setState({
      ninjas: this.state.ninjas.filter((n) => n.id !== id),
    });
  };

  componentDidMount() {
    console.log("Component mounted.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated.");
    console.dir(prevProps);
    console.dir(prevState);
  }

  render() {
    const columnSizes = {
      mobile: {
        size: 12,
      },
      desktop: {
        size: 6,
      },
    };

    return (
      <div className="App" style={{ padding: 50 }}>
        <Heading size={1}>My first React app!</Heading>
        <Heading subtitle size={5}>
          Welcome :)
        </Heading>

        <AddNinja addNinja={this.addNinja} />

        <br />

        <Heading size={3}>Ninjas</Heading>
        <div className="ninja-list">
          <Columns>
            {this.state.ninjas.map((ninja) => (
              <Columns.Column {...columnSizes} key={ninja.id}>
                <Ninja ninja={ninja} deleteNinja={this.deleteNinja} />
              </Columns.Column>
            ))}
          </Columns>
        </div>
      </div>
    );
  }
}

export default App;
