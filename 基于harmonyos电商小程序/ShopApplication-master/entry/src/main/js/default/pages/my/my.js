import data_storage from '@ohos.data.storage';
import featureAbility from '@ohos.ability.featureAbility';
import router from '@system.router';
import prompt from '@system.prompt';
import myStorage from '../../common/http/myStorage'


export default {
    data: {
        userInfo: {}
    },
    onInit() {
        // 从缓存Storage中获取用户信息
        myStorage.myGetStorageSync('/mystore', 'userinfo', result => {
            this.userInfo = result;
        })
    }

}
