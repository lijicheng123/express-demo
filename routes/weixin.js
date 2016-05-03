/**
 * Created by lijicheng on 16/5/2.
 */
var express = require('express');
var request = require('request');
var router = express.Router();

var options = {
    url:'http://apis.baidu.com/showapi_open_bus/weixin/weixin_num_list',
    headers:{
        apikey:'8306c8cdf7775e242fd04d6fa3db9fbc'
    }
}

router.get('/',function (req,res){
    request.get(options,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if(body){
                body = JSON.parse(body);
                //console.log(body.showapi_res_body.pagebean.contentlist);
                var list = body.showapi_res_body.pagebean.contentlist;
                res.render('weixin',{list:list});

            }
        }
    })

})
router.get('/post',function (req,res) {
    res.render('post',{data:'test post request'})
})
router.post('/submit/content',function (req,res) {
    console.log(req.body);
    res.send({data:'我们收到你post过来的东西啦!',content:req.body});
})
module.exports = router
