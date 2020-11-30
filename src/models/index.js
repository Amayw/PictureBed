import AV,{Query,User} from 'leancloud-storage'

AV.init({
    appId: "YB0lRc7ESEXMlXQ52KJI01ST-gzGzoHsz",
    appKey: "46LYhshmG2oFKUNKjcLVx8A5",
    serverURL: "https://yb0lrc7e.lc-cn-n1-shared.com"
});

const Auth={
    register(username,password){
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve,reject)=>{
            user.signUp().then((loginedUser)=>resolve(loginedUser),error=>reject(error))
        })
    },
    login(username,password){
        return new Promise((resolve,reject)=>{
            User.logIn(username, password).then(loginedUser=>resolve(loginedUser), error=>reject(error));
        })

    },
    logout(){
        User.logOut();
    },
    getCurrentUser(){
        return User.current();
    }
}

export {Auth}