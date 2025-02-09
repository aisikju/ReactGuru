import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component did mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste Guru</h2>
        <UserClass name={"Aisik Saha (class)"} location={"Asansol"} />
        <UserClass name={"Elon Musk (class)"} location={"New York"} />
      </div>
    );
  }
}

export default About;
