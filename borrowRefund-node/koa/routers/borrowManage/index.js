var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();
    
    //列表 申请贷款  
    router.get('/borrowRefund/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().settingNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowRefund/sonPermission', function*(){ //导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().siginNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowRefund/borrowManage/:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().borrowManagePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowManage/applylend/list', function*(){
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().applylendList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/applylend/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().applylendCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //添加
    }).post('/borrowManage/applylend/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().applylendAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/applylend/getOneById', function*(){ //编辑ID
        var $self = this;
        var EditId = $self.request.query;
        EditId.userToken = $self.cookies.get('token');
        yield (server().applylendById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/applylend/editData', function*(){ //编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().applylendEidt(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/applylend/delete', function*(){
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().applylendDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/applylend/allSubject', function*(){
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().allThirdSubject(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/applylend/allPlains', function*(){//获取所有说明 
        var $self = this;
        var allPlainsData = $self.request.body;
        allPlainsData.userToken = $self.cookies.get('token');
        yield (server().allPlains(allPlainsData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/applylend/FirstAndSecond', function*(){
        var $self = this;
        var FSData = $self.request.body;
        FSData.userToken = $self.cookies.get('token');
        yield (server().FirstAndSecond(FSData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/applylend/auditDetail', function*(){//审核详情
        var $self = this;
        var EditId = $self.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().auditDetail(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/applylend/exportFile', function*(){//导出 申请借款
        var $self = this;
        var count = $self.request.query;
        var fileName = '申请借款'+'.xlsx';
        yield (fetch(config()['rurl']+`/applylend/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/borrowManage/applyErr/list', function*(){//申请单有误
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().applyErrList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/applyErr/count', function*(){
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().applyErrCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowManage/applyErr/getOneById', function*(){
        var $self = this;
        var EditId = $self.request.query;
        EditId.userToken = $self.cookies.get('token');
        yield (server().applyErrById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
            //编辑
    }).post('/borrowManage/applyErr/editData', function*(){
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().applyErrEidt(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/applyErr/delete', function*(){
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().applyErrDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/applyErr/applyErrDetail', function*(){
        var $self = this;
        var DetailId = $self.request.query;
        DetailId.userToken = $self.cookies.get('token');
        yield (server().applyErrDetail(DetailId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/waitAudit/list', function*(){//等待审核
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().waitAuditList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/waitAudit/count', function*(){
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().waitAuditCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);;
            }));
    }).get('/borrowManage/waitAudit/getOneById', function*(){
        var $self = this;
        var EditId = $self.request.query;
        EditId.userToken = $self.cookies.get('token');
        yield (server().waitAuditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
            //编辑
    }).post('/borrowManage/waitAudit/editData', function*(){
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().waitAuditEidt(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitAudit/chargerAudit', function*(){//负责人审核人员
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().chargerAudit(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitAudit/listLendAudit', function*(){//总经办
        var $self = this;
        var EditId = $self.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().listLendAudit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitAudit/operateAdit', function*(){//运营部
        var $self = this;
        var EditId = $self.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().operateAdit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitAudit/congelByOperate', function*(){//运营部
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().congelByOperate(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitAudit/congelByCharger', function*(){//负责人冻结
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().congelByCharger(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitAudit/cancelCongel', function*(){//负责人取消冻结
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().cancelCongel(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAudit/list', function*(){//已审核
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().hasAuditList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAudit/count', function*(){
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().hasAuditCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/waitPayment/list', function*(){//等待付款
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().waitPaymentList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/waitPayment/count', function*(){
        var $self = this;
        var data = {userToken:$self.cookies.get('token')};
        yield (server().waitPaymentCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/waitPayment/listAccountCom', function*(){//获取付款来源
        var $self = this;
        var data = {userToken:$self.cookies.get('token')};
        yield (server().listAccountCom(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/waitPayment/editPay', function*(){
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().editPay(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitPayment/exportFile', function*(){//导出 等待付款
        var $self = this;
        var count = $self.request.query;
        var fileName = '等待付款'+'.xlsx';
        yield (fetch(config()['rurl']+`/applylend/v1/exportPayExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/borrowManage/affirmRecieve/list', function*(){//确认收款列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().affirmRecieveList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/affirmRecieve/count', function*(){//确认收款总数
        var $self = this;
        var countData = $self.request.query;
        countData.userToken = $self.cookies.get('token');
        yield (server().affirmRecieveCount(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/affirmRecieve/editPay', function*(){//确认收款编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().affirmRecieveEdit(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/borrowRecord/list', function*(){//借款记录列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().borrowRecordList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/borrowRecord/count', function*(){//借款记录总数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().borrowRecordCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/borrowRecord/editPay', function*(){//借款记录 还款编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().borrowRecordEdit(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/borrowRecord/EditSend', function*(){//借款记录 寄件编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().borrowRecordEditSend(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowRecord/exportFile', function*(){//导出 借款记录
        var $self = this;
        var count = $self.request.query;
        var fileName = '借款记录'+'.xlsx';
        yield (fetch(config()['rurl']+`/applylend/v1/exportBorrowExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/borrowRecord/upload', koaBody({multipart:true}),function *(next) {//上传文件 借款记录
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().borrowRecordUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowRecord/listFile', function*(){ //查看附件 借款记录
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().borrowRecordFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowRecord/download', function*(){//下载文件 借款记录
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/applylend/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/borrowRecord/delFile', koaBody({multipart:true}), function*(){//借款记录 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().borrowRecordDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/returnRecord/list', function*(){//还款记录列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().returnRecordList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/returnRecord/count', function*(){//还款记录总数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().returnRecordCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/returnRecord/editPay', function*(){//还款记录 还款编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().returnRecordEdit(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/returnRecord/exportFile', function*(){//导出 还款记录
        var $self = this;
        var count = $self.request.query;
        var fileName = '还款记录'+'.xlsx';
        yield (fetch(config()['rurl']+`/applylend/v1/exportReturnExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/borrowManage/businessCheck/list', function*(){//账务核对列表
       var $self = this;
       var page = this.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().businessCheckList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/businessCheck/count', function*(){//账务核对总数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().businessCheckCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/borrowManage/businessCheck/editPay', function*(){//账务核对 还款编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().businessCheckEdit(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/recieveTicket/list', function*(){//已收票记录列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().recieveTicketList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/recieveTicket/count', function*(){//已收票记录总数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().recieveTicketCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/recieveTicket/exportFile', function*(){//导出 已收票记录
        var $self = this;
        var count = $self.request.query;
        var fileName = '已收票记录'+'.xlsx';
        yield (fetch(config()['rurl']+`/applylend/v1/exportReceiveExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/borrowManage/hasAnalyze/list', function*(){//已审核或分析列表
       var $self = this;
       var page = this.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().hasAnalyzeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/count', function*(){//已审核或分析总数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().hasAnalyzeCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/collectLender', function*(){//汇总 地区
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().hasAnalyzeLender(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/allgetLenderList', function*(){//借款人 
        var $self = this;
        var data = {userToken:$self.cookies.get('token')};
        yield (server().allgetLenderList(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowManage/hasAnalyze/collectProjectGroup', function*(){//汇总 项目组
       var $self = this;
       var page = this.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().hasAnalyzeProjectGroup(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowManage/hasAnalyze/allgetPGroupListget', function*(){//项目组
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().allgetPGroupListget(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/collectArea', function*(){//汇总 地区
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().hasAnalyzeArea(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
               $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/allgetArea', function*(){//地区
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().allgetArea(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/collectProjectName', function*(){//汇总 项目名称
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().hasAnalyzeProjectName(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/allgetPNameList', function*(){//项目名称
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().allgetPNameList(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
               $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/hasAnalyze/bVoucher', function*(){//借款凭证
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().bVoucher(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowManage/returnRecord/rVoucher', function*(){//还款凭证
       var $self = this;
       var page = this.request.query;
       page.userToken = this.cookies.get('token');
        yield (server().rVoucher(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/listSetting', function*(){//设置权限列表
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
    })

    return router;
};
