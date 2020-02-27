import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Field, Form, Formik, FormikProps } from "formik";
import "../index.css";
import { Input, Button } from "antd";

const TextInput = ({ field, form, ...props }) => {
  return (
    <Input style={{ marginBottom: 20, width: "70%" }} {...field} {...props} />
  );
};

const LabelText = styled.div`
  margin-bottom: 10px;
  font-size: 12;
  font-weight: 500;
`;

export default () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        console.log(values);
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
            type="mobile"
            name="mobile"
            placeholder="Please enter your mobile number"
            component={TextInput}
          />
        </Form>
      )}
    </Formik>
  );
};
