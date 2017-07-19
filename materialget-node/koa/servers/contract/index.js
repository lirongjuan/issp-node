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
            uri : config()['rurl'] + '/projectgroupreceive/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/projectgroupreceive/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //审核表菜单权限
    this.CollarPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //项目组物资归还
    this.projectPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectgroupreceive/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //删除物资领用信息
    this.deleteCollar = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //物资领用列表
    this.listCollar = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //物资领用总条数
    this.countCollar = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialreceive/v1/count',
        };
        return request(options);
    };
    //添加物资领用信息
    this.addCollar = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/materialreceive/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询物资领用信息
    this.getCollar = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/materialreceive/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑物资领用信息
    this.editInfo = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/materialreceive/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //审核物资领用信息
    this.auditInfo = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/materialreceive/v1/audit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加领用完成信息
    this.receiveoverInfo = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/materialreceive/v1/receiveover',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加归还信息
    this.materialreturnInfo = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/materialreceive/v1/materialreturn',
            headers:{
                userToken:argvs.token
            },
            form:argvs
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
    //项目组物资领用列表
    this.listProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectgroupreceive/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目组物资总条数
    this.countProject = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectgroupreceive/v1/count',
        };
        return request(options);
    };
    //查询所有的用户
    this.getUserAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/allGetPerson`,
        };
        return request(options);
    };
    //查询所有的地区
    this.getAreaAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/allArea`,
        };
        return request(options);
    };
    //查询所有的项目组
    this.getgroupAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/allOrageDepartment`,
        };
        return request(options);
    };
    //查询所有的入库编号
    this.allGetNo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialreceive/v1/allGetNo`,
        };
        return request(options);
    };
    //删除项目组物资领用信息
    this.deleteProject = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/projectgroupreceive/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加物资领用信息
    this.addProject = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/projectgroupreceive/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询项目组物资领用信息
    this.getProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectgroupreceive/v1/groupreceive/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑项目组物资领用信息
    this.editProject = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/projectgroupreceive/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //归还项目组物资
    this.reastProject = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/projectgroupreceive/v1/returnmaterial',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};