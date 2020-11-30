import {observable, action, makeObservable} from 'mobx';
import AuthStore from './auth'

class UserStore{
    constructor() {
        makeObservable(this)
    }

    @observable currentUser=null;

    @action pullUser=()=>{
        this.currentUser=AuthStore.getCurrentUser()
    };

    @action resetUser=()=>{
        this.currentUser=null;
    }
}

export default new UserStore();