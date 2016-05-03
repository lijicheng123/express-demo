/**
 * Created by lijicheng on 16/5/2.
 */
var express = require('express');
var request = require('request');
var router = express.Router();
router.get('/', function (req, res) {
    request.post(
        {
            url: 'http://diantu.tv/api/video/comment',
            form: {
                token: 'AQtCFLNGRsxiUBeHvikFZzotUClCsPy9kGY%253D',
                videoId: '72',
                content: '来看看美女主播,好久不见鲜儿'
            }
        },
        function (error, response, body) {
            console.log(body);
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    )
    res.render('comment',{data:'我是评论也'});
})
module.exports = router;