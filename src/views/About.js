import React from 'react';
import styled from 'styled-components'

const AboutWrapper=styled.div`
    >div{

    }
  

`
function About() {
    return (
        <AboutWrapper>
                <h1>蓝胖子图床</h1>
                <div>这是我用React实现的一个图床项目，上传图片前请记得先登录或注册。</div>
                <div>登录后把需要上传的图片拖拽至哆啦A梦的嘴巴或者直接点击哆啦A梦的嘴巴即可上传。</div>
                <div>在上传历史中，可以查看所有上传的图片。</div>
                <div>尽管做了移动端适配，但还是建议PC端使用，体验更<span>佳</span>哦~</div>
        </AboutWrapper>
    );
}

export default About;