<style>
.login{
	background:#fff;
	position:absolute;
	left:0;
	width:100%;
	height:100%;
  z-index : 1000;
	text-align:center;
	z-index:200;
	top:0;

}

.login .loginPanel {

  height:250px;
  margin: 0 auto;
  position:relaitve;
  margin-left:60px;
  margin-right:60px;
}

.login .titleText {
  height:80px;
  line-height:80px;
  margin-top:100px;
  font-size:22px;
  position : relative;
}

.login .loginPanel .loginCon{
 
  height:200px;
  width:100%;
  position:relative;
 

}

.login .loginPanel .loginCon .lline {
  height:50px;
  line-height:50px;
  
  margin-top:5px;
  border-bottom: 1px solid #ccc;
  position:relative;
}

.login .loginPanel .loginCon .lline.llineBnt {
  height:50px;
  line-height:50px;
  margin-top:20px;
  border-bottom: 0px solid #ccc;
  position:relative;
}


.login .loginPanel .loginCon .llineBnt .loginBnt{
  height:40px;
  background:yellow;
  width:100%;
  line-height:40px;
  display:inline-block;
  background:#00c6e0;
  border-radius:5px;
}

.login .loginPanel .loginCon .namePanel{
    display:inline-block;
    width:40px;
    height:40px;
    position:absolute;
    margin-top:5px;
    margin-right:20px;
}

.login .loginPanel .loginCon .passwordPanel{
  display:inline-block;
  width:40px;
  height:40px;
  position:absolute;
  margin-top:5px;
  margin-right:20px;
}

.login .loginPanel .loginCon input {
  border-top:0;
  border-right:0;
  border-bottom:0;
  padding-left:10px;
  margin-left:50px;
  border-left:2px solid #00c6e0;
  height:25px;
}

</style>

<template>
  <div v-show="!login" class='login'>
     <p class="titleText">闪传注册</p>
     <div class="loginPanel">
        <div class="loginCon">
          <p class="lline"><span class="namePanel"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ccc" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg></span><input v-model="username" /></p>
          <p class="lline"><span class="passwordPanel"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ccc" d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
          </svg></span><input tpye="password" v-model="passW"/></p>
         
          <p class="llineBnt lline">
            <span class="loginBnt" v-on:click="lgogin($event)">登陆</span>
          </p>
        </div>
     </div>
  </div>
</template>

<script>

import loginSer from '../services/login.js'

export default {
   
  data () {
  	return {
  		login:false,
      username:'ee',
      passW:'123'
  	}
  },

  methods: {
      lgogin () {
         loginSer.login();
      // this.login = true;
      },
        
  },
  
  ready () {
  	 loginSer.setThis.call(loginSer, this);
  },
  
  initBus (bus) {
      loginSer.regBus(bus);
  },

  components:{}

}
</script>