import React, { Component } from "react";
import Form from "../../components/UI/Form/Form";

class SignInPage extends Component {
  state = {
    orderForm: {
      username: {
        labelName: "UserName",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "UserName",
        },
        value: "",
        validation: {
          required: true,
        },
      },
      password: {
        labelName: "Password",
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "password",
        },
        value: "",
        validation: {
          required: true,
        },
      },
    },
  };

  formInputHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const newIdentifier = { ...updatedOrderForm[inputIdentifier] };
    newIdentifier.value = event.target.value;
    updatedOrderForm[inputIdentifier] = newIdentifier;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Form
          formFields={this.state.orderForm}
          clicked={this.formInputHandler}
        />
      </div>
    );
  }
}

export default SignInPage;
