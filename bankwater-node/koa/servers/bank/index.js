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
            uri : config()['rurl'] + '/bankaccountinfo/v1/setButtonPermission',//2017-06-12
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
            uri : config()['rurl'] + '/bankaccountinfo/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //银行流水业务菜单权限
    this.bankrecordPermission = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bankrecord/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //账号信息菜单权限
    this.InfoPermission = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bankaccountinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //汇总信息菜单信息
    this.collectPermission = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listInfo = function(argvs){
        var options = {
            method :'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/bankaccountinfo/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                usertoken:argvs.token
            },
        };
        return request(options);
    };
    this.countInfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/bankaccountinfo/v1/count',
        };
        return request(options);
    };
    this.collectlistInfo = function(argvs){//汇总
         var options = {
             method :'POST',
             timeout : 3000,/*bankrecord/v1/analyze   collect*/
             uri : config()['rurl'] +`/collect/v1/collect`,
             headers:{
                 usertoken:argvs.token
             },
             form:argvs
         };
         return request(options);
     };

    this.analyselistInfo = function(argvs){//分析
        var options = {
            method :'POST',
            timeout : 3000,
            uri : config()['rurl'] +`/collect/v1/analyze`,
            headers:{
                usertoken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };

    this.constrastlistInfo = function(argvs){//对比
        var options = {
            method :'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/collect/v1/compare?year=${argvs.year}&month=${argvs.month}`,
            headers:{
                usertoken:argvs.token
            },
        };
        return request(options);
    };
    this.addInfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] +'/bankaccountinfo/v1/add',
            headers:{
                usertoken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.getInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/bankaccountinfo/v1/find/${argvs.id}`,
            headers:{
                usertoken:argvs.token
            },
        };
        return request(options);
    };
    this.editData = function(argvs){
        var options = {
            method : 'PUT',
            timeout: 3000,
            uri :config()['rurl'] +'/bankaccountinfo/v1/edit',
            headers:{
                usertoken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.delInfo = function(argvs){
        var options = {
            method : 'DELETE',
            timeout: 3000,
            uri : config()['rurl'] +`/bankaccountinfo/v1/delete/${argvs.id}`,
            headers:{
                usertoken:argvs.token
            },
        };
        return request(options);
    };
    this.listaccount = function(){
        var options = {
            method : 'GET',
            timeout: 3000,
            uri : config()['rurl'] +'/bankrecord/v1/accounts?_includes=id,name',
        };
        return request(options);
    };
    this.bankself = function(argvs){
        var options = {
            method : 'GET',
            timeout: 3000,
            uri : config()['rurl'] +`/bankrecord/v1/find/${argvs.id}`,
        };
        return request(options);
    };
    this.collectCount=function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/bankrecord/v1/count`,
        };
        return request(options);
    };
    this.listBankbill = function(argvs){

        var options = {
            method :'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/bankrecord/v1/list?limit=10&page=${argvs.page}&accountId=${argvs.accountId}`,
            headers:{
                usertoken:argvs.token
            },
        };
        return request(options);
    };
    this.delBankbill = function(argvs){
        var options = {
            method : 'DELETE',
            timeout: 3000,
            uri : config()['rurl'] +`/bankrecord/v1/delete/${argvs.id}`,
            headers:{
                usertoken:argvs.token
            },
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
    //导入
    this.bankbillImport = function(argvs){
        var options = {
            url: config()['rurl']+`/bankrecord/v1/upload${urlEncode(JSON.parse(argvs.fields.vm),true)}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };

        console.log(config()['rurl']+`/bankrecord/v1/upload${urlEncode(JSON.parse(argvs.fields.vm),true)}`)
        return request(options);

    };
    return this;

};