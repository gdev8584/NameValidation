import React from 'react';

class NameForm extends React.Component{
  render(){
    return(
      <form>
        <input placeholder='First Name' />
        <input placeholder='Last Name'  />
      </form>
    );
  }
}
export default NameForm;