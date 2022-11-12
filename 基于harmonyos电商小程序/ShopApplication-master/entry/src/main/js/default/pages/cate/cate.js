import myRequest from '../../common/http/myReq'
import router from '@system.router';
export default {
    data: {
        actived: 0,
        cateList:[],
        cateLevel2:[]
    },
    onInit() {
        this.getCateList()
        //console.log(this.cateLevel2)
    },
    activeChange(index){
        //console.log("heihei"+this.cateList)
        this.actived = index
        this.cateLevel2 = this.cateList[index].children
    },
    //发送请求获取所有商品分类数据
    getCateList(){
        myRequest.sendGetHttp("categories",result => {
            this.cateList = result.message;
            this.cateLevel2 = result.message[0].children
        })
    },
    //点击三级分类图片跳转到对应的分类列表页面
    gotoGoodsList(id){
        router.push({
            uri: 'pages/goods_list/goods_list',
            params:{
                cid:id
            }
        })
        //console.log(id)
    }

}
