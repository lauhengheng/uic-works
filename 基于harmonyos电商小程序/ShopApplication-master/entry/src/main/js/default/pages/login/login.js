import myReq from "../../common/http/myReq.js"
import data_storage from '@ohos.data.storage';
import featureAbility from '@ohos.ability.featureAbility';
import router from '@system.router';
import prompt from '@system.prompt';
import myStorage from '../../common/http/myStorage'


export default {
    data: {
        userinfo: {
            username: "13925630303",
            password: "123456",
            nickname: "zhangsan",
            userimage: "https://img.99tu.com:9988/uploads/allimg/c201208/160I612a21520-129440.jpg"
        }
    },
    submit(e) {
        //获取表单用户输入信息
        const username = e.value.username;
        const password = e.value.password;
        if (username.length == 0 || password.length == 0) {
            setTimeout(() => {
                prompt.showToast({
                    message: "用户名或密码为空!"
                })
            }, 1000)
            router.replace({
                uri: 'pages/login/login'
            })
        }
        if (this.userinfo.username == username && this.userinfo.password == password) {
            // 将用户信息保存到本地缓存Storage中
            myStorage.mySetStorageSync('/mystore', 'userinfo', this.userinfo)

            // 跳转到我的页面
            setTimeout(() => {
                prompt.showToast({
                    message: "登录成功!"
                });
            }, 1000);
            router.push({
                uri: "pages/index/index",
                params: {
                    tabIndex: 3
                }
            })
        } else {
            prompt.showToast({
                message: "用户名或密码错误"
            })
        }
    }
}