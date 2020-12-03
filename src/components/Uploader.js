import React, {useRef} from 'react';
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer,useLocalStore} from 'mobx-react';
import {Upload,message,Spin} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import pic from '../assets/7.jpg';

const {Dragger} = Upload;

const UploaderWrapper = styled.div`
       //width: 80vw;
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
                    top: -386%;
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
            border-radius: 8px;
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
               >div{
                 &.inputGroup{
                   display: flex;
                   flex-direction: column;
                       >input{
                        border:1px solid #ccc;
                        border-radius: 2px;
                        color: #666;
                           &.inputTop{
                           margin-bottom: 4px;
                           }
                       }
                 }
               }
               
               
            }
          }
`;


const Uploader = observer(() => {
    const widthRef = useRef();
    const heightRef = useRef();
    const {ImageStore,UserStore} = useStores();
    const store = useLocalStore(() => ({
        width: null,
        setWidth(value) {
            store.width = value;
        },
        get widthStr() {
            return store.width ? `/w/${store.width}` : '';
        },
        height: null,
        setHeight(value) {
            store.height = value;
        },
        get heightStr() {
            return store.height ? `/h/${store.height}` : '';
        },
        get fullStr() {
            return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr;
        }

    }));

    const changeWidth = () => {
        store.setWidth(widthRef.current.value);
    };
    const changeHeight = () => {
        store.setHeight(heightRef.current.value);
    };

    const props = {
        showUploadList: false,
        beforeUpload: file => {
            ImageStore.serverFile=null;
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name);
            if(UserStore.currentUser===null){
                message.warning('请先登录再上传！')
                return false;
            }
            if(!(/(svg$)|(jpg$)|(png$)|(jpeg$)|(gif$)/ig.test(file.type))){
                message.error('只能上传svg/jpg/jpeg/png/gif格式的图片！');
                return false;
            }

            if(file.size>1024*1024){
                message.error('图片最大1M！');
                return false;
            }

            ImageStore.addImage().then((serverFile) => {
                message.info('上传成功！');
                }, (err) => {
                message.error('上传失败！');
                }
            );
            return false;
        }
    };

    return (
        <UploaderWrapper>
            <div className="uploadLeft">
                <Spin tip="上传中" spinning={ImageStore.isUploading}>
                <img src={pic} alt="哆啦A梦"/>
                </Spin>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text"><strong>点击</strong>或<strong>拖拽文件</strong>到我<strong>嘴巴</strong>里</p>
                    </Dragger>
            </div>
            {ImageStore.serverFile?(
                <div className="resultDisplay">
                    <h1>上传结果</h1>
                    <div className="item">
                        <span>线上地址</span>
                        <div><a target="_blank" rel="noreferrer"
                                href={ImageStore.serverFile.attributes.url.attributes.url}>
                            {ImageStore.serverFile.attributes.url.attributes.url}
                        </a></div>
                    </div>
                    <div className="item">
                        <span>文件名称</span>
                        <span>{ImageStore.filename}</span>
                    </div>
                    <div className="item">
                        <span>图片预览</span>
                        <img  alt="上传图片展示" src={ImageStore.serverFile.attributes.url.attributes.url}/>
                    </div>
                    <div className="item">
                        <span>更多尺寸</span>
                        <div className="inputGroup">
                            <input ref={widthRef} onChange={changeWidth} className='inputTop' placeholder="最大宽度 (可选)"/>
                            <input ref={heightRef} onChange={changeHeight} placeholder="最大高度 (可选)"/>
                        </div>
                    </div>
                    <div className="item">
                        <span>重置地址</span>
                        <div>
                            <a target='_blank' rel="noreferrer" href={store.fullStr}>{store.fullStr}</a>
                        </div>
                    </div>

                </div>
            ) : null}
        </UploaderWrapper>
    );
});

export default Uploader;