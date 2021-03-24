let app = getApp()
import {
  faceinfoM
} from "../../utils/model"
Page({
  data: {
    imgurl:''
  },
  onLoad: function (options) {

  },
  cut(e){
    let {imgurl} = this.data
    if(!imgurl){
      app.confirmFn('请先上传图片','提示','我知道了')
    }
    faceinfoM(imgurl,).then(res=>{
      
    })
  },
  uploadimg(obj){
    let {detail:{fileID}} = obj
    this.setData({
      imgurl:fileID
    })
  },
})