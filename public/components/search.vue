/**
	date : 2016-5-29
	author : sailing
	fun : search窗口
	<span class="searchBnt"></span>
            	<input class='' type="search" placeholder="测试搜索" autosave="aoa.org.cn" result="8">
            	<span class='scan'>df</span>
**/

<style>
.all_search {
	height:30px;
	line-height:30px;
	position:absolute;
	text-align:center;
	width:100%;
	top:5px;
	left:0;

}

.all_search .pImg{

	height:30px;
	margin-left:30px;
	margin-right:30px;
}

.all_search .pImg ul{
	background:#fff;
	width:258px;
	left:50%;
	position:absolute;
	border-radius:26px;
	margin-left:-130px;
}

.all_search .pImg li{
	display:inline-block;
}

.all_search .pImg .head{
	width:30px;
	height:30px;
	margin-left:-16px;
	margin-top:4px;
	position:absolute;
}

.all_search .pImg input{
	width:202px;
	margin-left:8px;
	border:0;
}

.all_search .centerSearchBody{
	width:100%;

}

.all_search .peopleImg {
	background:#888;
	display:inline-block;
	width:30px;
	position:absolute;
	margin-left:9px;
	height:30px;
}


</style>

<template>
	<div class="all_search">
		<div class="pImg">
			<ul>
				<li class="head"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    				<path fill="#ccc" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
				</svg></li>
				<li><input type="search" placeholder="搜索" /></li>
				<li>3</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	init () {

	},

	ready () {
		
	}
}
</script>