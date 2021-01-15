import React from "react";
import FormCard from "./FormCard/FormCard";
import Input from "../Input/Input";

const Form = (props) => {
  const formInputs = [];
  for (let key in props.formFields) {
    formInputs.push({
      id: key,
      elementType: props.formFields[key].elementType,
      elementConfig: props.formFields[key].elementConfig,
      value: props.formFields[key].value,
      labelName: props.formFields[key].labelName,
    });
  }

  console.log(formInputs);

  return (
    <div>
      <FormCard>
        {formInputs.map((obj) => (
          <Input
            key={obj.id}
            name={obj.id}
            elementType={obj.elementType}
            elementConfig={obj.elementConfig}
            value={obj.value}
            labelName={obj.labelName}
            clicked={(event) => props.clicked(event, obj.id)}
          />
        ))}
      </FormCard>
    </div>
  );
};

export default Form;
