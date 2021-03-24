let app = getApp()
function chooseimg(){
  return new Promise((resolve,reject)=>{
    wx.chooseImage({
      count: 1,
      success(res){
        let {tempFilePaths:[result],tempFiles:[{size}]} = res
        if(size>=2*1024*1024){
          reject('请上传不大于2MB的图片')
        }
        resolve(result)
      },
      fail(err){
        if(typeof err === 'object'&&err.errMsg=== 'chooseImage:fail cancel'){
          return
        }
        reject('上传图片出错')
      }
    })
  })
}

function saveImage(url){
  return new Promise((resolve,reject)=>{
    wx.saveImageToPhotosAlbum({
      filePath:url,
      success:()=>{
        resolve("保存成功")
      },
      fail:(err)=>{
        console.log("保存失败：：：",err)
        reject(err.errMsg)
      }
    })
  })
}
function saveimgtob(url){
  return downurl(url).then(res=>{
    let path = res.tempFilePath;
    return saveImage(path);
  })
}
function downurl(url){
  if (!url) {
    return Promise.reject("没有图片");
  }
  return new Promise((resolve,reject)=>{
    wx.downloadFile({
      url,
      success: res => {
        if (res.statusCode === 200) {
          resolve(res)
        }else{
          reject("下载图片出错")
        }
      },
      fail: err => {
        console.log("err:::",err)
        reject("下载图片出错");
      }
    })
  })
}
function saveAllimg(arr){
  return auth('writePhotosAlbum').then(res=>{
    let brr = arr.map((item)=>{
      return saveimgtob(item)
    })
    return Promise.all(brr)
  }).catch(err=>{
    err!=='saveImageToPhotosAlbum:fail cancel'&&app.confirmFn(err,'提示','确定')
    return Promise.reject(err)
  })
}

function auth(scopep){
  // writePhotosAlbum
  return new Promise((resolve,reject)=>{
    wx.getSetting({
      success(res) {
        if (res.authSetting[`scope.${scopep}`]!==undefined&&!res.authSetting[`scope.${scopep}`]) {
          app.confirmFn("请授权保存相册",'提示','确定','取消').then(res=>{
            wx.openSetting({
              success(res){
                let {authSetting:{[`scope.${scopep}`]:a}} = res
                if(a){
                  resolve(true)
                }else{
                  reject("该功能需要授权操作")
                }
              },fail(err){
                console.log(err)
                reject("该功能需要授权操作")
              }
            })
          })
        }
        resolve(true)
      }
    })
  })
}
module.exports={
  chooseimg,
  saveAllimg
}