import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

export const TextInput = ({ field, form, ...props }) => {
  return (
    <Input style={{ marginBottom: 20, width: "70%" }} {...field} {...props} />
  );
};

export const TextAreaInput = ({ field, form, ...props }) => {
  const { TextArea } = Input;
  return (
    <TextArea
      style={{ marginBottom: 20, width: "70%" }}
      {...field}
      {...props}
    />
  );
};

export const SubmitButton = ({ label, field, form, ...props }) => {
  return (
    <Button type="primary" htmlType="submit" {...field} {...props}>
      {label}
    </Button>
  );
};

export const LabelText = styled.div`
  margin-bottom: 10px;
  font-size: 12;
  font-weight: 500;
`;
