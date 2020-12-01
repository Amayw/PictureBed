import {observable, action, makeObservable} from 'mobx';
import {Upload} from '../models'

class ImageStore{
    constructor() {
        makeObservable(this)
    }

    @observable file=null;
    @observable serverFile=null;
    @observable filename="";
    @observable isUploading=false;

    @action setFile=(file)=>{
        this.file=file;
    }

    @action setFileName=(filename)=>{
        this.filename=filename;
    }

    @action addImage=()=>{
        this.isUploading=true;
        return new Promise((resolve,reject)=>{
            Upload.addImage(this.file,this.filename)
                .then((serverFile)=>{
                    this.serverFile=serverFile;
                    resolve(serverFile);
                })
                .catch(err=>{
                    console.log('上传失败');
                    console.log(err);
                    reject(err);
                })
                .finally(()=>{
                    this.isUploading=false;
                });
        })
    };

}

export default new ImageStore();