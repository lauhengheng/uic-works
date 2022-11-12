import prompt from '@system.prompt';
import myReq from '../../common/http/myReq'
import router from '@system.router';

export default {
    data: {
        // 接收页面传递过来的查找关键字和分类id
        query: '',
        cid: '',
        // 商品列表数据
        goodsList: [],
        // 总记录数
        total: 0,
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
        // 默认图片
        defaultImg: "/common/images/default.png",
        fresh: false,
        isShow: false,
        initGoodsList: [],
        // 节流阀：是否正在请求数据
        isloading: false
    },
    onInit() {
        // 根据条件获取商品列表数据
        this.getGoodsList();
    },
    getGoodsList() {
        // 打开节流阀
        this.isloading = true;
        // 拼接请求参数
        let params = "";
        if (this.query.length == 0 && this.cid.length == 0) {
            params = "pagenum=" + this.pagenum + "&pagesize=" + this.pagesize;
        } else if (this.query.length == 0 && this.cid.length != 0) {
            params = "pagenum=" + this.pagenum + "&pagesize=" + this.pagesize + "&cid=" + this.cid;
        } else if (this.query.length != 0 && this.cid.length == 0) {
            params = "pagenum=" + this.pagenum + "&pagesize=" + this.pagesize + "&query=" + this.query;
        } else {
            params = "pagenum=" + this.pagenum + "&pagesize=" + this.pagesize + "&query=" + this.query + "&cid=" + this.cid;
        }
        // 发送请求获取数据
        myReq.sendGetHttp("goods/search?" + params, result => {
            // 从结果集中获取商品数据、商品总数
            this.goodsList = [...this.goodsList, ...result.message.goods];
            this.total = result.message.total;
            console.error("total ====> " + this.total);
            this.initGoodsList = JSON.parse(JSON.stringify(this.goodsList));
            // 关闭节流阀
            this.isloading = false;
        });
    },
    // 下拉刷新
    refresh(e) {
        this.fresh = e.refreshing;
        this.goodsList = this.initGoodsList;
        setTimeout(()=>{
            prompt.showToast({
                message: '刷新完成!'
            })
            this.fresh = false;
        }, 2000)
    },
    // 上拉加载
    scrollbottomHandler() {
        this.isShow = true;
        const totalPage = parseInt(this.total / this.pagesize) + 1;
        console.error("pagenum ----> " + this.pagenum );
        console.error("totalPage ----> " + totalPage )
        if ((this.pagenum + 1) > totalPage) {
            prompt.showToast({
                message: '已经被你榨干了!'
            })
            this.isShow = false;
            return;
        } else {
            setTimeout(() => {
                // 节流：如果正在请求则不许再次请求
                if (this.isloading) return;
                // 让页码值自增
                this.pagenum++;
                // 获取商品数据
                this.getGoodsList();
                prompt.showToast({
                    message: '加载成功'
                })
                this.isShow = false;
            }, 2000)
        }
    },
    gotoDetail(id) {
        // 跳转到对应详情页
        router.push({
            uri: 'pages/goods_detail/goods_detail',
            params: {
                goods_id: id
            }
        })
    }

}
