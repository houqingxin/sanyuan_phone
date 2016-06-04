<style>
	
	.loading{
            width: 100px;
            height: 10px;
            margin: 0 auto;
            margin-top:100px;
            position:absolute;
            left:50%;
            margin-left:-50px;
        }
        .loading span{
            display: inline-block;
            width: 10px;
            height: 100%;
            margin-right: 5px;
            border-radius: 50%;
            background: lightgreen;
            -webkit-animation: load 1.04s ease infinite;
        }
        .loading span:last-child{
            margin-right: 0px; 
        }
        @-webkit-keyframes load{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        .loading span:nth-child(1){
            -webkit-animation-delay:0.13s;
        }
        .loading span:nth-child(2){
            -webkit-animation-delay:0.26s;
        }
        .loading span:nth-child(3){
            -webkit-animation-delay:0.39s;
        }
        .loading span:nth-child(4){
            -webkit-animation-delay:0.52s;
        }
        .loading span:nth-child(5){
            -webkit-animation-delay:0.65s;
        }
</style>

<template>
	<div class="loading" v-if="data.load">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
	</div>
</template>

<script>
export default {
    
  	props:{
  		data:Object
  	},
  	ready () {
  		console.log("this:" , this)
  	}
  }
</script>