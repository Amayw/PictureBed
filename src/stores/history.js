import {action, observable,makeObservable} from 'mobx';
import {Upload} from '../models'
import {message} from 'antd'

class HistoryStore{
    constructor() {
        makeObservable(this)
    }

    @observable page=0;
    @observable List=[];
    @observable isLoading=false;
    @observable hasMore=true;
    limit=10;

    @action appendImage=(newList)=>{
        this.List=this.List.concat(newList);
    }
    @action queryImage=()=>{
        this.isLoading=true;
        return new Promise((resolve,reject)=>{
            Upload.queryImage({page:this.page,limit:this.limit});
        }).then(newList=>{
            this.page++;
            this.appendImage(newList);
            if(newList.length<this.limit){
                this.hasMore=false;
            }
        }).catch(err=>{
            message.error('加载数据失败！');
        }).finally(()=>{
            this.isLoading=false;
        })
    }

}

export default new HistoryStore();
