import React from "react";
import styled from "styled-components";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import WorkExForm from "./WorkForm";
import AdditionalInfoForm from "./AdditionalInfoForm";
import ResumeTemplate from "../resumeTemplates";

const { Header, Content, Footer, Sider } = Layout;

const FormDiv = styled.div`
  background: #f0f2f5;
  width: 100%;
  height: 100vh;
`;

const getForm = page => {
  switch (page) {
    case "personal":
      return <PersonalForm />;
    case "education":
      return <EducationForm />;
    case "work":
      return <WorkExForm />;
    case "additional":
      return <AdditionalInfoForm />;
    default:
      break;
  }
};

const ResumeForm = props => {
  const {
    match: { params = {} }
  } = props;
  return (
    <FormDiv>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            position: "fixed",
            borderRadius: 4,
            left: 20,
            top: 20,
            bottom: 20,
            right: 20,
            padding: 10
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[params.page]}>
            <Menu.Item key="personal">
              <Link to="/resume-form/personal">
                <Icon type="user" />
                <span className="nav-text">Personal Info</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="education">
              <Link to="/resume-form/education">
                <Icon type="experiment" />
                <span className="nav-text">Education</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="work">
              <Link to="/resume-form/work">
                <Icon type="upload" />
                <span className="nav-text">Work Experience</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="additional">
              <Link to="/resume-form/additional">
                <Icon type="bar-chart" />
                <span className="nav-text">Additional Info</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          {/* <Header
            style={{ background: "#fff", padding: 0, position: "sticky" }}
          /> */}
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                margin: 20,
                height: "90vh",
                overflowY: "auto"
              }}
            >
              {getForm(params.page)}
            </div>
          </Content>
        </Layout>
        <Layout style={{ marginLeft: 20 }}>
          {/* <Header
            style={{ background: "#fff", padding: 0, position: "sticky" }}
          /> */}
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                margin: 20,
                height: "90vh",
                overflowY: "auto"
              }}
            >
              <ResumeTemplate />
            </div>
          </Content>
        </Layout>
      </Layout>
    </FormDiv>
  );
};

export default withRouter(ResumeForm);
