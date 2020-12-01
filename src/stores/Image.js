import {observable, action, makeObservable} from 'mobx';
import {Upload} from '../model'

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
        this.file=filename;
    }

    @action addImage=(file,filename)=>{
        this.isUploading=true;
        return new Promise((resolve,reject)=>{
            Upload.addImage(this.file,this.filename)
                .then((serverFile)=>{
                    this.serverFile=serverFile;
                    resolve(serverFile);
                })
                .catch(err=>{
                    console.log('上传失败');
                    reject(err);
                })
                .finally(()=>{
                    this.isUploading=false;
                });
        })
    };

}

export default new ImageStore();