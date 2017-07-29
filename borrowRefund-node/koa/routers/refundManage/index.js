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
    
    //列表 申请报销 
    router.get('/borrowRefund/refundManage/:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().refundManagePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowRefund/analyze/:guideAddrStatus', function*(){ //菜单权限 报销人员
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().analyzePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/borrowRefund/finoddInfor/:guideAddrStatus', function*(){ //菜单权限 报销人员
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().finoddInforPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/applyRecord/list', function*(){
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().applyRecordList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/applyRecord/count', function*(){
        var $self = this;
        var count = $self.request.query; 
       count.userToken = $self.cookies.get('token');
        yield (server().applyRecordCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/applyRecord/allSubject', function*(){
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
    }).post('/refundManage/applyRecord/allPlains', function*(){//获取所有说明 
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
    }).post('/refundManage/applyRecord/FirstAndSecond', function*(){//获取一、二级科目
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
    }).post('/refundManage/applyRecord/add', function*(){//添加 报销申请
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
    }).get('/refundManage/applyRecord/getOneById', function*(){ //编辑ID
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
    }).post('/refundManage/applyRecord/editData', function*(){ //编辑
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
    }).post('/refundManage/applyRecord/delete', function*(){//删除
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
    }).post('/refundManage/applyRecord/auditDetail', function*(){//审核详情
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
    }).post('/applyRecord/upload', koaBody({multipart:true}),function *(next) {//上传文件 报销
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().applyRecordUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/applyRecord/listFile', function*(){ //查看附件 报销
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().applyRecordFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/applyRecord/download', function*(){//下载文件 报销
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/reimburserecord/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/applyRecord/delFile', koaBody({multipart:true}), function*(){//借款记录 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().applyRecordDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/refundErr/list', function*(){//报销单有误 获取列表
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
    }).get('/refundManage/refundErr/count', function*(){//报销单有误 获取总条数
        var $self = this;
        var count = $self.request.query;
         count.userToken = $self.cookies.get('token');
        yield (server().applyErrCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/refundErr/getOneById', function*(){//报销单有误 获取id
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
    }).post('/refundManage/refundErr/editData', function*(){//报销单有误 编辑
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
    }).get('/refundManage/rwaitAudit/list', function*(){//等待审核记录 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().rwaitAuditList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rwaitAudit/count', function*(){//等待审核记录 获取总条数
        var $self = this;
       var data = $self.request.query;
       data.userToken = $self.cookies.get('token');
        yield (server().rwaitAuditCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/refundManage/rwaitAudit/chargerAudit', function*(){//负责人审核
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
    }).post('/refundManage/rwaitAudit/congel', function*(){//负责人冻结
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().congel(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/rwaitAudit/cancelCongel', function*(){//负责人取消冻结
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
    }).get('/refundManage/finoddInfor/list', function*(){//报销单号管理 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().finoddinforList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/finoddInfor/count', function*(){//报销单号管理 获取总条数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().finoddinforCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/refundManage/finoddInfor/add', function*(){//添加 报销单号管理
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().finoddInforAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/finoddInfor/delete', function*(){//添加 报销单号管理
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().finoddInforDelete(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/finoddInfor/congel', function*(){//冻结
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().finoddInforCongel(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/finoddInfor/cancelCongel', function*(){//取消冻结
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().finoddInforCancelCongel(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rhasAudit/list', function*(){//已审核 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().rhasAuditList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rhasAudit/count', function*(){//已审核 获取总条数
        var $self = this;
        var data = $self.request.query;
        data.userToken = $self.cookies.get('token');
        yield (server().rhasAuditCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/refundManage/rhasAudit/chargerAudit', function*(){//已审核 分析
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().rhasAuditAudit(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/rhasAudit/congel', function*(){//申请冻结
        var $self = this;
        var congel = $self.request.body;
        congel.userToken = $self.cookies.get('token');
        yield (server().rhasAuditCongel(congel)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rhasAnalyze/list', function*(){//已分析 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().rhasAnalyzeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rhasAnalyze/count', function*(){//已分析 获取总条数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().rhasAnalyzeCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/rbusinessCheck/list', function*(){//帐务核对 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().rbusinessCheckList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rbusinessCheck/count', function*(){//帐务核对 获取总条数
        var $self = this;
        var data = $self.request.query;
        data.userToken = $self.cookies.get('token');
        yield (server().rbusinessCheckCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/refundManage/rbusinessCheck/editData', function*(){ //编辑
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().rbusinessCheckEidt(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rwaitPayment/list', function*(){//等待付款 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().rwaitPaymentList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rwaitPayment/count', function*(){//等待付款 获取总条数
        var $self = this;
        var data = $self.request.query;
        data.userToken = $self.cookies.get('token');
        yield (server().rwaitPaymentCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/refundManage/rwaitPayment/editPay', function*(){ //付款
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().rwaitPaymentPay(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/rwaitPayment/exportFile', function*(){//导出 等待付款
        var $self = this;
        var count = $self.request.query;
        var fileName = '等待付款'+'.xlsx';
        yield (fetch(config()['rurl']+`/reimburserecord/v1/exportPay${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/refundManage/rwaitPayment/PredictPay', function*(){ //付款
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().predictPay(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/listFinoddinfor', function*(){ //获取所有的报销单号
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().listFinoddinfor(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/hasPay/list', function*(){//已经付款 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().hasPayList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/hasPay/count', function*(){//已经付款 获取总条数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().hasPayCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/hasPay/bVoucher', function*(){//已经付款 生成记账凭证
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
    }).get('/refundManage/hasPay/listUser', function*(){//已经付款 获取所有报销人
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().listUser(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/hasPay/listFirstSubject', function*(){//已经付款 获取所有一级科目
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().listFirstSubject(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/hasPay/listArea', function*(){//已经付款 获取地区
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().listArea(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/hasPay/listProject', function*(){//已经付款 获取项目名称
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().listProject(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/hasPay/reimer', function*(){//汇总 报销人
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().collectReimer(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/hasPay/collectFirstSubject', function*(){//汇总 一级科目
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().collectFirstSubject(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/borrowRecord/hasPayExport', function*(){//导出 已经付款
        var $self = this;
        var count = $self.request.query;
        var fileName = '已经付款'+'.xlsx';
        yield (fetch(config()['rurl']+`/reimburserecord/v1/exportHasPay${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/refundManage/hasPay/collectArea', function*(){//汇总 地区
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().collectArea(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/hasPay/collectProjectName', function*(){//汇总 项目名称
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().collectProjectName(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/analyze/list', function*(){//报销分析权限 获取列表
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().analyzeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/analyze/count', function*(){//报销分析权限 获取总条数
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().analyzeCount(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/refundManage/analyze/allLisisor', function*(){//报销分析权限 所有报销分析人员
        var $self = this;
        var data = {userToken:$self.cookies.get('token')}
        yield (server().allLisisor(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/refundManage/analyze/add', function*(){//添加 报销分析权限
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().analyzeAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/refundManage/analyze/getOneById', function*(){ //编辑ID 报销分析权限
        var $self = this;
        var EditId = $self.request.query;
        EditId.userToken = $self.cookies.get('token');
        yield (server().analyzeById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/analyze/editData', function*(){ //编辑 报销分析权限
        var $self = this;
        var EditData = $self.request.body;
        EditData.userToken = $self.cookies.get('token');
        yield (server().analyzeEidt(EditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/refundManage/analyze/delete', function*(){//删除 报销分析权限
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().analyzeDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })

    return router;
};
