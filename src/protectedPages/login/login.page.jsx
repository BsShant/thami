import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.css';
import { authProcessStarts } from '../../store/authStore/auth.action';
// import { GoogleLogin } from 'react-google-login';
import { Form, Input, Button, Checkbox } from 'antd';
const Login = () => {

    const dispatch = useDispatch();
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };



    const onFinish = (values) => {
        dispatch(authProcessStarts(values));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="LoginWrapper">
            <div className="LoginBox">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
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
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
  </Button>
                    </Form.Item>
                </Form>
               
            </div>
        </div>

    )
}


export default Login;