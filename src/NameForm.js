import React from "react";

class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }
  render() {
    const handleFirstNameChange = (e) => {
      // console.log("event Is ",e.target.value);
      this.setState({
        firstName: e.target.value
      });
    };
    const handleLastNameChange = (e) => {
      // console.log("event Is ",e.target.value);
      this.setState({
        lastName: e.target.value
      });
    };
    return (
      <>
        <form>
          <input
            placeholder="First Name"
            value={this.state.firstName}
            onChange={handleFirstNameChange}
          />
          <input
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={handleLastNameChange}
          />
        </form>
        <h3>
          Full Name is {this.state.firstName} {this.state.lastName}
        </h3>
      </>
    );
  }
}
export default NameForm;
