var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/setButtonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    this.competetitorPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/competitor/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
    this.companycapbaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //分页
    this.countBaseInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加竞争对手
    this.companyAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.companyAbilityDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑竞争对手
    this.putCompetitor = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/edit',
            headers:{
                userToken : argvs.userToken
            },
            form:argvs,
        };
        return request(options);
    };
   //编辑id
    this.companyEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/find/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //竞争对手结构信息
    this.organizeAdd = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/edit',
            form : argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //竞争对手 上传附件
    this.competeUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/competitor/v1/upload/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //竞争对手 查看附件
    this.seeFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/competitor/v1/files/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //竞争对手 删除文件
    this.delFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/competitor/v1/delfile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //项目签订与立项 导入
    this.competeImport = function(argvs){
        var options = {
            url: config()['rurl']+'/competitor/v1/lead',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
      //邮件发送汇总
    this.emailPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    this.collectemaillist= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
     //分页
    this.emailCountInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结
    this.EmailCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/freeze/' + argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //解冻
    this.competitorBreakfreeze = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/breakfreeze/' + argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.emailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加邮件
    this.emailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/add',
            form:argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.emailCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/total',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

    this.allAreas= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/areas',
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.emailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/edit',
            form : argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.fourEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/find/'+argvs.id,
            form : argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};