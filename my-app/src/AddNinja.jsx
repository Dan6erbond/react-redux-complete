import React, { Component } from "react";
import {
  Control,
  Field,
  Input,
  Label,
  Help,
  Select,
} from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";

export default class AddNinja extends Component {
  state = {
    name: "",
    age: undefined,
    ageValid: undefined,
    belt: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(this.state.age)) {
      this.setState({
        ageValid: false,
      });
      return;
    }

    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input
                placeholder="Name"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
              />
            </Control>
          </Field>
          <Field>
            <Label>Age</Label>
            <Control>
              <Input
                placeholder="Age"
                name="age"
                id="age"
                color={this.state.ageValid === false ? "danger" : null}
                value={this.state.age}
                onChange={this.handleChange}
                type="number"
              />
            </Control>
            {this.state.ageValid === false ? (
              <Help color="danger">Age must be a number</Help>
            ) : null}
          </Field>
          <Field>
            <Label>Belt</Label>
            <Control>
              <Select
                name="belt"
                id="belt"
                value={this.state.belt}
                onChange={this.handleChange}
              >
                {["black", "orange", "yellow", "red", "blue", "brown", "green"].map((color, index) => <option key={index}>{color}</option>)}
              </Select>
            </Control>
          </Field>
          <Control>
            <Button type="primary">Submit</Button>
          </Control>
        </form>
      </div>
    );
  }
}
