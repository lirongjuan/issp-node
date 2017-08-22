var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename, '../')) + '/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
module.exports = function(){
    var router = new Router();

    router.get('/father/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {token:$self.cookies.get('token')};
        yield (server().settingNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/father/sonPermission', function*(){  //下拉导航权限
        var $self = this;
        var navToken = {token:$self.cookies.get('token')};
        yield (server().contractNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/father/guidePermission/:guideAddrStatus', function*(){ //所有事件菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().allPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/waitpay/guidePermission/:guideAddrStatus', function*(){ //资金准备菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().waitPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/listSetting', function*(){   //设置
        var $self = this;
        var setting = this.request.query;
        setting.userToken = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.userToken = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/event/list', function*(){   //事件列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        /*console.log(page);*/
        yield (server().listAff(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/event/count', function*(){   //事件总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countAff(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/list', function*(){   //所有事件列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listAll(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/count', function*(){   //所有事件总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countAll(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/findArea', function*(){   //查询所有的地区
        var $self = this;
        yield (server().getAreaAll()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/zongCount', function*(){ //总事件汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collectAll(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/haveDealCount', function*(){ //已处理事件汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collecthandle(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/noDealCount', function*(){ //未处理事件汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collectundreat(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/passNoDealCount', function*(){ //逾期未处理事件汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collectover(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/father/classifyCount', function*(){ //分类汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collecClass(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/timeset/list', function*(){   //时间设置列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listTime(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/timeset/freeze', function*(){  //冻结
        var $self = this;
        var conId = $self.request.query;
        conId.token = $self.cookies.get('token');
        yield (server().congealTime(conId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/timeset/thaw', function*(){ //解冻
        var $self = this;
        var thawId = $self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().thawTime(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/timeset/timeSet', function*(){   //根据id来查询资金准备
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getTime(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/timeset/edit', function*(){  //编辑时间设置
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editTime(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/event/findByMonth', function*(){ //通过日历查看待办事件
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().selectAff(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};
