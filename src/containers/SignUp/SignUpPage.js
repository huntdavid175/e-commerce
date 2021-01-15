import React, { Component } from "react";
import Form from "../../components/UI/Form/Form";

class SignUpPage extends Component {
  state = {
    orderForm: {
      name: {
        labelName: "Name",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
      },
      email: {
        labelName: "Email",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "@email",
        },
        value: "",
        validation: {
          required: true,
        },
      },
      address: {
        labelName: "Adress",
        elementType: "input",
        elementConfig: {
          type: "Adress",
          placeholder: "C71/18",
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
        <h1>Sign Up</h1>
        <Form
          formFields={this.state.orderForm}
          clicked={this.formInputHandler}
        />
      </div>
    );
  }
}

export default SignUpPage;
