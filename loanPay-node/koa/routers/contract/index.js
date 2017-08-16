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

    router.get('/moneyready/setButtonPermission', function*(){ //设置导航权限
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
    }).get('/moneyready/sonPermission', function*(){  //下拉导航权限
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
    }).get('/moneyready/guidePermission/:guideAddrStatus', function*(){ //资金准备菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().capitalPermission(page)
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
    }).get('/moneyready/list', function*(){   //资金准备列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listCap(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/moneyready/countSum', function*(){   //资金准备总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countCap(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/moneyready/delete', function*(){  //删除资金准备
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().deleteCap(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/moneyready/save', function*(){  //资金准备添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addCap(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/moneyready/moneyready', function*(){   //根据id来查询资金准备
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getCap(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/moneyready/edit', function*(){  //编辑收入成本
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editCap(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/listAccountCom', function*(){   //获取所有付款来源
        var $self = this;
        yield (server().getMoneyAll()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/waitPays', function*(){   //等待付款列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listWait(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/waitPayCount', function*(){   //等待付款总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countWait(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/waitpay/pay', function*(){  //编辑等待付款
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().Paywait(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/waitPayExport', function*(){//导出等待付款
        var $self = this;
        var count = $self.request.query;
        var fileName = "等待付款信息"+'.xlsx';
        yield (fetch(config()['rurl']+`/waitpay/v1/waitPayExport${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/waitpay/pays', function*(){   //已付款列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listPaid(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/payCount', function*(){   //已付款总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countPaid(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/findWait', function*(){   //根据id来查询租房信息
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getWait(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/payExport', function*(){//导出已付款信息
        var $self = this;
        var count = $self.request.query;
        var fileName = "已付款信息"+'.xlsx';
        yield (fetch(config()['rurl']+`/waitpay/v1/payExport${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/waitpay/allAreas', function*(){   //查询所有的地区
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
    }).get('/waitpay/allProjectGroups', function*(){   //查询所有的部门
        var $self = this;
        yield (server().getGroupAll()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/areaCount', function*(){//地区汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collectArea(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/iwaitpay/projectGroupCount', function*(){//项目组汇总
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().collectGroup(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/difference', function*(){//资金准备与实际支付差异
        var $self = this;
        var collectData = $self.request.query;
        collectData.token = $self.cookies.get('token');
        yield (server().listSelect(collectData)
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
