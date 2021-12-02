import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./PageForm.css";

const PageForm = (props) => {
  const [text, setText] = useState("");

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();

    const data = {
      name: text,
    };

    props.sendPageFormData(data);
    setText("");
  };

  return (
    <Form onSubmit={onSubmitHandle}>
      <FormGroup>
        <Label for="textInput">Name</Label>
        <Input
          type="text"
          name="text"
          id="textInput"
          placeholder="with a placeholder"
          onChange={textChangeHandler}
          value={text}
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

export default PageForm;
