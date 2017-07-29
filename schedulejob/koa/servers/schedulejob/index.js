var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    
    //列表 任务调度
    this.schedulejobList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //分页 任务调度
    this.schedulejobCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 任务调度
    this.schedulejobAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 任务调度
    this.schedulejobDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 任务调度
    this.schedulejobEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob/v1/edit',
            headers:{
                userToken : argvs.userToken
            },
            form:argvs,
        };
        return request(options);
    };
   //编辑id 任务调度
    this.schedulejobById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob/v1/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //开始或关闭 任务调度
    this.schedulejobEnable = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/schedulejob/v1/enable/${argvs.id}/${argvs.enable}/`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的组列表
    this.schedulejobAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/all',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    
    //列表 任务调度组
    this.groupList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //分页 任务调度组
    this.groupCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 任务调度组
    this.groupAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 任务调度组
    this.groupDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 任务调度组
    this.groupEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/edit',
            headers:{
                userToken : argvs.userToken
            },
            form:argvs,
        };
        return request(options);
    };
   //编辑id 任务调度组
    this.groupById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/schedulejob-group/v1/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //开始或关闭 任务调度组
    this.groupEnable = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/schedulejob-group/v1/enable/${argvs.id}/${argvs.enable}/`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    
    return this;
};