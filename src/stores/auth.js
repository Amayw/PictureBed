import {action, observable,makeObservable} from 'mobx';
import {Auth} from '../models'
import UserStore from './user'
import ImageStore from './image'
import HistoryStore from './history'

class AuthStore{
    constructor() {
        makeObservable(this)
    }

    @observable isLogin=false;
    @observable values={
        username:'',
        password:''
    };

    @action setUsername=(username)=>{
        this.values.username=username;
    }

    @action setPassword=(password)=>{
        this.values.password=password;
    }

    @action login=()=>{
        return new Promise((resolve,reject)=>{
            Auth.login(this.values.username,this.values.password)
                .then(user=>{
                    UserStore.pullUser();
                    this.isLogin=true;
                    resolve(user);
                })
                .catch(err=>{
                    UserStore.resetUser();
                    this.isLogin=false;
                    reject(err);
                })
        })
    }



    @action register=()=>{
        return new Promise((resolve,reject)=>{
            Auth.register(this.values.username,this.values.password)
                .then(user=>{
                    UserStore.pullUser();
                    this.isLogin=true;
                    resolve(user);
                })
                .catch(err=>{
                    UserStore.resetUser();
                    this.isLogin=false;
                    reject(err);
                })
        })
    }

    @action logout=()=>{
        UserStore.resetUser();
        HistoryStore.resetList();
        this.isLogin=false;
        ImageStore.resetImage();
        Auth.logout();
    }

    @action getCurrentUser=()=>{
        return Auth.getCurrentUser();
    }

}

export default new AuthStore();
