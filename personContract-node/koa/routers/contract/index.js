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

    router.get('/contractmanage/setButtonPermission', function*(){   //设置导航权限
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
    }).get('/contractmanage/sonPermission', function*(){  //下拉导航权限
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
    }).get('/contractmanage/guidePermission/:guideAddrStatus', function*(){ //合同管理菜单导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().ManagePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/contractchange/guidePermission/:guideAddrStatus', function*(){ //合同变更菜单导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().ChangePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/contracttype/guidePermission/:guideAddrStatus', function*(){ //合同类型菜单导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().TypePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/contractnature/guidePermission/:guideAddrStatus', function*(){ //合同性质菜单导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().naturePermission(page)
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
    }).get('/contractmanage/info/maps', function*(){   //物资调动列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listManage(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/info/getTotal', function*(){   //物资调动总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countManage(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/delete', function*(){  //删除物资调动信息
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().deleteManage(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contractmanage/save', function*(){  //物资日盘添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addManage(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/findById', function*(){   //根据id来查询合同管理信息
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getManage(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/info/update', function*(){  //编辑合同管理信息
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editManage(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/materialtransfer/allGetPerson', function*(){   //查询所有的用户
        var $self = this;
        yield (server().getUserAll()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/getChoice', function*(){   //查询所有的合同性质
        var $self = this;
        yield (server().getNatureAll()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/getChoice', function*(){   //查询所有的类型
        var $self = this;
        yield (server().getTypeAll()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contractmanage/uploadFile', koaBody({multipart:true}),function *(next) {//上传文件 
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().ManageUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/listFile', function*(){ //查看附件 
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().ManageEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/downloadFile', function*(){//下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/contractmanage/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/contractmanage/deleteFile', koaBody({multipart:true}), function*(){ // 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delManage(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contractmanage/saveChange', function*(){  //编辑合同变更
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editChange(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/personal/maps', function*(){   //合同信息列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listDetail(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/personal/getTotal', function*(){   //合同信息总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countDetail(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/personal/update', function*(){  //编辑合同管理信息
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editDetail(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractchange/maps', function*(){   //合同变更列表-----------------------------------
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listChange(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractchange/getTotal', function*(){   //合同变更总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countChange(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractchange/update', function*(){  //编辑合同变更
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editChange(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractchange/delete', function*(){  //删除
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().deleteChange(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractchange/findById', function*(){   //根据id来查询
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getChange(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/maps', function*(){   //合同类型列表---------------------------
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listType(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/getTotal', function*(){   //合同类型总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countType(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/delete', function*(){  //删除合同类型
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().deleteType(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contracttype/save', function*(){  //合同类型添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addType(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/findById', function*(){   //根据id来查询合同类型
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getType(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contracttype/update', function*(){  //编辑合同类型
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editType(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/thaw', function*(){   //解冻
        var $self = this;
        var thawId = $self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().thawType(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/contracttype/congeal', function*(){  //冻结
        var $self = this;
        var conId = $self.request.query;
        conId.token = $self.cookies.get('token');
        yield (server().congealType(conId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/maps', function*(){   //合同性质列表---------------------------
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listNature(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/getTotal', function*(){   //合同性质总条数
        var $self = this;
        var page ={};
        page.token = $self.cookies.get('token');
        yield (server().countNature(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/delete', function*(){  //删除合同性质
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().deleteNature(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contractnature/save', function*(){  //合同性质添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addNature(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/findById', function*(){   //根据id来查询合同性质
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().getNature(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contractnature/update', function*(){  //编辑合同性质
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editNature(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/thaw', function*(){   //解冻
        var $self = this;
        var thawId = $self.request.query;
        thawId.token = $self.cookies.get('token');
        yield (server().thawNature(thawId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/contractnature/congeal', function*(){  //冻结
        var $self = this;
        var conId = $self.request.query;
        conId.token = $self.cookies.get('token');
        yield (server().congealNature(conId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/contractmanage/affirm', function*(){  //确认解除合同
        var $self = this;
        var getId = $self.request.query;
        getId.token = $self.cookies.get('token');
        yield (server().confirmManage(getId)
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
