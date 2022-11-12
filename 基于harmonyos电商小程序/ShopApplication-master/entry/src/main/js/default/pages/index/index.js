import router from '@system.router';

export default {
    data: {
        title: "",
        tabs: [
            {
                id: 1,
                tabName: "首页",
                activeImgUrl: "/common/images/index-active.png",
                imgUrl: "/common/images/index.png",
            },
            {
                id: 2,
                tabName: "分类",
                activeImgUrl: "/common/images/cate-active.png",
                imgUrl: "/common/images/cate.png"
            },
            {
                id: 3,
                tabName: "购物车",
                activeImgUrl: "/common/images/shopcart-active.png",
                imgUrl: "/common/images/shopcart.png"
            },
            {
                id: 4,
                tabName: "我的",
                activeImgUrl: "/common/images/my-active.png",
                imgUrl: "/common/images/my.png"
            },
        ],
        currentpage: 1,
        tabIndex: 0
    },
    onAttached() {
        console.error(this.tabIndex);
        this.$child("bnav").selectIndex = this.tabIndex;
    },

    swiperChange(e) {
        this.currentpage = e.index;
    }
}
