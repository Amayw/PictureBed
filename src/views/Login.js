import React from 'react';
import styled from 'styled-components';
import {Button, Form, Input} from 'antd';

const FormWrapper = styled.div`
    width: 40vw;
    margin: 100px auto;
    
`;

const layout = {
    labelCol: {span: 4},
    // wrapperCol: {span: 8},
};
const tailLayout = {
    wrapperCol: {offset: 12},
};

const Register = () => {
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
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{
                        required: true,
                        message: '请输入用户名!'
                    },
                        {
                            validator:validateUserName
                        }]
                    }
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{
                        required: true,
                        message: '请输入密码！'
                    },
                        {
                            min: 6,
                            message: '长度不少于6个字符'
                        }]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default Register;
