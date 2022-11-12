import router from '@system.router';

export default {
    data: {
    },
    goLogin() {
        router.push({
            uri: 'pages/login/login'
        })
    }
}
