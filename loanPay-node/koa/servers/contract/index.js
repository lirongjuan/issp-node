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
            uri : config()['rurl'] + '/moneyready/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/moneyready/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //资金准备菜单权限
    this.capitalPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/moneyready/v1/guidePermission?guideAddrStatus=`+argvs.name,
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
    //资金准备列表
    this.listCap = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/moneyready/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //资金准备总条数
    this.countCap = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/moneyready/v1/countSum',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //删除资金准备
    this.deleteCap = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/moneyready/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加资金准备
    this.addCap = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/moneyready/v1/save',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询资金准备
    this.getCap = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/moneyready/v1/moneyready/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑资金准备
    this.editCap = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/moneyready/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //获取所有付款来源
    this.getMoneyAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/listAccountCom`,
        };
        return request(options);
    };
    //------------------------------------------------------------
    //等待付款列表
    this.listWait = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/waitPays?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //等待付款总条数
    this.countWait = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/waitPayCount',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };

    //编辑等待付款
    this.Paywait = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/pay',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //---------------------------------------------------------------
    //已付款列表
    this.listPaid = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/pays?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //已付款总条数
    this.countPaid = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/payCount',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //根据id来查询基本信息
    this.getWait = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/findWait/${argvs.id}`,
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
            uri : config()['rurl'] + `/waitpay/v1/allAreas`,
        };
        return request(options);
    };


    //查询所有的部门
    this.getGroupAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/allProjectGroups`,
        };
        return request(options);
    };
    //地区汇总
    this.collectArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/areaCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //项目组汇总
    this.collectGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/projectGroupCount${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //资金准备与实际支付差异
    this.listSelect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/difference${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    return this;
};