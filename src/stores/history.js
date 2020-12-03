import {action, observable,makeObservable} from 'mobx';
import {Upload} from '../models'
import {message} from 'antd'

class HistoryStore{
    constructor() {
        makeObservable(this)
    }

    @observable page=0;
    @observable list=[];
    @observable isLoading=false;
    @observable hasMore=true;
    limit=10;

    @action appendImage=(newList)=>{
        this.list=this.list.concat(newList);
    }
    @action queryImage=()=>{
        this.isLoading=true;
        Upload.queryImage({page:this.page,limit:this.limit})
        .then(newList=>{
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

    @action resetList=()=>{
        this.page=0;
        this.list=[];
        this.isLoading=false;
        this.hasMore=true;
    }

}
export default new HistoryStore();
