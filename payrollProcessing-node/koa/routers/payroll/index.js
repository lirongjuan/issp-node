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

    // --------------------------已确认薪资------------------
    //第二次付款
    router.get('/confirmedSecond/Second', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().confirmedSecond(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //第一次付款
    }).get('/confirmedFirst/First', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().confirmedFirst(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //列表分页查询
    }).get('/confirmedList/List', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().confirmedList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    }).get('/countConfirmed/count', function*(){//获取项目合同基本信息总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().countConfirmed(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //-------------------------------发票管理业务接口-------------------------------
    //查询总记录数
    }).get('/invoicesubmitCount/Count', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().invoicesubmitCount(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //新增上交发票
    }).post('/invoicesubmitAdd/Add', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().invoicesubmitAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //删除上交发票
    }).get('/invoicesubmitDelete/Delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().invoicesubmitDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
        }));  
    //列表分页查询
    }).get('/invoicesubmitList/List', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().invoicesubmitList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //编辑上交发票
    }).post('/invoicesubmitEdit/Edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().invoicesubmitEdit(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //根据id查询上交发票
    }).get('/invoicesubmitFind/Find', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().invoicesubmitFind(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));

    //-------------------------已付薪资-------------------------
    //第二次收款确认
    }).get('/payedSecond/Second', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().payedSecond(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //第一次收款确认
    }).get('/payedFirst/First', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().payedFirst(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //列表
    }).get('/payedList/List', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().payedList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    }).get('/countPayed/count', function*(){//获取总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().countPayed(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //----------------------------薪资核算确认----------------------------
    //删除文件夹
    }).post('/salaryconfirmDelfile/delfile', koaBody({multipart:true}), function*(){
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmDelfile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //上传文件
    }).post('/salaryconfirmUpload/upload',koaBody({multipart:true}),function *(next){
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().salaryconfirmUpload(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //文件下载
    }).get('/salaryconfirmDownload/download', function*(){
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/salaryconfirm/v1/download${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    //文件附件列表
    }).get('/salaryconfirmFiles/files', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmFiles(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //导入
    }).post('/salaryconfirmLead/lead', koaBody({multipart:true}),function *(next) {
        var $self = this;
        var fileData = $self.request.body;
        fileData.userToken = $self.cookies.get("token");
        yield (server().salaryconfirmLead(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //         导出
        }).get('/salaryconfirmExport/export', function*(){//导出 
        var $self = this;
        var count = $self.request.query;
        yield (fetch(config()['rurl']+`/salaryconfirm/v1/export${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    //导入模板下载
    }).get('/salaryconfirmImport/templateExport', function*(){
        var $self = this;
        var fileName = '项目承包洽谈.xlsx';
        yield (fetch(config()['rurl']+`/salaryconfirm/v1/module`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    //删除薪资核算确认
    }).get('/salaryconfirmDelete/Delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().salaryconfirmDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
        }));  
    //查询总记录数
    }).get('/countSalaryconfirm/count', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().countSalaryconfirm(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区列表查询
    }).get('/salaryconfirmAreas/Areas', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmAreas(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //新增薪资核算确认
    }).post('/salaryconfirmAdd/Add', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));

    //编辑薪资核算确认
    }).post('/salaryconfirmEdit/Edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmEdit(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //列表分页查询
    }).get('/salaryconfirmList/List', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //根据id查询薪资核算确认
    }).get('/salaryconfirmFind/Find', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmFind(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //根据部门查询薪资核算确认
    }).get('/salaryconfirmDepartments/Departments', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmDepartments(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //根据职位查询薪资核算确认
    }).get('/salaryconfirPositions/Positions', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirPositions(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //根据用户查询薪资核算确认
    }).get('/salaryconfirmUsers/Users', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().salaryconfirmUsers(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //导入
    // }).post('/salaryconfirmImport/Import', function*(){
    //     var $self = this;
    //     var EditId = this.request.body;
    //     EditId.userToken = $self.cookies.get('token');
    //     yield (server().salaryconfirmImport(EditId)
    //         .then((parsedBody) =>{
    //         var responseText = JSON.parse(parsedBody);
    //         $self.body = responseText;
    //     }).catch((error) =>{
    //         $self.set('Content-Type','application/json;charset=utf-8');
    //         $self.body=error.error;
    //         console.error(error.error);
    //     }));
        //导出
    // }).get('/salaryconfirmExport/Export', function*(){
    //     var $self = this;
    //     var page = $self.request.query;
    //     page.userToken = $self.cookies.get('token');
    //     yield (server().salaryconfirmExport(page)
    //         .then((parsedBody) =>{
    //         var responseText = JSON.parse(parsedBody);
    //         $self.body = responseText;
    //     }).catch((error) =>{
    //         $self.set('Content-Type','application/json;charset=utf-8');
    //         $self.body=error.error;
    //         console.error(error.error);
    //     }));
    //----------------------------------------汇总分析----------------------------------------
    //部门列表查询
    }).get('/departmentList/departmentList', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().departmentList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //部门汇总
    }).get('/departmentSummary/departmentSummary', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().departmentSummary(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区列表查询
    }).get('/areasList/areasList', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().areasList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //部门分析
    }).get('/departmentAnalyze/departmentAnalyze', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().departmentAnalyze(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //个人汇总
    }).get('/oneSummary/one', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().oneSummary(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区分析
    }).get('/areasAnalyze/areas', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().areasAnalyze(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //个人分析
    }).get('/oneAnalyze/oneAnalyze', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().oneAnalyze(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //用户列表查询
    }).get('/userList/userList', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().userList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区汇总
    }).get('/areasSummary/areasSummary', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().areasSummary(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //---------------------------------------待确认薪资---------------------------------------
    }).get('/countWaitconfirm/count', function*(){//获取总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().countWaitconfirm(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //确认薪资
    }).post('/waitconfirmConfirm/Confirm', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().waitconfirmConfirm(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //列表
    }).get('/waitconfirmList/List', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().waitconfirmList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
        //-----------------------------设置权限-----------------------------
    }).get('/listSetting', function*(){
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
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
            //-------------------------------------------------各种权限-------------------------------------------------
    }).get('/siginmanage/setButtonPermission', function*(){ //设置导航权限
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
    }).get('/siginmanage/sonPermission', function*(){ //导航权限
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
    // }).get('/confirmedPermission/guidePermission/:guideAddrStatus', function*(){ //收款确认菜单权限
    //     var $self = this;
    //     var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
    //     yield (server().confirmedPermission(page)
    //         .then((parsedBody) =>{
    //             var responseText = JSON.parse(parsedBody);
    //             $self.body = responseText;
    //         }).catch((error) =>{
    //             $self.set('Content-Type','application/json;charset=utf-8');
    //             $self.body=error.error;
    //         }));
    }).get('/invoicesubmitPermission/guidePermission/:guideAddrStatus', function*(){ //上交发票菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().invoicesubmitPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    // }).get('/payedPermission/guidePermission/:guideAddrStatus', function*(){ //收款确认菜单权限
    //     var $self = this;
    //     var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
    //     yield (server().payedPermission(page)
    //         .then((parsedBody) =>{
    //             var responseText = JSON.parse(parsedBody);
    //             $self.body = responseText;
    //         }).catch((error) =>{
    //             $self.set('Content-Type','application/json;charset=utf-8');
    //             $self.body=error.error;
    //         }));
    }).get('/salaryconfirmPermission/guidePermission/:guideAddrStatus', function*(){ //薪资核算菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().salaryconfirmPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/summaryPermission/guidePermission/:guideAddrStatus', function*(){ //汇总菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().summaryPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    // }).get('/waitconfirmPermission/guidePermission/:guideAddrStatus', function*(){ //确认薪资菜单权限
    //     var $self = this;
    //     var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
    //     yield (server().waitconfirmPermission(page)
    //         .then((parsedBody) =>{
    //             var responseText = JSON.parse(parsedBody);
    //             $self.body = responseText;
    //         }).catch((error) =>{
    //             $self.set('Content-Type','application/json;charset=utf-8');
    //             $self.body=error.error;
    //         }));
    })
    return router;
};
