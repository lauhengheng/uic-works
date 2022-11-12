export default {
    data: {
        modeFlag: "mini",
        list: [{
                   name: '张三',
                   content: '这个好有意思',
                   number: '356'
               },{
                   name: '李四',
                   content: '@ 王五',
                   number: '35'
               },{
                   name: '王五',
                   content: '来了来了',
                   number: '875'
               },{
                   name: '赵六',
                   content: '哈哈哈哈哈哈',
                   number: '95'
               },{
                   name: '孙七',
                   content: '顶',
                   number: '3568'
               }]
    },
    showPanel() {
        this.$element('simplepanel').show()
    },
    closePanel() {
        this.$element('simplepanel').close()
    },
    changeMode(e) {
        this.modeFlag = e.mode
    }
}
