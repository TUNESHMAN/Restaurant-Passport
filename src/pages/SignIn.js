import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import "./form.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    props.form.validateFieldsAndScroll((error, values) => {
      const loginDetails = {
        username: values.username,
        password: values.password,
      };
      if (!error) {
        message.loading(`You are logging in...`, 1.5);
        axios
          .post(
            `https://build-restaurant-passport1.herokuapp.com/users/login`,
            loginDetails
          )
          .then((res) => {
            setLoading(false);
            message.success(`You are logged in successfully`, 1.2);
            localStorage.setItem(`token`, res.token);
            props.history.push("/cities");
          })
          .catch((error) => {
            setLoading(false);
            message.error(
              `Unsuccessful login attempt, please register or try again!`,
              2.0
            );
          });
      } else {
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className="form-div">
      <Spin spinning={loading}>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              //rules are for the form validation
              rules: [
                { required: true, message: "Please input a username!" },
                {
                  type: "string",
                  message: "Username is not correct",
                },
              ],
            })(
              <Input
                name="username"
                //form icon in the email field, change type for different icons, see antdesign docs
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              //rules are for the form validation
              rules: [
                { required: true, message: "Please input a password!" },
                {
                  type: "string",
                  message: "Invalid password",
                },
              ],
            })(
              <Input
                name="password"
                type="password"
                //form icon in the email field, change type for different icons, see antdesign docs
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            Don't have an account?
            <Link to="/register"> Sign-up here!</Link>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(SignIn);
export default WrappedNormalLoginForm;
