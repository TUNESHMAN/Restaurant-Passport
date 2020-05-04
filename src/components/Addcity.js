import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
// import "./form.css";
import { connect } from "react-redux";
import { addCity, getCity } from "../state/Actions/cityAction";

export const Addcity = (props) => {
  console.log(props.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((error, values) => {
      const cityPayload = {
        name: values.name,
      };
      if (!error) {
        console.log(cityPayload);
        
        props.toggleModal();
        props.addCity(cityPayload);
        props.getCity();
      } else {
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("name", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Name of city" },
            {
              type: "string",
              message: "Enter a city",
            },
          ],
        })(
          <Input
            name="name"
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="City"
          />
        )}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add City
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProp = (state) => {
  return {
    isFetching: state.cityList.isFetching,
    error: state.cityList.error,
    city: state.cityList.city,
  };
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Addcity);
export default connect(mapStateToProp, { addCity, getCity })(
  WrappedNormalLoginForm
);
