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
            uri : config()['rurl'] + '/inventory/v1/setButtonPermission',//2017-06-12 模块设置导航权限
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //下拉导航权限
    this.dropDownNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/inventory/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-13
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
    this.inventoryList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/list${urlEncode(argvs,true)}`,// 2017-07-07
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有编号
    this.getAllNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/allstockEncoding`,// 2017-07-14
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取查找总记录数
    this.getInventoryTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/count`,// 2017-07-15
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取盘点
    this.getInventory = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/inventory`,// 2017-07-19
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取盘点id
    this.findInventId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/inventoryOne/${argvs.id}`,// 2017-07-19
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //盘点记录菜单功能权限
    this.reGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //盘点记录查找总记录数
    this.getRecordTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/count`,// 2017-07-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //盘点记录列表
    this.recordList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/list${urlEncode(argvs,true)}`,// 2017-07-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //地区汇总
    this.recordArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/areaCount${urlEncode(argvs,true)}`,// 2017-07-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //部门汇总
    this.recordDep = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/projectGroupCount${urlEncode(argvs,true)}`,// 2017-07-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资名称汇总
    this.recordMat = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/materialNameCount${urlEncode(argvs,true)}`,// 2017-07-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //状态汇总
    this.recordState = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/stateCount${urlEncode(argvs,true)}`,// 2017-07-21
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
   /* //获取excel
    this.inExcel = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/export${urlEncode(argvs,true)}`,// 2017-07-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };*/
    return this;
};