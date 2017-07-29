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
            uri : config()['rurl'] + '/marketservesummary/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/marketservesummary/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待 功能菜单权限
    this.marketservePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
   this.marketserveBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取数目
    this.countBaseInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加市场招待申请
    this.addMarketserveapply = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/add',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加客户信息
    this.addCustomerinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/addCustomerInfo',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id
     this.marketserveEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/marketserveapply/'+argvs.id,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑市场招待申请
    this.marketserveEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/edit',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.marketserveapplyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 资金模块意见
    this.marketserveOpinionEidt1 = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/fundModuleOpinion/'+argvs.id,
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 决策层审核意见
    this.executiveEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/executiveOpinion/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待申请 上传附件
    this.marketUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/marketserveapply/v1/uploadFile/${argvs.fields.id}`,
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
    ///市场招待申请 查看附件
    this.marketSeeFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //市场招待申请 删除文件
    this.marketDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //市场招待申请 导入
    this.marketImport = function(argvs){
        var options = {
            url: config()['rurl']+'/marketserveapply/v1/importExcel',
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
     //所有的地區 添加市场招待申请
    this.marketAllArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/findApplyAreas',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待汇总
    this.summaryPermission = function(argvs){//導航菜單權限
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketservesummary/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     this.summarylist= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/list?limit=10&page='+argvs.page,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //总数
    this.summaryCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/count',
             headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结
     this.summaryCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/marketservesummary/v1/congeal/${argvs.id}`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //解冻
    this.summaryBreakfreeze = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/marketservesummary/v1/thaw/${argvs.id}`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.summaryDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待汇总 添加  
     this.summarylAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/add',
            form:argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待汇总 编辑id
    this.getSummaryId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/marketservesummary/' + argvs.id,
            form:argvs,
        };
        return request(options);
    }; 
   //市场招待汇总 编辑
    this.PutSummarylEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/edit',
            form:argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待汇总 获取所有的项目组
    this.allProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketservesummary/v1/findProjectName?type=${argvs.type}`,
            headers:{ 
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待汇总 汇总
    this.summarize = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/summarize',
            form:argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待记录 權限
    this.servereCordPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserverecord/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场招待记录 列表
   this.servereCordBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取数目
    this.servereCordCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/count'
        };
        return request(options);
    };
    //添加市场招待记录
    this.addservereCordapply = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/add',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 资金模块意见
    this.marketserveOpinionEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/fundmodule',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 
    this.addserverecordinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.servereCordAddCustomer = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/addCustomerInfo',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
     this.serverecordEidtId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/marketserverecord/'+argvs.id,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
     //编辑 市场招待记录
    this.serverecordEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/edit',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options); 
    }; 
    //编辑 市场资金模块意见
    this.serverecordOpinionEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserverecord/v1/fundmodule/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
    //编辑 决策层意见
    this.servereCordExecutive = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserverecord/v1/executive/${argvs.id}`,
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
    //删除
    this.servereCordDele = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 查看顾客
    this.viewCustomer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/checkCustomerInfo/${argvs.id}`,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
    //编辑 客户信息
    this.editCustomerInfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/editCustomerInfo',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options); 
    }; 
    //查看顾客
    this.viewCustomer1 = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/checkCustomerInfo/${argvs.id}`,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
    //市场招待记录 上传附件
    this.serveRecordUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/marketserverecord/v1/uploadFile/${argvs.fields.id}`,
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
    ///市场招待记录 查看附件
    this.serveRecordSeeFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserverecord/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //市场招待记录 删除文件
    this.serveRecordDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserverecord/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //市场招待记录 导入
    this.serveRecordImport = function(argvs){
        var options = {
            url: config()['rurl']+'/marketserverecord/v1/importExcel',
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
     //所有的地區 添加市场招待记录
    this.serveRecordAllArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/findAreas',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 客户信息
    this.editCustomerInfo1 = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/editCustomerInfo',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options); 
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketserveapply/v1/checkCustomerInfo/${argvs.id}`,
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

    return this;
};