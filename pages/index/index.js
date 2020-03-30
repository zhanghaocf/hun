//index.js
const app = getApp();
var audio = null;
import { getconfig } from '../../utils/api.js'
Page({
  data: {
    play:true,
    aniIdx:0,
    time:'',
    boyname:'',
    girlname:'',
    endWord:'2020-05-30\n见证我们的幸福',
    detail:'',
    boyimg:'',
    girlimg: '',
    boyl:'',
    girlr:'',
    six1: '',
    six2: '',
    seven: '',
    eight: '',
    nine: ''
  },
  playfn(){
    let {play} = this.data;
    play = !play;
    if(!play){
      audio.pause();
    }else{
      audio.play();
    }
    this.setData({
      play
    })
  },
  initmusic(){
    audio = wx.createInnerAudioContext&&wx.createInnerAudioContext();
    audio.autoplay = true;
    audio.src="cloud://zhcf-6pee6.7a68-zhcf-6pee6-1257706133/music/love.mp3";
    audio.loop=true;
    audio.play();
    audio.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  onLoad: function() {
    this.initmusic();
    getconfig(this).then(res=>{
      let { time,
            boyname,
            girlname,
            detail,
            boyimg,
            girlimg,
            boyl,
            girlr,
            six1,
            six2,
            seven,
            eight,
            nine} = res;
      let t = this.timeynd(time);
      detail = detail.replace(/\\n/g,"\n");
      this.setData({
        boyname,
        girlname,
        time:t,
        detail,
        boyimg,
        girlimg,
        boyl,
        girlr,
        six1,
        six2,
        seven,
        eight,
        nine
      },()=>{
        this.pageAdd(1)
      })
    })
  },
  pageAdd(num){
    let { aniIdx } = this.data;
    if (aniIdx>=num){
      return;
    }
    this.setData({
      aniIdx:num
    })
    console.log("aniIdx::",this.data.aniIdx)
  },
  timeynd(str){
    let dat = new Date(str);
    return `${dat.getFullYear()}-${dat.getMonth()+1}-${dat.getDate()}`;
  },
  changeFn(e){
    let {current} = e.detail
    let num = +current+1;
    this.pageAdd(num)
  }
})
