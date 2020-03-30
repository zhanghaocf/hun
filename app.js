//app.js
App({
  onLaunch: function () {
    this.autoupdate()
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'zhcf-6pee6',
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  autoupdate(){
    const updateManager = wx.getUpdateManager&&wx.getUpdateManager();
    if (!updateManager){
      return;
    }
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        showCancel:false,
        success: function (res) {
          res.confirm && updateManager.applyUpdate()
        }
      })
    })
  }
})
