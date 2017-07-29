var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
     //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherexpenses/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/otherexpenses/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //离职信息 功能菜单权限
    this.expensesPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表 其他费用
   this.expensesList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/maps?limit=10&page=${argvs.page}`,
             headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.expensesCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherexpenses/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 
    this.expensesAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/save`,
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.expensesById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/findById/${argvs.id}`,
            form : argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 
    this.expensesEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.expensesDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/delete/${argvs.id}`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //地区汇总
   this.areaList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/area?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //项目组汇总
    this.projectgroupList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/project?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //类型汇总
    this.projectTypeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/type?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //项目名称汇总
    this.projectNameList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/name?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //设置权限
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers: {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.countSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count'
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            form:argvs,
            headers: {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };

    return this;
};