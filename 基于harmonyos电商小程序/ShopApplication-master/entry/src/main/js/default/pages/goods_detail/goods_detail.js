import myReq from '../../common/http/myReq'
import prompt from '@system.prompt';
import router from '@system.router';
import myStorage from '../../common/http/myStorage'

export default {
    data: {
        // 接收上一个页面传递的商品id
        goods_id: 0,
        // 商品详情数据
        goodsDetail: {},
        // 购物车数据
        carts: []
    },
    onInit() {
        // 从缓存中获取购物车数量
        myStorage.myGetStorageSync('/mystore', "carts", result=>{
            this.carts = result;
        });
        // 获取商品详情数据
        this.getGoodsDetail();
    },
    computed: {
        // 购物车中商品的总数：sum(每个商品*数量)
        total() {
            return this.carts.reduce((total,item) => total += item.goods_count, 0);
        }
    },
    /**
     *  根据id获取商品详细信息
     */
    getGoodsDetail() {
        myReq.sendGetHttp("goods/detail?goods_id=" + this.goods_id, (result) => {
            this.goodsDetail = result.message;
        });
    },
    /**
     *  实现点击购物车跳转到购物车页面
     */
    goShortCart() {
        router.push({
            uri: 'pages/index/index',
            params: {
                tabIndex: 2
            }
        })
    },

    /**
     * 实现点击假如购物车后，将商品加入购物车
     */
    addShopCart() {
        // 构造购物车商品信息对象
        const goods = {
            goods_id: this.goodsDetail.goods_id,
            goods_name: this.goodsDetail.goods_name,
            goods_price: this.goodsDetail.goods_price,
            goods_count: 1,
            goods_small_logo: this.goodsDetail.goods_small_logo,
            goods_state: true
        };
        console.error("=========构造购物车商品信息对象============");
        console.error(JSON.stringify(goods));
        console.error("=========end 构造购物车商品信息对象========");
        // 判断购物车中是否存在该商品: 存在则返回该对象，不存在则返回undefined
        const findResult = this.carts.find(item => item.goods_id == goods.goods_id);
        if(!findResult) {
            // 不存在，则将该商品加入购物车数组
            this.carts.push(goods);
        } else {
            // 存在，则让购物车中该商品的数量+1
            findResult.goods_count++;
        }
        console.error("=========将商品加入购物车============");
        console.error(JSON.stringify(this.carts));
        console.error("=========end 将商品加入购物========");
        // 将购物车商品数据存储到本地Storage
        myStorage.mySetStorageSync('/mystore', 'carts', this.carts);
    }
}
