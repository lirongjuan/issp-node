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
    //查询总记录数
    router.get('/moneyAll/all', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().moneyAll(token)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //新增资金流水
    }).post('/moneyAdd/add', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //删除资金流水
    }).get('/moneyDelete/delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().moneyDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
        }));
    //根据id查询资金流水
     }).get('/moneyId/id', function*(){
         var $self = this;
         var page = $self.request.query;
         page.userToken = $self.cookies.get('token');
         yield (server().moneyId(page)
             .then((parsedBody) =>{
             var responseText = JSON.parse(parsedBody);
             $self.body = responseText;
     }).catch((error) =>{
             $self.set('Content-Type','application/json;charset=utf-8');
         $self.body=error.error;
         console.error(error.error);
     }));
        //条件汇总
     }).post('/moneyConditionsAll/conditions', function*(){
         var $self = this;
         var EditId = this.request.body;
         EditId.userToken = $self.cookies.get('token');
         yield (server().moneyConditionsAll(EditId)
             .then((parsedBody) =>{
             var responseText = JSON.parse(parsedBody);
         $self.body = responseText;
     }).catch((error) =>{
             $self.set('Content-Type','application/json;charset=utf-8');
         $self.body=error.error;
         console.error(error.error);
     }));
    //编辑资金流水
    }).post('/moneyEdit/edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyEdit(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //月汇总
    }).get('/moneyMonthAll/month', function*(){
        var $self = this;
        var monthCollect = $self.request.query;
        monthCollect.userToken = $self.cookies.get('token');
        yield (server().moneyMonthAll(monthCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //列表分页查询
     }).get('/moneyList/list', function*(){
       var $self = this;
       var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().moneyList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区分析
    }).post('/moneyArea/Area', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyArea(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //项目分析
    }).post('/moneyProject/Project', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyProject(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //项目组分析
    }).post('/moneyGroup/Group', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyGroup(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区列表
    }).get('/areas/area', function*(){
        var $self = this;
        var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().areas(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //项目组列表
    }).get('/projects/project', function*(){
        var $self = this;
        var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().projects(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //项目名称列表
    }).get('/projectGroups/projectGroup', function*(){
        var $self = this;
        var page = $self.request.query;
       page.userToken = $self.cookies.get('token');
        yield (server().projectGroups(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //分页
    }).get('/countRecord', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().countRecord(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //下载文件
    }).get('/moneyDownloadFile/downloadFile', function*(){
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/fundrecord/v1/download${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    //文件附件列表
    }).get('/moneyListFile/listFile', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().moneyListFile(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/moneyDeleteFile/deleteFile', koaBody({multipart:true}), function*(){//合同基本信息 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().moneyDeleteFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/moneyUploadFile/uploadFile', koaBody({multipart:true}),function *(next) {//上传文件 
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().moneyUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/moneyPermission/moneyPermission/:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().moneyPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    //-------------------------------------权限-------------------------------------
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
