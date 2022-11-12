//对外提供发送数据请求的方法
import http from '@ohos.net.http';
import data_storage from '@ohos.data.storage';
import featureAbility from '@ohos.ability.featureAbility';

export default {

    //请求配置对象
    configData:{
        baseUrl:"https://api-hmugo-web.itheima.net/api/public/v1/",
        token:""
    },
    //获取token
    getToken(){
        if(this.configData.token){
            return this.configData.token;
        }else{
            var context = featureAbility.getContext();
            context.getFilesDir().then((filePath) => {
                console.info("getFilesDirSuccess:"+filePath);
                let storage = data_storage.getStorageSync(filePath + '/mystore')
                const token = storage.getSync("token","");
                return token;
            });
        }
    },
    /**
     * ？token的统一处理 【很多接口必须是登录后才能请求的，也就是很多接口的请求头中必须包含有效的token才可以】
     * @param url：url的统一请求前缀域名是可以省略【不需要调用者传递url的相同部分】
     * @param method:请求方式，要么get,要么post【不需要调用者去传递请求方式】
     * @param params：当get方式的时候，不需要params
     * @param cb
     */
    sendHttp(url, method, params, cb) {
        const httpRequest = http.createHttp();
        console.info("getToken："+this.getToken());
        httpRequest.request(this.configData.baseUrl+url, {
            method: method,
            extraData: params,
            header:{
                "token":this.getToken()
            }
        }, (err, data) => {
            if (!err) {
                console.info('Result:' + data.result);
                console.info('code:' + data.responseCode);
                //TOKEN存取
                const result = JSON.parse(data.result);
                cb(result);
            } else {
                console.info('error:' + JSON.stringify(err));
            }
        })
    },
    sendGetHttp(url,cb,params){
        this.sendHttp(url,"GET",params,cb);
    },
    sendPostHttp(url,params,cb){
        this.sendHttp(url,"POST",params,cb);
    }
}