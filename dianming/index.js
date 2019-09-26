$(function() {
				/*全局变量*/
				var ele = null; //用来记录被拖拽元素
				var choose = [];//记录已选择的同学
				/*抽奖主程序*/
					//抽奖主程序函数
				function creat() {
					//随机数，去掉重复随机数
					while(true) {
						var random = Math.floor(Math.random() * (students.length))
						if(choose.indexOf(random) == (-1)) {
							choose.push(random)
							break;
						}
					}
					$('<span>')
						//抽到的人
						.html(students[random])
						//设置位置及背景色
						.css({
							//窗口宽度大于768偏移100 小于768偏移50
							left: Math.random() * ($(window).width() - ($(window).width()>768?100:50)) + "px",
							top: Math.random() * ($(window).height() - ($(window).width()>768?100:50)) + "px",
							backgroundColor: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.7)"
						})
						.attr("draggable", true)
						//显示在页面中
						.appendTo($("body"))
				}
					//点击开始---运行抽奖主程序函数
				$(".start").click(function() {
					choose = [];
					//获取及判断输入人数
					var num = parseInt($(".num").val())
					if(num > students.length || num == "" || num + "" == "NaN") {
						alert("请输入1~" + students.length + "的数字");
						$(".num").val("")
					} else {
						//新一轮之前删除原来的
						$("span").remove();
						//开抽
						for(var i = 0; i < num; i++) {
							creat();
						}
					}

				})
				/*添加拖动功能 ：PC端*/
				$(document).on("mousedown", function(e) {
					if(e.target.nodeName == "SPAN") {
						var span = e.target;
						$(document).on("mousemove", function(e) {
							var x = e.clientX;
							var y = e.clientY
							$(span).css({
								left: x - $(span).width() / 2 + "px",
								top: y - $(span).height() / 2 + "px"
							})
						})
					}
				})
				$(document).on("mouseup", function(e) {
					if(e.target.nodeName == "SPAN") {
						$(document).unbind("mousemove")
					}
				})
				/*添加拖动事件 ：app端*/
				$(document).on("touchstart", function(e) {
					if(e.target.nodeName == "SPAN") {
						var span = e.target;
						$(document).on("touchmove", function(e) {
							e.preventDefault()
							var touch = e.originalEvent.targetTouches[0];
							var x = touch.clientX;
							var y = touch.clientY
							$(span).css({
								left: x - $(span).width() / 2 + "px",
								top: y - $(span).height() / 2 + "px"
							})
						})
					}
				})
				$(document).on("touchend", function(e) {
					if(e.target.nodeName == "SPAN") {
						$(document).unbind("touchmove")
					}
				})
				/*帮助*/
				$(".help").click(function() {
					$(this).html("请发送班级信息和学生名单到781057070@qq.com，会在7个工作日处理");
					var mythis = this;
					setTimeout(function() {
						$(mythis).html("帮助")
					}, 2000)
				})
				/*班级选择后插入班级数据*/
				$("select").change(function() {
					console.log(students)
					$("#students").remove();
					$(".num").attr("placeholder",students.length)
					$("<script>")
						.attr({
							id: "students",
							src: "lib/" + $("select").val() + ".js"
						})
						.appendTo($("body"))
					console.log("切换班级数据")
				})
				/*输入数字后可直接开始抽奖*/
				$("input[type=number]").keydown(function(e) {
					if(e.keyCode == 13 || e.keyCode == 32) {
						$(".start").click()
						e.preventDefault();
						return false;
					}
				})
				//集合功能与散开
				$(window).keydown(function(e){
					if($("span").length>0 && e.keyCode == 74){
						$("span").css({
							position: "static",
							float: "left",
							//禁用所有鼠标事件
							"pointer-events":"none"
						})
					}
					if($("span").length>0 && e.keyCode == 83){
						$("span").css({
							position: "fixed",
							float: "none",
							//允许所有鼠标事件
							"pointer-events":"all"
						})
					}
				})
				//页面大小改变
				$(window).resize(function(){
					$("span").each(function(){
						$(this).css({
							//窗口宽度大于768偏移100 小于768偏移50
							left: Math.random() * ($(window).width() - ($(window).width()>768?100:50)) + "px",
							top: Math.random() * ($(window).height() - ($(window).width()>768?100:50)) + "px"
						})
					})
					
				})
			})
				
				