import React from 'react';
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import {Upload,Input} from 'antd';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;

const UploaderWrapper = styled.div`
       width: 80vw;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       >.uploadLeft{
          margin: 30px 0;
          position: relative;
            >img{
              width: 400px;
               }
               >span{
                  position: absolute; 
                  top: 70%;
                  left: 50%;
                  transform: translateX(-50%);
                  >.ant-upload.ant-upload-drag .ant-upload{
                    padding: 0 30px;
                  }
                  >.ant-upload.ant-upload-drag p.ant-upload-text{
                    position: absolute;
                    top: -420%;
                    color:#394460;
                    margin: 0;
                    padding: 0;
                    width: 200px;
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
                  >.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon{
                    color:#1890ff;
                  }
               }
       }
       >.resultDisplay{
            border: 1px dashed #ccc;
            padding: 30px 60px;
            display: flex;
            flex-direction: column;
            >h1{
               text-align: center;
               color:#394460;
            }
            .item{
               display: flex;
               margin-bottom: 10px;
               >span{
               color:#394460;
               margin-right: 10px;
               font-weight: bold;
               }
               >img{
               max-width: 600px;
               padding-top: 10px;
            }
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
            <div className="uploadLeft">
                <img src='/7.jpg'/>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text"><strong>点击</strong>或<strong>拖拽文件</strong>到我<strong>嘴巴</strong>里</p>
                </Dragger>
            </div>
            {ImageStore.serverFile ? (
                <div className="resultDisplay">
                    <h1>上传结果</h1>
                        <div class="item">
                            <span>线上地址</span>
                            <div><a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url}>
                                {ImageStore.serverFile.attributes.url.attributes.url}
                            </a></div>
                        </div>
                        <div class="item">
                            <span>文件名称</span>
                            <span>{ImageStore.filename}</span>
                        </div>
                        <div class="item">
                            <span>图片预览</span>
                                <img src={ImageStore.serverFile.attributes.url.attributes.url} />
                        </div>
                        <div class="item">
                            <span>更多尺寸</span>
                            <div>
                                <Input placeholder="最大宽度(可选)" />
                                <Input placeholder="最大高度(可选)" />
                            </div>
                        </div>
                </div>
            ):null}
        </UploaderWrapper>
    );
});

export default Uploader;