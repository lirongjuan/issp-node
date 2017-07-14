var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    //查询总记录数 
    this.countRecord= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //新增资金流水
    this.moneyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/add',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //删除资金流水
    this.moneyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //根据id查询资金流水
    this.moneyId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/find/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //条件汇总
    this.moneyConditionsAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/condition'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //编辑资金流水
    this.moneyEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //月汇总
    this.moneyMonthAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/month'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
            
        };
        return request(options);
    };
    //列表分页查询 
    this.moneyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  
    //地区分析
    this.moneyArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/area'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //项目分析
    this.moneyProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/project'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    }; 
    //项目组分析
    this.moneyGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/group'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  
    //地区列表
    this.areas = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/areas',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  
    //项目组列表
    this.projectGroups= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/groups',
            headers : {
                userToken : argvs.token
            }
        };console.log(argvs)
        return request(options);
    };  
    //项目名称列表
    this.projects= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/projects',
            headers : {
                userToken : argvs.token
            }
        };
        
        return request(options);
    }; 
        //上传附件
    this.moneyUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/fundrecord/v1/upload/${argvs.fields.id}`,
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
       //删除文件夹
    this.moneyDeleteFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/delfile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
//文件附件列表    
   this.moneyListFile= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/files/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //菜单权限
    this.moneyPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //------------------------------------权限设置------------------------------------
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
            uri : config()['rurl'] + '/fundrecord/v1/sonPermission',//2017-06-10
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
            uri : config()['rurl'] + '/fundrecord/v1/setButtonPermission',//2017-06-12
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    return this;
}