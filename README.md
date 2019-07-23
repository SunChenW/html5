<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [HTML5](#html5)
  - [新元素兼容问题](#%E6%96%B0%E5%85%83%E7%B4%A0%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98)
  - [表单部分](#%E8%A1%A8%E5%8D%95%E9%83%A8%E5%88%86)
    - [新的type类型](#%E6%96%B0%E7%9A%84type%E7%B1%BB%E5%9E%8B)
    - [新的表单属性](#%E6%96%B0%E7%9A%84%E8%A1%A8%E5%8D%95%E5%B1%9E%E6%80%A7)
    - [新增的表单元素](#%E6%96%B0%E5%A2%9E%E7%9A%84%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0)
    - [新增的表单事件](#%E6%96%B0%E5%A2%9E%E7%9A%84%E8%A1%A8%E5%8D%95%E4%BA%8B%E4%BB%B6)
  - [进度条/度量器](#%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%BA%A6%E9%87%8F%E5%99%A8)
  - [媒体元素](#%E5%AA%92%E4%BD%93%E5%85%83%E7%B4%A0)
  - [新增DOM操作](#%E6%96%B0%E5%A2%9Edom%E6%93%8D%E4%BD%9C)
    - [DOM获取](#dom%E8%8E%B7%E5%8F%96)
    - [样式操作](#%E6%A0%B7%E5%BC%8F%E6%93%8D%E4%BD%9C)
    - [自定义属性](#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7)
  - [新增接口](#%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3)
    - [网络接口](#%E7%BD%91%E7%BB%9C%E6%8E%A5%E5%8F%A3)
    - [全屏接口](#%E5%85%A8%E5%B1%8F%E6%8E%A5%E5%8F%A3)
    - [拖拽接口](#%E6%8B%96%E6%8B%BD%E6%8E%A5%E5%8F%A3)
    - [定位接口](#%E5%AE%9A%E4%BD%8D%E6%8E%A5%E5%8F%A3)
      - [第三方地图接口](#%E7%AC%AC%E4%B8%89%E6%96%B9%E5%9C%B0%E5%9B%BE%E6%8E%A5%E5%8F%A3)
    - [本地存储](#%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8)
    - [应用缓存](#%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98)
    - [多媒体接口](#%E5%A4%9A%E5%AA%92%E4%BD%93%E6%8E%A5%E5%8F%A3)
- [CSS3](#css3)
  - [基本情况](#%E5%9F%BA%E6%9C%AC%E6%83%85%E5%86%B5)
  - [新增选择器](#%E6%96%B0%E5%A2%9E%E9%80%89%E6%8B%A9%E5%99%A8)
    - [属性选择器](#%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A8)
    - [伪类选择器](#%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8)
  - [颜色值问题](#%E9%A2%9C%E8%89%B2%E5%80%BC%E9%97%AE%E9%A2%98)
  - [文字阴影/标签阴影](#%E6%96%87%E5%AD%97%E9%98%B4%E5%BD%B1%E6%A0%87%E7%AD%BE%E9%98%B4%E5%BD%B1)
  - [盒子模型](#%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B)
  - [圆角属性](#%E5%9C%86%E8%A7%92%E5%B1%9E%E6%80%A7)
  - [渐变色](#%E6%B8%90%E5%8F%98%E8%89%B2)
  - [背景相关](#%E8%83%8C%E6%99%AF%E7%9B%B8%E5%85%B3)
  - [过渡及动画](#%E8%BF%87%E6%B8%A1%E5%8F%8A%E5%8A%A8%E7%94%BB)
  - [2d转换](#2d%E8%BD%AC%E6%8D%A2)
  - [3d转换](#3d%E8%BD%AC%E6%8D%A2)
  - [元素居中](#%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD)
  - [2d+居中/时钟案例](#2d%E5%B1%85%E4%B8%AD%E6%97%B6%E9%92%9F%E6%A1%88%E4%BE%8B)
  - [字体问题](#%E5%AD%97%E4%BD%93%E9%97%AE%E9%A2%98)
  - [多列布局](#%E5%A4%9A%E5%88%97%E5%B8%83%E5%B1%80)
  - [弹性布局](#%E5%BC%B9%E6%80%A7%E5%B8%83%E5%B1%80)
  - [一个全屏插件](#%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%8F%E6%8F%92%E4%BB%B6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# HTML5

## 新元素兼容问题

- IE10 以上正常兼容
- IE9部分兼容
- IE8及以下不兼容，需要引入插件让ie8能够正常显示html新元素。`<script src="html5shiv.min.js"></script>`

## 表单部分

### 新的type类型

| 类型           | 说明                                       |
| -------------- | ------------------------------------------ |
| tel            | （在移动端拉起数字键盘）                   |
| email          | 验证邮箱输入                               |
| url            | 验证网址输入                               |
| number         | **限制**输入数字 （max、min、step、value） |
| search         | 提供删除输入功能                           |
| range          | 范围（max、min、value）                    |
| color          | 颜色拾取                                   |
| ~~time~~       | pc端支持性不好                             |
| ~~date~~       | pc端支持性不好                             |
| ~~datetime~~   | pc端支持性不好                             |
| ~~date-local~~ | pc端支持性不好                             |
| ~~month~~      | pc端支持性不好                             |
| ~~week~~       | pc端支持性不好                             |

### 新的表单属性

| 属性         | 说明                                             |
| ------------ | ------------------------------------------------ |
| placeholder  | 提示输入                                         |
| required     | 验证必须输入                                     |
| autocomplete | 在提交之后记录                                   |
| autofocus    | 自动获取焦点                                     |
| pattern      | 输入正则`pattern="^(\+86)?1\d{10}$"`             |
| multiple     | 设置可以多选（文件、下拉菜单、邮箱【逗号分隔】） |
| form         | 设置为form的id值，设置控件的归属                 |
| list         | input中使用，值为datalist的id值                  |

### 新增的表单元素

- ~~datalist（兼容不好）~~

```html
	<form>
    	<!--提供输入-->
    	专业：<input type="text" list="lg"/>
    	<!--提供选项-->
    	<datalist id="lg">
    		<option value="javascript" label="前景最好的语言"></option>
    		<option value="java" label="使用最多的语言"></option>
    		<option value="c" label="头发最少的语言"></option>
    	</datalist
    </form>
 	<!--
    		value：显示的值 
    		label：作为提示信息显示
    		input的type类型不同时，option中的value必须是符合要求的合法值，否则无法显示
    -->
```

- keygen
- output

### 新增的表单事件

> oninput onkeyup oninvalid

- `oninvalid`

```html
。。。
<!--添加正则验证-->
<input v-on:invalid="uservalid" type="text" id="username" pattern="^1\d{10}"/>
<input type="submit" />
。。。
```

```javascript
...
methods:{
  	//新增的事件类型oninput、onkeyup、oninvalid
  	uservalid:function(e){
  		//设置默认的提示信息
  		e.target.setCustomValidity("请输入合法的11位手机号")
  	}
  }
....
```

## 进度条/度量器

```html
<!--最大值 当前值-->
    <progress max="100" value="50"></progress>
```

```html
<!--最大值 最小值 低标准 高标准 当前值-->
    <meter max="100" min="0" low="50" high="80" value="40"></meter>
    <meter max="100" min="0" low="50" high="80" value="60"></meter>
    <meter max="100" min="0" low="50" high="80" value="90"></meter>
```

## 媒体元素

```html
  <!--
  	src
  	controls
  	autoplay
  	loop
  	widht
  	height
  	poster：设置视频的默认界面
  -->
```

## 新增DOM操作

### DOM获取

```javascript
document.querySelect()
```



### 样式操作

```javascript
	var div = document.getElementsByClassName("red")[0]
	console.log(div.classList)
	div.classList.add("blue")
	div.classList.remove("green")
	div.classList.toggle("green")
```

### 自定义属性

```html
规范：
	通过data- 开头
	data- 后至少有一个字符
建议：
	使用小写
	不要使用特殊符号
	不要说好用纯数字
<p data-mp="a">sunchen</p>
```

```javascript
var p = document.getElementsByTagName("p")[0]
console.log(p.dataset.mp)
p.dataset.mp="sc"
```

## 新增接口

### 网络接口

```javascript
//新增事件：网络连接、网络断开
window.addEventListener("online",function(){
    console.log("网络连接")
})
window.addEventListener("offline",function(){
    console.log("网络断开")
})
```

### 全屏接口

- 基本介绍

```javascript
/*全屏操作的属性和方法
    	 * 1、requestFullScreen() 开启全屏显示
    	 * 		不同的浏览器需要设置不同的前缀
    	 * 		webkit、moz、ms、o
    	 * 2、cancelFullScreen() 关闭全屏
    	 * 		也需要设置前缀，并且只能由document调用
    	 * 3、fullScreenElement 判断是全屏状态
    	 * 		同样需要前缀，也是只能由document调用
    	 */
```

- 开启全屏

```javascript
//开启全屏
			btn.onclick = function(){
				if(div.requestFullscreen){
					div.requestFullscreen()
				}else if(div.mozRequestFullScreen){
					div.mozRequestFullScreen()
				}else if(div.webkitRequestFullScreen){
					div.webkitRequestFullScreen()
				}else if(div.msRequestFullScreen){
					div.msRequestFullScreen()
				}else{
					alert("你的浏览器版本过低")
				}
			}
```

- 关闭全屏

```javascript
//关闭全屏
			btn2.onclick = function(){
				if(document.cancelFullScreen){
					document.cancelFullScreen()
				}else if(document.mozCancelFullScreen){
					document.mozCancelFullScreen()
				}else if(document.webkitCancelFullScreen){
					document.webkitCancelFullScreen()
				}else if(document.msCancelFullScreen){
					document.msCancelFullScreen()
				}else{
					alert("你的浏览器版本过低")
				}
			}
```

- 判断是否全屏

```javascript
//判断是否全屏
			btn3.onclick = function(){
				if(document.fullscreenElement || document.msFullscreenElement || document.webkitFullscreenElement){
					alert("全屏中")
				}else{
					alert("不是全屏")
				}
			}
```

### 拖拽接口

[点名系统]: 1993sc.com

- 基本介绍

```javascript
/*
   		 * 1、元素要想被拖拽，需要添加draggable="true"属性，img和a不用添加，默认就是允许拖拽。
   		 * 2、拖拽事件分为两大类：拖拽元素、目标元素
   		 * 		拖拽元素：
   		 * 				ondrag：整个拖拽过程都会调用
   		 * 				ondragstart：拖拽开始时调用
   		 * 				ondragleave:鼠标离开拖拽元素
   		 * 				ondragend：拖拽结束时调用
   		 * 		目标元素：
   		 * 				ondragenter：鼠标进入目标元素
   		 * 				ondragover：鼠标停留在目标元素时调用
   		 * 				ondrop：在目标元素上松开鼠标时调用
   		 * 				ondragleave：鼠标离开目标元素时调用
   		 *3、ondrop 默认情况浏览器阻止触发，需要在ondragover中阻止浏览器默认行为
   		 */
```

- 使用托管事件，封装可复用的代码

```html
<div class="f1">
    <div class="s1" draggable="true">脱不脱1</div>
    <div class="s2" draggable="true">脱不脱2</div>
</div>
<div class="f2"></div>
```

```javascript
   		//拖拽元素事件定义：使用事件托管，将事件挂载到document，这是只是测试，要根据实际情况托管事件
		var start = null;
   		document.ondragstart = function(e){
   			//开始拖拽时获取拖拽元素
   			start = e.target;
   			e.target.style.opacity="0.5"
   		}
   		document.ondragend = function(e){
   			//结束拖拽时，释放拖拽元素
   			start = null;
   			e.target.style.opacity="1"
   		}
   		//目标元素定义事件：使用事件托管，将事件挂载到document，这是只是测试，要根据实际情况托管事件
   		document.ondragover = function(e){
   			//这里很重要
   			//允许元素被拖拽到目标元素
   			//允许触发ondrop事件
   			e.preventDefault()
   			return false;
   		}
   		document.ondrop = function(e){
   			//鼠标松开时，将拖拽元素添加到目标元素
   			e.target.appendChild(start)
   		}
```

### 定位接口

`navigator`原生接口使用不便：一般都是调用第三方地图的接口

> - pc端无法使用

- 主函数

```javascript
    function getLocation()
    {
        /*能力测试*/
        if (navigator.geolocation)
        {
            /*1.获取地理信息成功之后的回调
            * 2.获取地理信息失败之后的回调
            * 3.调整获取当前地进信息的方式*/
            //navigator.geolocation.getCurrentPosition(success,error,option);
            /*option:可以设置获取数据的方式
            * enableHighAccuracy:true/false:是否使用高精度
            * timeout:设置超时时间，单位ms
            * maximumAge:可以设置浏览器重新获取地理信息的时间间隔，单位是ms*/
            navigator.geolocation.getCurrentPosition(showPosition,showError,{
                /*enableHighAccuracy:true,
                timeout:3000*/
            });
        }
        else{
            x.innerHTML="Geolocation is not supported by this browser.";
        }
    }
```

- 定位成功回调

```javascript
   /*成功获取定位之后的回调*/
    /*如果获取地理信息成功，会将获取到的地理信息传递给成功之后的回调*/
    // position.coords.latitude 纬度
    // position.coords.longitude 经度
    // position.coords.accuracy 精度
    // position.coords.altitude 海拔高度
    function showPosition(position)
    {
        x.innerHTML="Latitude: " + position.coords.latitude +
                "<br />Longitude: " + position.coords.longitude;
    }
```

- 定位失败回调

```javascript
  /*获取定位失败之后的回调*/
    function showError(error)
    {
        switch(error.code)
        {
            case error.PERMISSION_DENIED:
                x.innerHTML="User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML="Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML="The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML="An unknown error occurred."
                break;
        }
    }
```

#### 第三方地图接口

> 演示百度地图API调用

`百度地图`----`地图开放平台`----`开发文档`----`Javascript API`---`选择任意类型复制代码测试`

### 本地存储

> - h5中本地存储提供了两种方案：
>   - sessionStorage：临时存储，网页关闭存储数据自动删除 （5M）
>   - localStorage：永久存储，需要手动删除，才会删除。(20M)

> 两种方案，拥有一样的操作方式
>
> ```javascript
> //存储一组数据（key:value）
> 			sessionStorage.setItem("username","sc");
> 			//获取指定属性名中值
> 			sessionStorage.getItem("username");
> 			//删除指定属性名的值
> 			sessionStorage.removeItem("username");
> 			//清楚所有存储数据
> 			sessionStorage.clear();
> ```

### 应用缓存

> - 首先：浏览器自带缓存功能，但是只能选择是否缓存（全部），或者是不缓存，无法指定文件缓存。
> - h5提供了更加方便的设置缓存的方式
> - 并不觉得使用方便---sc

h5缓存机制的使用：

- 在html中添加属性，值为缓存配置清单文件

```html
<!DOCTYPE html>
<!--manifest="应用程序缓存清单文件的路径，建议文件的扩展名是appcache，这个文件的本质就是一个文本文件"-->
<html manifest="demo.appcache">
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			img{
				width: 300px;
			}
		</style>
	</head>
	<body>
		<img src="images/l1.jpg"/>
		<img src="images/l2.jpg"/>
		<img src="images/l3.jpg"/>
		<img src="images/l44.jpg"/>
	</body>
</html>
```

- 缓存配置清单的编写

```appcache
CACHE MANIFEST
#配置文件中，使用"#"添加注释
#CACHE MANIFEST 一定是在第一句,声明这是一个缓存配置文件

#配置需要缓存的文件清单列表
CACHE:
images/l1.jpg
images/l2.jpg
# 使用* 代表缓存所有文件

#配置那些文件不需要缓存，每一次都要从服务器获取
NETWORK:
images/l3.jpg

#如果文件无法获取，指定替代文件
FALLBACK:
images/l44.jpg images/l4.jpg
# /：代表所有文件
# / images/l4.jpg
```

### 多媒体接口

[HTML 音频/视频 DOM 参考手册]: https://www.runoob.com/tags/ref-av-dom.html

- 常用方法：
  - load()	加载
  - play() 播放
  - pause() 暂停
- 常用属性：
  - currentTime 视频播放的当前进度
  - duration：视频的总时间 
  - paused：视频的播放状态
- 常用事件：
  - oncanplay ：在可以播放时触发
  - ontimeupdate： 在播放进度更新时触发
  - onended：视频方法完毕时触发

# CSS3

## 基本情况

- 兼容性逐渐提升
- 使用中需要根据需求选择性使用
- 经常要添加兼容性前缀。

## 新增选择器

> css3新增了大量的选择器用法，为了适应各种情况下进行元素原则。
>
> 个人认为这些东西实用性一般，没有必要太过在意。

### 属性选择器

```css
			/*选择拥有class属性的div标签*/
			div[class]{}
			/*选择class类名为header的div标签*/
			div[class=header]{}
			/*选择class类名以header开头的div标签*/
			div[class^=header]{}
			/*选择class类名以header结尾的div标签*/
			div[class$=header]{}
			/*选择class类名包含header的div标签*/
			div[class*=header]{}
```

### 伪类选择器

> 结构伪类

- 兄弟伪类

```css
			/*选择与div相邻的兄弟span标签*/
			div + span {}
			/*选择div的兄弟span标签*/
			div ~ span {}
```

- 相对于父元素的兄弟伪类:只有当兄弟元素都一样时，才能使用

```css
			/*选择div标签父标签的第一个子元素（还需是div）*/
			div:first-child{}
			/*选择div父标签的最后一个子标签（还需是div）*/
			div:last-child{}
			/*选择div父标签的第5个子标签（还需是div）*/
			div:nth-child(5){} /*even、odd、n、2n、...*/
```

- 相对于父标签的兄弟伪类

```css
			/*选择div的父标签中所有div中的第一个*/
			div:first-of-type{}
			/*选择div的父标签中所有div中的最后一个*/
			div:last-of-type{}
			/*选择div的父标签中所有div中的第5个*/
			div:nth-of-type(5){}
```

- 再来两个

```css
			/*选择内容为空的div*/
			div:empty{}
			/*选择被正在锚点调转成功后的div*/
			div:target{}
```

> 伪元素伪类

- 两个最重要的，高手常用

```css
/*在div中的最前边创建一个标签（伪标签）*/
div:before{
    content:""
}
/*在div中的最后边创建一个标签（伪标签）*/
div:after{
    content:""
}
```

- 其他

```css
/*div中的第一个文字/字母*/
div:first-letter{}
/*div中的第一行文字*/
div:first-line{}
/*div中被选中的文字：只能更改颜色*/
div::selection{}
```

## 颜色值问题

- 好理解的

```css
div{
    color: red; /*单词*/
    color: #008B8B;/*16进制 ：红绿蓝*/
    color: rgb(100,200,150);/*红,绿,蓝*/
    color: rgba(100,200,150,0.7);/*红,绿,蓝,透明度*/
}
```

- 不太好理解的

```css
/*hls颜色模式 0~360   0红-橙-黄-绿-青-蓝-紫-红360*/

div{
    /*颜色值，饱和度，明度，透明度*/
    color: hsl(300,100%,100%,0.6);
}
```

- 你越反抗，我越强壮~_~越难越不用

## 文字阴影/标签阴影

```css
div{
    /*水平偏移，垂直偏移，羽化程度，颜色值*/
    text-shadow: 10px 20px 0px red;
    /*水平偏移，垂直偏移，羽化程度，增大值，颜色值*/
    box-shadow: 20px 40px 0px 0px blue;
    /*可以设置多个阴影，使用逗号隔开。inset ：添加内部阴影*/
    box-shadow: 20px 40px 0px 0px blue,inset 5px 5px 0px 0px deeppink;
}
```

## 盒子模型

- 标签的盒子模型由4层，盒子的总大小= ==   content + padding + border
- 正常情况下设置的宽高（widht/height）只是content的大小
- 给标签设置`box-sizing: border-box;`之后，设置的宽高（widht、height）就直接是标签的总大小。`padding`和`border`向里挤压。

## 圆角属性

```css
div{
    border-radius: 5px;
}
```

## 渐变色

- 线性渐变

```css
div{
    background: linear-gradient(to right,red,blue);
    background: linear-gradient(to right,red 20%,blue 60%);
}
```

- 径向渐变

```css
div{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(red,blue);
    background: radial-gradient(red 50%,blue 90%);
    /*设置中心点坐标*/
    background: radial-gradient(at left top,red 50%,blue 90%);
    /*设置中心点坐标：参考点为左上角*/
    background: radial-gradient(at 150px 0px,red 50%,blue 90%);
}
```

- 重复渐变：在以上基础上循环

```css
/*重复渐变*/
background: repeating-linear-gradient(to right,red 0%,blue 10%);
background: repeating-radial-gradient(red 0%,blue 10%);
```

## 背景相关

```css
div{
    height: 300px;
    width: 300px;
    padding: 10px;
    background-color: palevioletred;
    background-image: url("images/l2.jpg");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-origin: content-box;
    background-attachment: fixed;
    background-size: contain;
}
```

## 过渡及动画

- 过渡

```css
div{
    transition: all 2s ease;
}
```

- 动画

```css
@keyframes ani{
    from{
        width: 100px;
    }
    to{
        height: 200px;
    }
}
div{
    animation: ani 2s ease infinite reverse both;
}
```

## 2d转换

```css
div{
    transform: translate() scale() rotate() skew();
}
```

## 3d转换

```css
body{
    /*设置井深*/
    perspective: 400px;
    /*设置显示模式为3d：否则立体效果无法显示*/
    transform-style: preserve-3d;
}
div:hover{
    /*设置旋转中心点*/
    transform-origin: 0 0;
    transform: translate3d() rotate3d() scale3d() skew();
}
```

## 元素居中

- 给需要居中显示的子元素设置属性

```css
div{
    /*设置宽度：必须*/
    width: 500px;
    /*定位：必须，根据情况选择定位方式*/
    position: relative;
    /*必须：右移父元素的50%*/
    left: 50%;
    /*必须：左移自己的50%*/
    transform: translateX(-50%);
}
```

## 2d+居中/时钟案例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
			}
			body,html{
				height: 100%;
				width: 100%;
				transform-style: preserve-3d;
			}
			ul,li{
				list-style: none;
			}
            /*最外层一圈*/
			.circle{
				width: 500px;
				height: 500px;
				border: 10px solid darkgray;
				border-radius: 50%;
				position: relative;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
			}
            /*外圈小柱柱们*/
			.point li{
				position: absolute;
				width: 500px;
				height: 10px;
				background-color: darkgray;
				top: 50%;
			}
            /*旋转每一个小柱柱*/
			.point li:nth-child(1){
				transform: translateY(-50%) rotate(30deg);
			}
			.point li:nth-child(2){
				transform: translateY(-50%) rotate(60deg);
			}
			.point li:nth-child(3){
				transform: translateY(-50%) rotate(90deg);
			}
			.point li:nth-child(4){
				transform: translateY(-50%) rotate(120deg);
			}
			.point li:nth-child(5){
				transform: translateY(-50%) rotate(150deg);
			}
			.point li:nth-child(6){
				transform: translateY(-50%) rotate(180deg);
			}
            /*白色遮罩，让柱柱条俩柱柱*/
			.white{
				width: 450px;
				height: 450px;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				border-radius: 50%;
				background-color: white;
			}
            /*指针们*/
			.line li{
				position: absolute;
				left: 50%;
				top: 50%;
				width: 10px;
				margin-left: -5px;
				transform-origin:center bottom ;
				border-radius: 10px 10px 0 0;
			}
            /*指针动画帧*/
			@keyframes ani{
				from{
					transform: rotate(0deg);
				}
				to{
					transform: rotate(360deg);
				}
			}
            /*时针*/
			.shi{
				background-color: red;
				height: 80px;
				margin-top: -80px;
				animation: ani 43200s linear infinite;
			}
           /*分针*/ 
			.fen{
				background-color: blue;
				height: 140px;
				margin-top: -140px;
				animation: ani 3600s linear infinite;
			}
            /*秒针*/
			.miao{
				background-color: green;
				height: 190px;
				margin-top: -190px;
				animation: ani 60s infinite steps(60);
			}
            /*中心点*/
			.center{
				width: 20px;
				height: 20px;
				background-color: deeppink;
				border-radius: 50%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
			}
		</style>
	</head>
	<body>
         /*外圈*/
		<div class="circle">
             /*外圈柱柱*/
			<ul class="point">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
             /*白色遮罩*/
			<div class="white"></div>
             /*指针们*/
			<ul class="line">
				<li class="miao"></li>
				<li class="fen"></li>
				<li class="shi"></li>
			</ul>
            /*中心点*/
			<div class="center"></div>
		</div>
	</body>

</html>
```

## 字体问题

- 使用特殊字体：下载---引入 https://www.iconfont.cn
- 字体图标：下载---引入 https://www.iconfont.cn  / https://icomoon.io/

## 多列布局

```css
div{
    /*分成三列*/
    column-count: 3;
    /*在列中间加一条分隔线*/
    column-rule: 3px solid red;
    /*设置列间距宽度*/
    column-gap: 50px;
    /*设置每一列内容的宽度*/
    /*column-width: 500px;*/
}
div h3{
    /*设置跨列 1 all*/
    column-span: all;
}
```

## 弹性布局

```css
.father{
    /*设置符标签开启弹性布局*/
    display: flex;
    /*设置子标签（主轴）对齐方式  左对齐（默认）*/
    justify-content: flex-start;
    /*设置子标签是否换行 不换行（默认）*/
    flex-wrap: nowrap;
    /*设置主轴反向  横轴（默认）*/
    flex-direction: row;
    /*设置(侧轴)对齐方式 填充（默认）*/
    align-items: stretch;
}
.son{
    /*设置子标签占父标签的比例*/
    flex: 1;
    /*设置有空余空间时，子标签的增大比 默认0 不增大*/
    flex-grow: 0;
    /*设置空间不足时，子标签的压缩比 默认1  设置为0 则不压缩*/
    flex-shrink: 1;
}
```

## 一个全屏插件

参考<a href="http://www.jq22.com/jquery-info1124">fullpage</a>
