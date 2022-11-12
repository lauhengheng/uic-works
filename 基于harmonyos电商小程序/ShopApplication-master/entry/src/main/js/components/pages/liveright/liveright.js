export default {
    data: {
        addshow: true,
        likechange: false,
        commentisshow: true
    },
    addFollow() {
        this.addshow = false;
    },
    likeChange() {
        this.likechange = this.likechange == false ? true : false;
    }
}
