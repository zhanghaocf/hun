import {changeSexM} from "../../utils/model"
var app = getApp()
Page({
  data: {
    imgurl:''
  },
  onLoad: function (options) {

  },
  uploadimg(obj){
    console.log(obj)
    let {detail:{fileID}} = obj
    this.setData({
      imgurl:fileID
    })
  },
  cut(e){
    let {val} = e.currentTarget.dataset
    let {imgurl} = this.data
    if(!imgurl){
      app.confirmFn('请先上传图片','提示','我知道了')
    }
    changeSexM(imgurl,+val).then(res=>{
      wx.navigateTo({
        url: '/pages/result/result?url='+res,
      })
    })
  }
})