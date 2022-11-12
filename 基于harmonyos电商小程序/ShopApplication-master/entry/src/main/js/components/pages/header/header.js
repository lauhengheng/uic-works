import router from '@system.router';

export default {
    props: {
        title: {
            default: "默认标题"
        },
        bgcolor: {
            default: "white"
        },
        color: {
            default: "black"
        },
        iconisshow: {
            default: true
        }
    },
    goback() {
        router.back();
    },
    goToSearch() {
        console.error("=========>>")
        router.push({
            uri: 'pages/goods_search/goods_search'
        })
    }
}
