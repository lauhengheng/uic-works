export default {
    data: {
        width:0,
        limit:0,
        vflag:false
    },
    onPageShow(){
        const slider = this.$element("slider");
        const rect =  slider.getBoundingClientRect();
        const sliderw = rect.width;
        this.limit = sliderw-36;
    },
    drag(e){
        if(this.width>=this.limit){
            return;
        }
        let globalX = e.globalX;
        this.width = globalX;
    },
    dragend(e){
        if(this.width>=this.limit){
            this.width = this.limit;
            this.vflag = true;
        }else{
            this.width = 0
        }
    }
}