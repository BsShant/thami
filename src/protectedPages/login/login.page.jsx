import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import './styles.css';
import { authProcessStarts } from '../../store/authStore/auth.action';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import {
    
    useHistory,
   
} from "react-router-dom";
const Login = () => {
    const history = useHistory()
const [loginError, setLoginError] = useState('')
    const dispatch = useDispatch();
    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };



    const onFinish = (values) => {
        try{
            dispatch(authProcessStarts(values));

        }
        catch(error){
            console.log(error)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="LoginWrapper">
            <div className="LoginBox row">
                <div className="col-md-12">
                    <h2>Login</h2>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout= 'vertical'
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
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

                    <Form.Item>
                 <Form.Item name="remember" valuePropName="checked" noStyle>
                     <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot"  onClick={()=>{history.push('/forgot-password')}}>
                      Forgot password
                    </a>
                    </Form.Item>

                    <Form.Item>
                        <Button className="buttonReverse" htmlType="submit">
                            Submit
  </Button>
                    </Form.Item>
                </Form>
               {/* <a onClick={()=>{history.pushState('/forgotPassword')}}>Forgot Password?</a> */}
                </div>
            </div>
        </div>

    )
}


export default Login;