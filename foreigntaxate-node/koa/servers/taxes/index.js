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
            uri : config()['rurl'] + '/taxmanagement/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/taxmanagement/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //税金管理 功能菜单权限
    this.tMPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表 税金管理
   this.taxesList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.taxesCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/taxmanagement/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.taxesAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/add`,
            form:argvs,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.taxesById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/tax/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.taxesEidt = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/edit`,
            form:argvs,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.taxesDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/delete/${argvs.id}`,
            headers: {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //查看功能 
    this.viewList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/list?company=${encodeURIComponent(argvs.company)}&month=${argvs.month}&taxType=${encodeURIComponent(argvs.taxType)}`,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有公司
    this.getCompany= function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/company`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //汇总公司
    this.companyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/collect?company=${encodeURIComponent(argvs.company)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //税金管理 上传附件
    this.taxmanagementUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/taxmanagement/v1/uploadFile/${argvs.fields.id}`,
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
    ///税金管理 查看附件
    this.taxmanagementSeeFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //税金管理 删除文件
    this.taxmanagementDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //对外 功能菜单权限
    this.accountPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表 对外
   this.accountList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.accountCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/accountinfomanagement/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.accountAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/add`,
            form:argvs,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.accountById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/account/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.accountEidt = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.accountDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/delete/${argvs.id}`,
            headers:{
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //外账管理 上传附件
    this.accountUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/accountinfomanagement/v1/uploadFile/${argvs.fields.id}`,
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
    ///外账管理 查看附件
    this.accountSeeFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //外账管理 删除文件
    this.accountDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };

    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list`,
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
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};