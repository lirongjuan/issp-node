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
    //获取所有一级科目
    router.get('/subjectsOne/One', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().subjectsOne(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //删除科目汇总表
    }).get('/subjectsDelete/Delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().subjectsDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
        }));  
    //编辑科目汇总表
    }).post('/subjectsEdit/Edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().subjectsEdit(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //记账凭证记录项目名称汇总
    }).get('/projectSummary/AuditName', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsAuditName(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //一个科目汇总表
    }).get('/subjectsId/Id', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsId(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //分页
    }).get('/countCourseCollect/count', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().countCourseCollect(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //科目汇总表列表
    }).get('/subjectsList/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //汇总对比
    }).get('/subjectsContrast/Contrast', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsContrast(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //获取所有项目名称
    }).get('/subjectsName/Name', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().subjectsName(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //记账凭证记录项目组汇总
    }).get('/teamSummary/AuditAll', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsAuditAll(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //添加科目汇总表
    }).post('/subjectsAudit/Audit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().subjectsAudit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //获取所有三级科目
    }).get('/subjectsThree/Three', function*(){
        var $self = this;
        var page = this.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsThree(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //获取所有二级科目
    }).get('/subjectsTwo/Two', function*(){
        var $self = this;
        var page = this.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsTwo(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //科目汇总表列表总条数
    }).get('/subjectsListAll/ListAll', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsListAll(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //获取所有项目组
    }).get('/subjectsAll/All', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().subjectsAll(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //记账凭证记录科目汇总
    }).get('/subjectSummary/Check', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsCheck(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //记账凭证记录地区汇总
    }).get('/areasSummary/Area', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().subjectsArea(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //获取所有地区
    }).get('/subjectsAreaAll/AreaAll', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().subjectsAreaAll(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //获取所有地区 导出用
    }).get('/subjectsGetArea/getArea', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().subjectsGetArea(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    }).get('/permissionAssignment/permissionAssignment/:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().permissionAssignment(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            })); 
    }).get('/subjectsExport/Export', function*(){//导出
        var $self = this;
        var count = $self.request.query;
        yield (fetch(config()['rurl']+`/subjectcollect/v1/export${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
        //------------------------------------权限------------------------------------
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
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
    //下拉导航权限
    }).get('/siginmanage/sonPermission', function*(){ 
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
    })
    return router;
};
