import data_storage from '@ohos.data.storage';
import featureAbility from '@ohos.ability.featureAbility';

export default {

    /**
     * 将数据缓存到Stroage中
     * @param filename
     * @param key
     * @param value
     */
    mySetStorageSync(filename, key, value) {
        var context = featureAbility.getContext();
        context.getFilesDir().then((filePath) => {
            console.info("getFilesDirSuccess:" + filePath);
            let storage = data_storage.getStorageSync(filePath + filename);
            // 将购物车商品数据存储到本地
            storage.putSync(key, JSON.stringify(value));
            storage.flushSync();
            console.error("=========已将" + value + "保存到缓存中============");
        });
    },

    /**
     * 从缓存Stroage中获取数据
     * @param filename
     * @param key
     */
    myGetStorageSync(filename, key, cb) {
        var context = featureAbility.getContext();
        context.getFilesDir().then((filePath) => {
            console.info("getFilesDirSuccess:" + filePath);
            let storage = data_storage.getStorageSync(filePath + filename)
            const result = JSON.parse(storage.getSync(key, "")) || [];
            cb(result);
        });
    }
}