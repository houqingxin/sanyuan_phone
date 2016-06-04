/**
	date : 2016-5-29
	author : sailing
	fun : 机柜图设置
**/

<style>

.cabinet {
	width : 100%;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	background:#fff;
	z-index:1000;

}

.cabinet .cabinetKa {
	height : 100%;
	position:relative;
	margin-left:10px;
	margin-right:10px;
	overflow-y : scroll;
}

.cabinet .cabinetKa .picLine{
	height:100px;
	line-height:100px;
	border-bottom:1px solid green;
	list-style-type:none;
}

.cabinet .cabinetKa .picLine .liList{
	height:100px;
}


.cabinet .cabinetKa .picLine .liList .containerImg{
	margin-left:20px;
	margin-right:20px;
	height:100%;
	
}

.cabinet .cabinetKa .picLine .liList .left{
	display:inline-block;
	width:20px;
	background:#ccc;
	text-align:center;
	float:left;
	border-right:1px solid #ccc;

}

.cabinet .cabinetKa .picLine .liList .right{
	display:inline-block;
	width:20px;
	text-align:center;
	background:#ccc;
	position:relative;
	float:right;
	border-left:1px solid #ccc;
}

.cabinet .cabinetKa .picLine .liList .center{
	display:inline-block;
	text-align:center;
	position:absolute;
	left:0;
	
	top:0;
	width:auto;
	margin: 0 20px;
}

.cabinet .cabinetKa .imagePosition{
	
	width:100%;
	height:10px;
	position:absolute;
	margin:0 auto;
	top:0;

}



</style>

<template>
	<div v-show="cabinet" class="cabinet">
		<div class="cabinetKa">
            <ul class="picLine" v-for="pic in picList">
            	<li class="liList">
            		<div class="left">{{$index+1}}</div>
            		<div class="center" v-on:click="gotoInterface()">image</div>
            		<div class="right">{{$index+1}}</div>
            		空
            	</li>
            </ul>
            <div class="imagePosition">
        
            </div>
		</div>
	</div>
</template>

 <script>

 import diagram from "../../services/equipmentCabinet/cabinetDiagram"

export default {
	data () {
		return {
			cabinet : false,
			picList :[{
				name : '空'
			},{
				name : '空'
			},{
				name : '空'
			},{
				name : '空'
			},{
				name : '空'
			},{
				name : '空'
			}]
		}
	},

	init () {

	},

	methods : {
		gotoInterface () {
			diagram.gotoInterface();
		}
	},

	ready () {
		diagram.setThis.call(diagram, this);
		//diagram.getRoomList();
	},

	initBus (bus) {
	    diagram.regBus(bus);
	},

	components : {}
}

</script>

