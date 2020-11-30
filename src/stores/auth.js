import {action, observable,makeObservable} from 'mobx';
import {Auth} from '../models'
class AuthStore{
    constructor() {
        makeObservable(this)
    }

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
        Auth.login(this.values.username,this.values.password)
            .then(user=>{
                console.log('登录成功');
                console.log(user);
            })
            .catch(err=>{
                console.log('登录失败');
                console.log(err);
            })
    }



    @action register=()=>{
        Auth.register(this.values.username,this.values.password)
            .then(user=>{
                console.log('注册成功');
                console.log(user);
            })
            .catch(err=>{
                console.log('注册失败');
                console.log(err);
            })
    }

    @action logout=()=>{
        Auth.logout();
    }

    @action getCurrentUser=()=>{
        Auth.getCurrentUser();
    }

}

export {AuthStore};
