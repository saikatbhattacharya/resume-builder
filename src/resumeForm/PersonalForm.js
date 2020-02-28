import React from "react";
import "antd/dist/antd.css";
import { Formik, Form, Field } from "formik";
import "../index.css";
import {
  TextInput,
  TextAreaInput,
  SubmitButton,
  LabelText
} from "../components";

export default ({ history }) => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        console.log(values);
        history.push("/resume-form/education");
      }}
    >
      {formprops => (
        <Form>
          <LabelText>Name</LabelText>
          <Field
            type="text"
            name="name"
            placeholder="Please enter your name"
            component={TextInput}
          />
          <LabelText>Email</LabelText>
          <Field
            type="email"
            name="email"
            placeholder="Please enter your primary Email"
            component={TextInput}
          />
          <LabelText>Mobile Number</LabelText>
          <Field
            type="text"
            name="mobile"
            placeholder="Please enter your mobile number"
            component={TextInput}
          />
          <LabelText>Designation</LabelText>
          <Field
            type="text"
            name="designation"
            placeholder="Please enter your designation"
            component={TextInput}
          />
          <LabelText>About You</LabelText>
          <Field
            type="text"
            name="about"
            placeholder="Please enter your designation"
            component={TextAreaInput}
          />
          <div>
            <SubmitButton label="Next" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
