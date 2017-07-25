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
            uri : config()['rurl'] + '/materialtransfer/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/materialtransfer/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //物资入库菜单权限
    this.movePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/guidePermission?guideAddrStatus=`+argvs.name,
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
    //物资调动列表
    this.listMove = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //物资调动总条数
    this.countMove = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialtransfer/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //删除物资调动信息
    this.deleteMove = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加物资调动信息
    this.addMove = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/materialtransfer/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询物资调动信息
    this.getMove = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/materialtransfer/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑物资调动信息
    this.editMove = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/materialtransfer/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //项目经理审核
    this.aduitMove = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/pmAudit/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //福利模块负责人确认调配成功
    this.confirmMove = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/wealModConfirm/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //福利模块负责人审核
    this.verifyMove = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/wealModAudit/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //查询所有的地区
    this.getAreaAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/allArea`,
        };
        return request(options);
    };
    //查询所有的用户
    this.getUserAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/allGetPerson`,
        };
        return request(options);
    };
    //查询所有的入库编号
    this.GetNo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialtransfer/v1/allGetNo`,
        };
        return request(options);
    };
    return this;
};