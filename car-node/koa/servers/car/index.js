var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/finance/v1/setButtonPermission',//2017-06-12
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //下拉导航权限
    this.carNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/finance/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //汇总信息菜单权限
    this.summaryPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/finance/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //setting设置列表
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
    this.listWeek = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/week'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listMonth = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/month'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/areacollect'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.areaAna = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/areaanalyze'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/groupcollect'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.proAnalysis = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/groupanalyze'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listDriver = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/drivercollect'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.driAnalysis = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/driveranalyze'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listUsecar = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/dispatchcarinfo/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countRecord = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/dispatchcarinfo/v1/count',
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
    //解冻出车记录
    this.thawUser = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchcarinfo/v1/unfreeze/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //冻结出车记录
    this.congealRecord = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `dispatchcarinfo/v1/freeze/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //根据id来查询出车记录信息
    this.getRecord = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchcarinfo/v1/find/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
};