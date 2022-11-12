import prompt from '@system.prompt';
import router from '@system.router';
import myStorage from '../../common/http/myStorage'

export default {
    data: {
        // 购物车数据
        carts: [],
    },
    onInit() {
        this.getShopCartData();
    },
    computed: {
        // 购物车中商品的总数：sum(每个商品*数量)
        total() {
            return this.carts.reduce((total, item) => total += item.goods_count, 0);
        },
        // 购物车中选中的商品的数量
        checkedCount() {
            // 先循环过滤出所有被选中的商品，再循环计算出被选中的商品的数量
            return this.carts.filter(item => item.goods_state).reduce((total, item) => total += item.goods_count, 0)
        },
        // 全选按钮是否选中
        isFullCheck() {
            return this.checkedCount === this.total
        },
        // 已选中的商品的总价格
        checkedGoodsAmount() {
            // 先循环过滤出所有被选中的商品，在循环计算出被选中的商品的价格总和
            return this.carts.filter(item => item.goods_state)
                .reduce((total, item) => total += item.goods_price * item.goods_count, 0)
        }
    },

    // 从本地中获取购物车数据
    getShopCartData() {
        // 从本地中获取购物车数量
        myStorage.myGetStorageSync('/mystore', "carts", result => {
            this.carts = result;
        });
    },

    // 每个商品前面的选择按钮的事件处理
    checkboxOnChange(index, goods_state) {
        // 修改当前商品的goods_state的值
        this.carts[index].goods_state = !goods_state;
        // 将修改后的信息保存到本地中
        myStorage.mySetStorageSync('/mystore', 'carts', this.carts);
        // 重新获取数据
        this.getShopCartData();
    },
    // 点击每个商品的+/-按钮的事件处理
    sub(index) {
        if (this.carts[index].goods_count == 1) {
            return;
        }
        this.carts[index].goods_count--;
        // 将修改后的信息保存到本地中
        myStorage.mySetStorageSync('/mystore', 'carts', this.carts);
        // 重新获取数据
        this.getShopCartData();
    },
    add(index) {
        this.carts[index].goods_count++;
        // 将修改后的信息保存到本地中
        myStorage.mySetStorageSync('/mystore', 'carts', this.carts);
        // 重新获取数据
        this.getShopCartData();
    },
    // 点击删除按钮的事件处理
    removeGoods(goods_id) {
        this.carts = this.carts.filter(item => item.goods_id != goods_id);
        // 将修改后的信息保存到本地中
        myStorage.mySetStorageSync('/mystore', 'carts', this.carts);
        // 重新获取数据
        this.getShopCartData();
    },


    // 点击全选的事件处理
    changeAllState() {
        let newValue = !this.isFullCheck;
        // 将所有商品的选中状态更改
        let newCarts = this.carts;
        newCarts.forEach(item => item.goods_state = newValue);
        // 将修改后的信息保存到本地中
        myStorage.mySetStorageSync('/mystore', 'carts', newCarts);
        // 重新获取数据
        this.getShopCartData();
    }
}
