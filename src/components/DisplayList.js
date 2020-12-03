import React,{useEffect} from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

const DisplayItem=styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70vw;
      margin: 0 auto;
      border: 1px dashed #ccc;
      padding: 10px;
      border-radius: 4px;
      >div{
         &.spanName{
           padding: 0 10px;
         }
         >img{
         width: 120px;
         height:140px;
         object-fit: contain;
         }
      }
      
        @media (max-width: 1300px){
        width: 96vw;
        >div{
             >img{
             width: 80px;
             height:100px;
             object-fit: contain;
             }
        }
      }
      
      
        @media (max-width: 1000px){
            width: 96vw;
            flex-direction: column;
            justify-content:center;
        >div{
            text-align: center;
             >img{
             width: 60px;
             height:60px;
             object-fit: contain;
             }
        }
      }

`

const DisplayList=observer(()=>{
    const {HistoryStore}=useStores();
    const loadMore=()=>{
        HistoryStore.queryImage();
    }


    useEffect(()=>{
        return ()=>{
            HistoryStore.resetList();
        }
    },[HistoryStore])

    return (
        <div>
            <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={loadMore}
                hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
                useWindow={true}
            >
                <List
                    dataSource={HistoryStore.list}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <DisplayItem>
                                <div>
                                    <img src={item.attributes.url.attributes.url} />
                                </div>
                                <div className="spanName">
                                    {item.attributes.filename}
                                </div>
                                <div className="spanName">
                                    <a target="_blank" rel="noreferrer" href={item.attributes.url.attributes.url}>{item.attributes.url.attributes.url}</a>
                                </div>

                            </DisplayItem>
                        </List.Item>
                    )}
                >
                    {!HistoryStore.isLoading && HistoryStore.hasMore && (
                        <div className="demo-loading-container">
                            <Spin />
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    );
})

export default DisplayList;