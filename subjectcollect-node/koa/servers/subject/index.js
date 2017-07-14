var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
//获取所有一级科目
    this.subjectsOne= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listFirstSubject',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除科目汇总表
    this.subjectsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };

        return request(options);
    };
    //编辑科目汇总表
    this.subjectsEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录项目名称汇总
    this.subjectsAuditName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctRePname'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //一个科目汇总表
    this.subjectsId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/subject/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //一个科目汇总表
    this.countCourseCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/count`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //科目汇总表列表
    this.subjectsList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
    //汇总对比
    this.subjectsContrast= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/collectCompare?'+'months='+argvs.a+'&months='+ argvs.b,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目名称
    this.subjectsName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listProject',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录项目组汇总
    this.subjectsAuditAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctReGroup'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加科目汇总表
    this.subjectsAudit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有三级科目
    this.subjectsThree= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listTubByFirst'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有二级科目
    this.subjectsTwo= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listSubByFirst'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //科目汇总表列表总条数
    this.subjectsListAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //导出
    this.subjectsExport= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/exportExcel',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目组
    this.subjectsAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listGroup',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录科目汇总
    this.subjectsCheck= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctReSub'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录地区汇总
    this.subjectsArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctReArea'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有地区
    this.subjectsAreaAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listArea',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };   
    //获取所有地区 导出
    this.subjectsGetArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/area',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };   
    //菜单权限
    this.permissionAssignment = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //-----------------------------------权限设置-----------------------------------
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
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
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //下拉导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/setButtonPermission',//2017-06-12
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    return this;
}