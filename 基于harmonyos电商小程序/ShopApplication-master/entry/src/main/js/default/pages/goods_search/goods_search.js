import prompt from '@system.prompt';
import router from '@system.router';
import myReq from '../../common/http/myReq'
import myStorage from '../../common/http/myStorage'

export default {
    data: {
        // input事件延时器
        timer: null,
        // 搜索关键词
        kw: '',
        // 搜索的结果列表
        searchResults: [],
        // 搜索历史的数组
        history: [],
        inputValue: ''
    },
    onInit() {
        // 从缓存中获取历史记录数据
        myStorage.myGetStorageSync('/mystore', "history", result => {
            this.history = result;
        })
    },
    computed: {
        // 对历史记录数组进行反转
        histories() {
            return [...this.history].reverse();
        },
    },
    // 搜索框输入事件处理函数
    changeHandler(e) {
        this.inputValue = e.value;
        // 清除已有的定时器
        clearTimeout(this.timer)
        // 重新启动一个定时器，并把timerId赋值给timer
        this.timer = setTimeout(() => {
            this.kw = e.value;
            this.getSearchList();
        }, 500)
    },

    // 通过关键字获取搜索的结果数据
    async getSearchList() {
        // 搜索关键字为空: 清空searchResults
        if (this.kw.length === 0) {
            this.searchResults = [];
            return;
        }
        // 搜索关键词不为空：发送请求获取搜索的结果数据
        myReq.sendGetHttp("goods/qsearch?query=" + this.kw, result => {
            this.searchResults = result.message;
        })
        // 将搜索关键词保存到历史记录中
        this.saveSearchHistory();
    },

    // 保存搜索关键词到历史记录中
    saveSearchHistory() {
        // 通过Set对象解决搜索关键词重复问题
        const set = new Set(this.history);
        // 如果输入的关键词已经在set对象中存在则删除
        set.delete(this.kw);
        // 重新将关键词添加到Set集合的末尾
        set.add(this.kw);
        // 将Set集合转换回数组重新赋值给历史记录的数组
        this.history = Array.from(set);
        // 将搜索历史存储进行持久化存储
        myStorage.mySetStorageSync('/mystore', "history", this.history);
    },

    // 点击搜索建议的事件处理函数
    gotoDetail(id) {
        // 跳转到对应详情页
        router.push({
            uri: 'pages/goods_detail/goods_detail',
            params: {
                goods_id: id
            }
        })
    },

    // 清空文本框
    clearText() {
      this.inputValue = '';
    },

    // 清空历史记录
    cleanHistory() {
        this.history = [];
        // 将搜索历史存储进行持久化存储
        myStorage.mySetStorageSync('/mystore', "history", this.history);
    },

    // 点击历史记录项跳转到商品列表页面
    gotoGoodsList(kw) {
        router.push({
            uri: "pages/goods_list/goods_list",
            params: {
                query: kw
            }
        })
    }
}
