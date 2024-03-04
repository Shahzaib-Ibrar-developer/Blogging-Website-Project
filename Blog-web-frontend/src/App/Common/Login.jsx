import React from 'react';
import { Form, Input, Button } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import '../../Styles/Login.css'; // Import your custom styles

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Add your login logic here
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <Form name="login" onFinish={onFinish} className="login-form">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
