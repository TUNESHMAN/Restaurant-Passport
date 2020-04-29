import React, { useState } from "react";
import { Form, Icon, Input, Button} from "antd";
// import "./form.css";
import { connect } from "react-redux";


export const Addcity = (props) => {
  console.log(props.form);
  const [formValues, setFormValues] = useState({
    city: "",
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    props.toggleModal();
    e.preventDefault();
  };
  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("drug", {
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
            name="city"
            setFieldsValue={formValues.city}
            onChange={handleChange}
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

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Addcity);
export default connect()(WrappedNormalLoginForm);
