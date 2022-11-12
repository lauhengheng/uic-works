import myReq from '../../common/http/myReq'
import router from '@system.router';

export default {
    data: {
        // 轮播图数据
        swiperList: [],
        // 导航栏数据
        navList: [],
        // 楼层数据
        floorList: []
    },
    onInit() {
        // 调用方法，获取数据
        this.getswiperlist();
        this.getnavlist();
        this.getFloorList();
    },

    /**
     * 获取轮播图数据
     */
    getswiperlist() {
        myReq.sendGetHttp("home/swiperdata", result => {
            this.swiperList = result.message;
        })
    },

    /**
     * 获取导航栏数据
     */
    getnavlist() {
        myReq.sendGetHttp("home/catitems", result => {
            this.navList = result.message;
        })
    },

    /**
     * 获取楼层区域数据
     */
    getFloorList() {
        myReq.sendGetHttp("home/floordata", result => {
            this.floorList = result.message;
        })
    },

    /**
     * 点击轮播图图片页面跳转
     */
    clickSwiperImage(goods_id) {
        router.push({
            uri: "pages/goods_detail/goods_detail",
            params: {
                goods_id
            }
        })
    },

    /**
     * 点击楼层区域图片页面跳转
     */
    gotoGoodsList(navigator_url) {
        let kw = navigator_url.split("=")[1];
        router.push({
            uri: "pages/goods_list/goods_list",
            params: {
                query: kw
            }
        })

    }


}