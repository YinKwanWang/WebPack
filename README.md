# Webpack lesson-1

###     ping baidu.com 可以测试网络连接,拿到他的ip地址 
### 	entry: 入口文件有且只能有一个,其他功能文件可以通过入口文件进行引入，一并打包到出口文件

### 	webpack app.js bundle.js
### 	output: 出口文件有且只有一个，通常命名为bundle.js,会将入口文件及相关联的功能文件内容，全部打包到出口文件 
### 	     webpack app.js bundle.js 运行打包命令

### 	     webpack app.js bundle.js --watch 持续监听并打包

### 	     style-loader: 作用是在html中添加style标签，让html可以识别样式

### 	     css-loader: 作用是让打包文件可以获取到CSS样式，并且在入口文件中能够引入

### 	webpack-server: 作用是搭建服务器，将项目运行在服务器中 

###     引入样式打包的话不用变量接收
###     require("style-loader!css-loader!./style.css");

###     path:__dirname+"/dist",
        	 // 所有输出文件的目标路径 必须是绝对路径


