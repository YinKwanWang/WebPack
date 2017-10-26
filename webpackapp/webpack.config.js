const path = require('path');
module.exports = {
	   //配置入口文件
        entry:"./src/js/app.js",
        output:{
        	path:__dirname+"/dist",
        	 // 所有输出文件的目标路径 必须是绝对路径
        	//path:path.resolve(__dirname),//string

        	filename:"bundle.js"
        },
        module:{ // 模块配置信息
            loaders:[
                {
                	test:/\.css$/,
                	loader:"style-loader!css-loader"
                },
                {
                    test:/\.js$/,
                    
                    loader:"babel-loader",
                    // 不包含
                    exclude:/node_modules/,
                    // 执行
                    query:{
                       "presets":["es2015"]
                    }
                }
            ]
        }
        // watch:true
};