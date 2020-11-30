import React from 'react';
import styled from 'styled-components';
import {Button, Form, Input} from 'antd';

const FormWrapper = styled.div`
    padding-top:50px ;
    >h1{
      text-align: center;
    }
`;

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 8},
};
const tailLayout = {
    wrapperCol: {offset: 11, span: 2},
};

const Login = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const validateUserName=(rule,value)=>{
        if(/\W/.test(value)) return Promise.reject('不能出现字母数字下划线以外的字符')
        if(value.length<4||value.length>10) return Promise.reject('长度外4到10个字符')
        return Promise.resolve();
    }

    return (
        <FormWrapper>
            <h1>登录</h1>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{
                        required: true,
                        message: 'Please input your username!'
                    },
                        {
                            validator:validateUserName
                        }]
                    }
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{
                        required: true,
                        message: 'Please input your password!'
                    },
                        {
                            min: 6,
                            message: 'password must be at least 6 characters'
                        }]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default Login;
