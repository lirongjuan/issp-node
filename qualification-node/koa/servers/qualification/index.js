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
            uri : config()['rurl'] + '/qualificationscollect/v1/setButtonPermission', //2017-06-12
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
            uri : config()['rurl'] + '/qualificationscollect/v1/sonPermission', //2017-06-10
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //通信资质管理信息菜单权限
    this.progressPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/qualificationscollect/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //权限设置
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }

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
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
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
    this.listProgress = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countProgress = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/qualificationscollect/v1/getTotal',
        };
        return request(options);
    };
    this.addProgress = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] +'/qualificationscollect/v1/save',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.getProgress = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/findById/${argvs.id}`
        };
        return request(options);
    };
    this.editProgress = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.deleteProgress = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };
    // 上传附件
    this.summaryUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/qualificationscollect/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 查看附件
    this.summaryEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/qualificationscollect/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除文件
    this.delSum = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/qualificationscollect/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    this.findByFilter = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/findByFilter?qualifications=${encodeURIComponent(argvs.qualifications)}&company=${encodeURIComponent(argvs.company)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    return this;
};