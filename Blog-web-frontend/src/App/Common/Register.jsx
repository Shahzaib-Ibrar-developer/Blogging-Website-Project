import React from 'react';
import { Form, Input, Button } from 'antd';
import '../../Styles/Register.css';  // Import your custom styles

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Add your registration logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Form className="modern-form" name="register" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
