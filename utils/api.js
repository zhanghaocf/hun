let app = getApp()
// options{
//   name: 云函数名,
//   data: 传递给云函数的参数,
//   page:page对象
//   isLoading:loading显示
// }
function handlError(msg){
  wx.showModal({
    title: '提示',
    content: msg,
    showCancel: false,
    confirmText: '我知道了'
  })
}
function Http(options){
  let { name, data, page, isLoading} = options;
  isLoading && page && page.setData({
    isLoading:true
  });
  return wx.cloud.callFunction({
    name,
    data
  }).then(res=>{
    isLoading && page && page.setData({
      isLoading: false
    });
    let {result} = res;
    if (result.code !== 200){
      handlError(result.msg);
      return Promise.reject("发生错误");
    }
    return result.data;
  }).catch(err =>{
    isLoading && page && page.setData({
      isLoading: false
    });
    handlError("发生错误，请联系管理员！");
    return Promise.reject("发生错误");
  })
}

// 获取配置信息接口
function getconfig(page){
  return Http({
    name:'getConfig',
    isLoading:true,
    page
  })
}

module.exports = {
  getconfig
}