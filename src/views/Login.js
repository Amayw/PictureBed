import React,{useRef} from 'react';
import {observer} from 'mobx-react'
import {useStores} from '../stores'
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
// const Login=observer(
//         ()=> {
//         const {AuthStore}=useStores();
//         const inputRef=useRef();
//
//         const bindChange = e => {
//             AuthStore.setUsername(inputRef.current.value)
//         }
//
//         return (
//             <>
//                 <h1>Login:{AuthStore.values.username}</h1>
//                 <input onChange={bindChange} ref={inputRef}/>
//             </>
//         );
//     }
// )
const FormWrapper=styled.div`
    border: 1px solid red;
    padding-top:100px ;
`

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 10 },
};

const Login = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormWrapper>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
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

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
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
