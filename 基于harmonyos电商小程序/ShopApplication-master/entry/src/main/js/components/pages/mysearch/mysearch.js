import router from '@system.router';
export default {
    data: {
    },
    props: {
        msg: {
            default: "搜索"
        }
    },
    toSearch() {
        router.push({
            uri: 'pages/goods_search/goods_search'
        })
    }
}
