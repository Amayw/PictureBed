import React from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

const DisplayItem=styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      >div{
         >img{
         max-width: 300px;
         }
      }
`

const DisplayList=observer(()=>{
    const {HistoryStore}=useStores();
    const loadMore=()=>{
        HistoryStore.queryImage();
    }
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
                                <div>
                                    {item.attributes.filename}
                                </div>
                                <div>
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