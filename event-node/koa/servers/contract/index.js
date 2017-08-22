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
            uri : config()['rurl'] + '/father/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //下拉导航权限
    this.contractNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/father/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //所有事件菜单权限
    this.allPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //等待付款菜单权限
    this.waitPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //setting权限设置
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
    //事件列表
    this.listAff = function(argvs){
        argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/event/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //事件总条数
    this.countAff = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/event/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };

    //------------------------------------------------------------
    //所有列表
    this.listAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //等待付款总条数
    this.countAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/father/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };


    //查询所有的地区
    this.getAreaAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/findArea`,
        };
        return request(options);
    };


    //总事件汇总
    this.collectAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/zongCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //已处理事件汇总
    this.collecthandle = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/haveDealCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //未处理事件汇总
    this.collectundreat = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/noDealCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //逾期未处理事件汇总
    this.collectover = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/passNoDealCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //分类汇总
    this.collecClass = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/father/v1/classifyCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //设置时间列表
    this.listTime = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/timeset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //冻结
    this.congealTime = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/timeset/v1/freeze${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //解冻
    this.thawTime = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/timeset/v1/thaw${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //根据id来查询时间设置
    this.getTime = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/timeset/v1/timeSet${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑时间设置
    this.editTime = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/timeset/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //通过日历查看待办事件
    this.selectAff = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/event/v1/findByMonth${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    return this;
};