/**
	date : 2016-6-3
	author : sailing
	fun : 确认设备的操作
**/

<style>
.operation{
	height:50px;
	width:100%;
	position:absolute;
	left:0;
	bottom:0;

}

.operation .content {
	margin:0 auto;
	margin-left:100px;
	margin-right:100px;


}

.operation .content .left{
	float:left;
	text-align:center;
	width:50px;
	height:50px;
}

.operation .content .right{
	float:right;
	width:50px;
	text-align:center;
	height:50px;
	margin-left:5px;
}

.operation .content p{
	font-size:12px;
	color:#b6b6b6;
}
</style>

<template>
	<div class="operation">
		<div class="content">
			<div class="left" v-on:click="del()">
				<p>
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					    <path fill="#929292" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
					</svg>
				</p>
				<p>删除</p>
			</div>
			<div class="right" v-on:click="remark()">
				<p>
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					    <path fill="#929292" d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z" />
					</svg>
				</p>
				<p>备注</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data () {
		return {

		}
	},

	ready () {

	},

	methods : {
		del () {
			alert("del")
		},

		remark () {
			alert("beizhu")
		}
	}
}

</script>

