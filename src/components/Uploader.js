import React,{useRef} from 'react'
import logo from '../assets/1.jpg'
import styled from 'styled-components';
import {useStores} from '../stores';
import {observer} from 'mobx-react';

const UploaderWrapper=styled.div`
       width: 80vw;
       height: 76vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       background: url("${logo}") no-repeat;
       border: 1px solid red;
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
            <input type="file" ref={fileRef} onChange={changeFile} />
        </UploaderWrapper>
    )
})

export default Uploader;