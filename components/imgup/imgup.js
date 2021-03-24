
let app = getApp()
import {chooseimg} from "../../utils/utils"
import {uploadimgM} from "../../utils/model"
Component({
  properties: {
    url:{
      type:String,
      value:''
    }
  },
  data: {

  },
  methods: {
    uploadimg(){
      chooseimg().then(res=>{
        return uploadimgM(res)
      }).then(res=>{
        let {fileID} = res
        this.triggerEvent('upimg',{fileID},{})
      }).catch(err=>{
        console.log(err)
        app.confirmFn(err,'提示','我知道了')
      })
    }
  }
})
