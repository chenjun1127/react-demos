// module.exports = {
//     plugins: [
//         require('autoprefixer')({
//             'browsers': ['> 1%', 'last 2 versions']
//         }),
//         require('postcss-px-to-viewport')({
//             "viewportWidth": 750,
//             "viewportHeight": 1334,
//             "unitPrecision": 5,
//             "viewportUnit": "vw",
//             "selectorBlackList": [],
//             "minPixelValue": 1,
//             "mediaQuery": false
//         })
//     ]
// };
/**
 * @dateTime:2018/05/30 11:37:04
 * @author:ChenJun
 * @desc:postcss配置，上面一种写法也可以
 */
module.exports = {
    plugins: {
        "autoprefixer": {
            'browsers': ['> 1%', 'last 2 versions']
        },
        "postcss-px-to-viewport": {
            "viewportWidth": 750,
            "viewportHeight": 1334,
            "unitPrecision": 5,
            "viewportUnit": "vw",
            "selectorBlackList": [],
            "minPixelValue": 1,
            "mediaQuery": false
        }
    }
};