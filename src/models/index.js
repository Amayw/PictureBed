import AV, {User} from 'leancloud-storage';

AV.init({
    appId: 'YB0lRc7ESEXMlXQ52KJI01ST-gzGzoHsz',
    appKey: '46LYhshmG2oFKUNKjcLVx8A5',
    serverURL: 'https://yb0lrc7e.lc-cn-n1-shared.com'
});

const Auth = {
    register(username, password) {
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve, reject) => {
            user.signUp().then((loginedUser) => resolve(loginedUser), error => reject(error));
        });
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
        });

    },
    logout() {
        User.logOut();
    },
    getCurrentUser() {
        return User.current();
    }
};

const Upload = {
    addImage(file, filename) {
        const imageItem = new AV.Object('Image');
        const avFile = new AV.File(filename, file);
        imageItem.set('owner', AV.User.current());
        imageItem.set('url', avFile);
        imageItem.set('filename', filename);
        return new Promise((resolve, reject) => {
            imageItem.save().then(
                (file) => {
                    resolve(file);
                },
                err => {
                    reject(err);
                });
        });
    },
    queryImage({page=0,limit=10}){
        const query = new AV.Query('Image');
        query.include('owner');
        query.equalTo('owner', AV.User.current());
        query.limit(limit);
        query.skip(page*limit);
        query.descending('createAt');
        return new Promise((resolve,reject)=>{
            query.find().then((images) => {
                resolve(images);
            }).catch(err=>{
                reject(err);
            });
        })
    }

};
export {Auth,Upload};