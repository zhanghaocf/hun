//index.js
const app = getApp()
import { getconfig } from '../../utils/api.js'
Page({
  data: {
    isLoading:false,
    time:'',
    boyname:'张豪',
    girlname:'陈芳',
    detail:'在最美好的年华\n遇见最爱的人\n沉浸在幸福中的我们将于\n2020年10月10号（星期天）\n举办婚礼\n新郎：男的 新娘：女的\n敬邀光临\n时间：11：58\n席设：我家\n地址：江苏省无锡市宜兴市张渚镇\n期盼您的到来\n见证我们最幸福的时刻',
    boyimg:'cloud://zhcf-6pee6.7a68-zhcf-6pee6/rz.jpg',
    girlimg: 'cloud://zhcf-6pee6.7a68-zhcf-6pee6/rz.jpg'
  },

  onLoad: function() {
    // getconfig(this).then(res=>{
    //   let { time, boyname, girlname} = res;
    //   let t = this.timeynd(time);
    //   this.setData({
    //     boyname,
    //     girlname,
    //     time:t
    //   })
    // })
  },
  timeynd(str){
    let dat = new Date(str);
    return `${dat.getFullYear()}-${dat.getMonth()+1}-${dat.getDate()}`;
  }

})
