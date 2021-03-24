let app = getApp()
import {saveAllimgM} from "../../utils/model"
Page({
  data: {
    imgurl:''
  },
  onLoad: function (options) {
    let {url} = options
    this.setData({
      imgurl:url
    })
  },
  downFn(){
    let {imgurl} = this.data
    saveAllimgM(imgurl).then(res=>{
      app.confirmFn('保存图片成功','提示','我知道了')
    })
  },
  onShareAppMessage: function () {

  }
})