import React, { useState } from "react";
import { Form, Input, Icon, Button, InputNumber } from "antd";
import NavBar from "./NavBar";
import { postRestaurant } from "../state/Actions/cityAction";
import { connect } from "react-redux";

function AddRestaurant(props) {
  const [cityId, setCityId] = useState("");

  const handleCityId = (value) => {
    setCityId(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((error, values) => {
      const restaurantPayload = {
        name: values.name,
        city: values.city,
        address: values.address,
        city_id: cityId,
        description: values.description,
      };
      if (!error) {
        props.postRestaurant(restaurantPayload);
      } else {
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <div>
      <NavBar />
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("name", {
            // rules are for form validation
            rules: [
              {
                required: true,
                message: "Name of restaurant",
              },
              { type: "string", message: "Enter a restaurant name" },
            ],
          })(
            <Input
              name="name"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Name of Restaurant"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("city", {
            // rules are for form validation
            rules: [
              {
                required: true,
                message: "Name of city",
              },
              { type: "string", message: "Enter name of city" },
            ],
          })(
            <Input
              name="city"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="City"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("address", {
            // rules are for form validation
            rules: [
              {
                required: true,
                message: "Address of Restaurant",
              },
              { type: "string", message: "Restaurant address" },
            ],
          })(
            <Input
              name="address"
              prefix={<Icon type="info" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Address of Restaurant"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("description", {
            // rules are for form validation
            rules: [
              {
                required: true,
                message: "Restaurant description",
              },
              { type: "string", message: "Describe the restaurant" },
            ],
          })(
            <Input
              name="description"
              prefix={<Icon type="info" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Description"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("city_id", {
            // rules are for form validation
            rules: [
              {
                required: true,
                message: "City id",
              },
              { type: "number", message: "Id of city" },
            ],
          })(
            <InputNumber
              name="city_id"
              prefix={<Icon type="info" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="City Id"
              onChange={handleCityId}
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary " htmlType="submit">
            ADD A RESTAURANT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.restaurantList.fetching,
    error: state.restaurantList.error,
    restaurant: state.restaurantList.restaurant,
  };
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  AddRestaurant
);
export default connect(mapStateToProps, { postRestaurant })(
  WrappedNormalLoginForm
);
