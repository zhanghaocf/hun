let cache = {}
// options{
//   name: 云函数名,
//   data: 传递给云函数的参数,
//   cacheBol:是否缓存
// }
function Http(options){
  let { name, data={}, cacheBol} = options;
  let key = name+JSON.stringify(data)
  if(cacheBol&&cache[key]){
    console.log("拿缓存啦")
    return Promise.resolve(cache[key])
  }
  return wx.cloud.callFunction({
    name,
    data
  }).then(res=>{
    let {result} = res;
    if (result.code&&result.code !== 200){
      return Promise.reject(result.msg);
    }
    if(cacheBol){
      cache[key]= result
    }
    return result;
  }).catch(err =>{
    return Promise.reject("系统出错，请稍后再试");
  })
}

// 获取配置信息接口
function getconfig(){
  return Http({
    name:'getConfig',
    cacheBol:true
  })
}

function changeSex(data){
  return Http({
    name:'changeSex',
    cacheBol:true,
    data
  })
}

function faceinfo(data){
  return Http({
    name:'faceinfo',
    cacheBol:true,
    data
  })
}

function uploadimg({cloudPath,filePath}){
  return new Promise((resolve,reject)=>{
    wx.cloud.uploadFile({
      // 指定上传到的云路径
      cloudPath,
      // 指定要上传的文件的小程序临时文件路径
      filePath,
      // 成功回调
      success: res => {
        resolve(res)
      },
      fail(err){
        reject('上传图片发生错误')
      }
    })
  })
}

module.exports = {
  getconfig,
  uploadimg,
  changeSex,
  faceinfo
}