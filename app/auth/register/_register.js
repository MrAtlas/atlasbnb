'use client';
import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import LogoFull from '@/app/components/logo';
import { useAuth } from '@/app/state/auth/auth-context';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const { user, register } = useAuth();
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSignup = async (values) => {
    const { email, password, fullname, phonenumber } = values;
    const username = email.split('@')[0];

    console.log("form values", email, password, fullname, username, phonenumber)

    const registeredUser = await register(email, password, username, fullname, phonenumber);  // Pass the username as well
    if (registeredUser) {
      const userId = registeredUser.id;  // Extract the user ID
      router.push('/homepage');
    }
  };

  React.useEffect(() => {
    if (user && user.email) redirect('/dashboard');
  }, [user]);

  return (
    <Form
      form={form}
      style={{
        width: 550,
        padding: 16,
        border: '1px solid #efefef',
        borderRadius: 8,
        boxShadow: '0px 0px 12px -3px rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
      autoComplete="off"
      layout="vertical"
      onFinish={handleSignup}
    >
      <LogoFull fill={'#00B96B'} style={{ width: '100%', height: 44 }} />
      <Form.Item style={{ textAlign: 'center', fontSize: 30, paddingBottom: 15 }}>
        <h3 style={{ fontSize: 30, color: '#00804a' }}>Sign up</h3>
        <Typography.Text type="secondary">
          Already have an account? <Typography.Link>Sign in</Typography.Link>
        </Typography.Text>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Phone Number"
            name="phonenumber"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}
