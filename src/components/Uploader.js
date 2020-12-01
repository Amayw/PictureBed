import React from 'react';
import logo from '../assets/3.jpg';
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import {Upload,Button} from 'antd';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;


const UploaderWrapper = styled.div`
       width: 80vw;
       //height: 76vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       //justify-content: center;
       position: relative;
       >img{
          width: 400px;
       }
       >span{
          position: absolute; 
          top: 55%;
          left: 50%;
          transform: translateX(-50%);
          >.ant-upload.ant-upload-drag .ant-upload{
            padding: 0 30px;
          }
          >.ant-upload.ant-upload-drag p.ant-upload-text{
            position: absolute;
            top: -500%;
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
            fill: red;
          }
          >.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon{
            color:#1890ff;
          }
       }
       >.resultUrl{
            padding-top: 10px;
            display: flex;
            align-items: center;
            >div{
              margin-left: 10px;
              background-color:#fff;
              padding: 4px;
            }
          }
`;


const Uploader = observer(() => {
    const {ImageStore} = useStores();
    const props = {
        showUploadList:false,
        beforeUpload: file => {
            console.log('here');
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name);
            ImageStore.addImage().then((serverFile) => {
                    console.log('上传成功');
                    console.log(serverFile);
                }, (err) => {
                    console.log('上传失败');
                    console.log(err);
                }
            );
            return false;
        }
    };

    return (
        <UploaderWrapper>
            <img src={logo}/>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text"><strong>点击</strong>或<strong>拖拽文件</strong>到我<strong>嘴巴</strong>里</p>
            </Dragger>
            <div className="resultUrl">
                <Button type="primary">上传结果</Button>
                <div>
                    {ImageStore.serverFile ? ImageStore.serverFile.attributes.url.attributes.url : ''}
                </div>
            </div>
        </UploaderWrapper>
    );
});

export default Uploader;