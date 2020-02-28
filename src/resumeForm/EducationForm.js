import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Formik, Form, Field, FieldArray } from "formik";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "../index.css";
import {
  TextInput,
  TextAreaInput,
  SubmitButton,
  LabelText
} from "../components";

const HeaderText = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export default ({ history }) => {
  return (
    <Formik
      initialValues={{
        education: [
          { degree: "", university: "", year: "", subject: "", details: "" }
        ]
      }}
      onSubmit={values => {
        console.log(values);
        // history.push("/resume-form/education");
      }}
    >
      {formprops => (
        <Form>
          <FieldArray
            name="education"
            render={arrayHelpers => (
              <>
                {formprops.values &&
                  formprops.values.education.map((each, i) => (
                    <>
                      <HeaderText>{`Education ${i + 1}`}</HeaderText>
                      <LabelText>Degree</LabelText>
                      <Field
                        type="text"
                        name={`education[${i}].degree`}
                        placeholder="Please enter your degree"
                        component={TextInput}
                      />
                      <LabelText>University/Board</LabelText>
                      <Field
                        type="text"
                        name={`education[${i}].university`}
                        placeholder="University/Board"
                        component={TextInput}
                      />
                      <LabelText>Year of passing</LabelText>
                      <Field
                        type="text"
                        name={`education[${i}].year`}
                        placeholder="YYYY"
                        component={TextInput}
                      />
                      <LabelText>Subject</LabelText>
                      <Field
                        type="text"
                        name={`education[${i}].subject`}
                        placeholder="Subject"
                        component={TextInput}
                      />
                      <LabelText>Details</LabelText>
                      <Field
                        type="text"
                        name={`education[${i}].details`}
                        placeholder="Details"
                        component={TextAreaInput}
                      />
                      <div style={{ margin: "auto", float: "right" }}>
                        <Button
                          type="dashed"
                          onClick={() =>
                            i > 0 ? arrayHelpers.remove(i) : null
                          }
                        >
                          Delete
                        </Button>
                      </div>
                      <hr />
                    </>
                  ))}
                <div style={{ margin: "auto", float: "right" }}>
                  <Button
                    type="dashed"
                    onClick={() =>
                      arrayHelpers.push({
                        degree: "",
                        university: "",
                        year: "",
                        subject: "",
                        details: ""
                      })
                    }
                  >
                    Add education
                  </Button>
                </div>
              </>
            )}
          ></FieldArray>

          <div>
            <SubmitButton label="Next" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
