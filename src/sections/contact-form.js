import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 24,
    },
  };
  
  const validateMessages = {
    required: 'This field is required',
    types: {
      email: 'Please input a valid email',
      number: 'Not a valid number',
    },
    number: {
      range: 'Must be between ${min} and ${max}',
    },
  };

  const onFinish = values => {
    console.log(values);
  };

  export default class ContactForm extends Component {
    render() {
      return (
        <Form id="contact-form" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
                {
                required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
                {
                type: 'email',
                required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item 
            name={['user', 'introduction']} 
            label="Message" 
            rules={[
                {
                required: true,
                },
            ]}>
            <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        );
    }; 
  }