export default {
    data: {
        selectIndex: 0,
    },
    props: ['tabs'],
    changeTab(index) {
        this.selectIndex = index;
    }
}
