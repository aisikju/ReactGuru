import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        id: "Default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component did mount");

    const data = await fetch("https://api.github.com/users/aisikju");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    const { login, id, avatar_url } = this.state.userInfo;

    // console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Location: {id}</h3>
        <h4>Contact: aisi@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
