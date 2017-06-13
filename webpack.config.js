var webpack = require("webpack");
var path = require('path');

module.exports = {
	// This is the "main" file which should include all other modules
	entry:{
		
		app:'./resources/assets/src/components/app.js',
		test:'./node_modules/materialize-css/dist/js/materialize.js'
	},
	// Where should the compiled file go?
	output: {      
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
        path:path.resolve(__dirname,"./public/dist"),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        // 	///....
        // })
    ],	
    module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel',
				exclude:/node_modules/
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	vue: {
	    loaders: {
	      js: 'babel-loader'
	    }
 	}
}