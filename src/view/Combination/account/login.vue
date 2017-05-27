<template>
  <div class="login">
    <group title="">
      <x-input title="必须输入2333" name="mobile" keyboard="number" ref="phone" is-type="" placeholder="请输入手机号码">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
      <x-input 
      title="发送验证码" 
      class="weui-vcode"
      keyboard="number"
      ref="password"
      @click.native="allow_login">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
        <x-button 
        slot="right" 
        :type="btn_type" 
        mini 
        :disabled="disabled"
         @click.native="send_sms">
          {{smstext}}
         </x-button>
      </x-input>
    </group>
    <div class="tips">
      <span class="tips1" style="font-size: 14px;color:#888888">温馨提示：未注册中台账号的手机号，登录时将自动注册，且代表您已经同意</span>
      <span class="tips2" style="font-size: 14px;color:green">用户服务协议说明</span>
    </div>
    <div style="padding:15px;">
      <x-button :type="login_type" :disabled="disabled_login" >登录</x-button>
    </div>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="获取验证码成功"></toast>
  </div>
</template>

<script>
import { Toast, XInput, Group, XButton, Cell } from 'vux'

export default {
  components: {
    XInput,
    XButton,
    Group,
    Toast
  },
  props:{
    logincolor:'',
  },
  data () {
    return {
      phone:'',
      password:'',
      smstext:'发送验证码',
      btn_type:'primary',
      iconType: '',
      focusStatu:false,
      timer: 60,       //默认倒数30秒
      stop : false,   //默认是停止的，但界面加载之后会变成false
      Interval:null,  //setInterval的对象
      disabled: false,
      style: '',
      Interval:null,
      showPositionValue: false,
      login_type:'default',
      disabled_login:true

    }
  },
  methods: {
    allow_login() {
      this.login_type = 'primary';
      this.disabled_login=false;
    },
    update () {
      if(this.timer <= 0) 
      {
          this.timer = 60;
      }
      else{
          this.timer--;
          this.smstext= this.timer + "s重新获取";
          this.disabled=true;
          this.btn_type="default";
      }
    },
    send_sms () {
      //如果是false就开始倒计时，如果是true就停止倒计时
      if(this.stop == false) 
      {
          this.showPositionValue = true;
          this.Interval = setInterval(this.update,1000); 
      }
      else
      {
          clearInterval(this.Interval);
      }

      this.stop = !this.stop;
    }
  }
}
</script>
<style scoped>
.login {
  margin-top: 50px;
}
.red {
  color: red;
}
.green {
  color: green;
}
.tips {
  padding-left: 15px;
  
}
.tips .tips1{
    font: 12px;
  }
</style>