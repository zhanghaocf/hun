const app = getApp()
let {globalData} = app
import {
  getconfig,
  uploadimg,
  changeSex,
  faceinfo
} from "./api"
import {
  saveAllimg
} from "./utils"
function toastFn(msg,iscatch){
  console.log(msg)
  let warning = typeof msg === 'string'?msg:msg.errMsg=== 'chooseImage:fail cancel'?msg:'系统繁忙，请稍后重试'
  !iscatch&&typeof warning === 'string'&&app.confirmFn(warning,'提示','我知道了')
  if(iscatch){
    return Promise.reject(warning)
  }
}

//loadingTxt有值时有loading没值时没loading
function handleApi(fn,loadingTxt,iscatch) {
  return function(){
    let args = Array.prototype.slice.call(arguments)
    // let pageArr = getCurrentPages()
    // let page = pageArr[pageArr.length - 1]
    
    try {
      loadingTxt && wx.showLoading({
        title:loadingTxt
      })
      return fn.apply(undefined,args).then(res =>{
        loadingTxt && wx.hideLoading()
        return res
      }).catch(e =>{
        console.log('捕获不了吗LLL', e)
        loadingTxt && wx.hideLoading()
        return toastFn(e,iscatch)
      })
    }
    catch(e){
      console.log('捕获不了吗LLL', e)
      loadingTxt && wx.hideLoading()
      return toastFn(e,iscatch)
    }
  }
}

function uploadimgM(filePath,cloudPath){
  let arr = filePath.split('.')
  cloudPath = cloudPath || 'c_sex/'+new Date().getTime()+Math.random().toString().slice(2,8)+'.'+arr[arr.length-1]
  return uploadimg({filePath,cloudPath})
}

function changeSexM(fileID,val){
  return changeSex({fileID,val}).then(res=>{
    let {url} = res
    return url
  })
}

function saveAllimgM(url){
  return saveAllimg([url])
}
function faceinfoM(fileID){
  return faceinfo({fileID}).then(res=>{
    console.log("脸:::",res)
    return res
  })
}

module.exports={
  getconfigM:handleApi(getconfig),
  uploadimgM:handleApi(uploadimgM,'上传图片中'),
  changeSexM:handleApi(changeSexM,'图片处理中'),
  saveAllimgM:handleApi(saveAllimgM,'图片下载中'),
  faceinfoM:handleApi(faceinfoM,'脸部识别中')
}