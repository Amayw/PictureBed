import React,{useRef} from 'react'
import logo from '../assets/3.jpg'
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const UploaderWrapper=styled.div`
       width: 80vw;
       height: 76vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       position: relative;
       >img{
          width: 400px;
       }
       >span{
          position: absolute; 
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          >.ant-upload.ant-upload-drag .ant-upload{
            padding: 0 30px;
          }
          >.ant-upload.ant-upload-drag p.ant-upload-text{
            position: absolute;
            top: -510%;
            color:#394460;
            margin: 0;
            padding: 0;
            width: 120px;
            left: 50%;
            transform: translateX(-50%);
          }
          >.ant-upload{
            //padding: 0;
            background-color: transparent;
          }
          >.ant-upload.ant-upload-drag p.ant-upload-drag-icon{
            margin-bottom: 0;
          }
       }
`;

const Uploader=observer(()=>{
    const fileRef=useRef();
    const {ImageStore} =useStores();
    const changeFile=()=>{
        console.log('here');
        if(fileRef.current.files.length>0){
            const file=fileRef.current.files[0];
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name);
            ImageStore.addImage().then((serverFile)=>{
                    console.log('上传成功');
                console.log(serverFile);
                },(err)=>{
                    console.log('上传失败');
                    console.log('最外面');
                    console.log(err);
                }
            )
        }
    }

    return (
        <UploaderWrapper>
            <img src={logo} />
            {/*<input type="file" ref={fileRef} onChange={changeFile} />*/}
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text"><strong>点击</strong>或<strong>拖拽文件</strong>到我<strong>嘴巴</strong>里</p>
                {/*<p className="ant-upload-hint">*/}
                {/*    Support for a single or bulk upload. Strictly prohibit from uploading company data or other*/}
                {/*    band files*/}
                {/*</p>*/}
            </Dragger>
        </UploaderWrapper>
    )
})

export default Uploader;