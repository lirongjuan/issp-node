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
            uri : config()['rurl'] + '/vouchergenerate/v1/setButtonPermission',//2017-07-04
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.voucherNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/sonPermission',//2017-07-04
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //菜单功能权限
    this.voucherPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-04
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证生成设置 导入
    this.generateImport = function(argvs){
        var options = {
            method: 'POST',
            url: config()['rurl']+'/vouchergenerate/v1/importExcel',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录 上传附件
    this.voucherUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/vouchergenerate/v1/uploadFile/${argvs.fields.id}`,
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
    // 记账凭证记录 查看附件
    this.voucherEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录 删除文件
    this.voucherDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //记账凭证生成设置列表
    this.generateList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listVoucher?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有一级科目
    this.FirstSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listFirstSubject',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有二级科目
    this.SubByFirst = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listSubByFirst?firstSub=${encodeURIComponent(argvs.firstSel)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有三级科目
    this.TubByFirst = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listTubByFirst?firstSub=${encodeURIComponent(argvs.firstSel)}&secondSub=${encodeURIComponent(argvs.secondSel)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加记账凭证生成设置
    this.generateAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑记账凭证生成设置
    this.generateEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID记账凭证生成设置
    this.findGenerateId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/getOne/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数记账凭证生成设置
    this.getGenerateTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除记账凭证生成设置
    this.generateDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取组织结构所有地区
    this.listArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listOrganArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取组织结构所有项目组和部门
    this.listDepart = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listOrganDepart',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取组织结构所有用户
    this.listUser = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listOrganUser',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证审核列表
    this.reviewList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listAudit?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数记账凭证生成设置
    this.getReviewTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/countAudit',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑拆分
    this.splitEdit = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/split`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //审核记账凭证审核
    this.reviewSplit = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/audit/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已审核列表
    this.auditList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listAudited?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取已审核列表总条数
    this.getAuditTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/countAudited',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 过账
    this.auditPosting = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/posting`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //反审核
    this.AuditAnti = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/antiAudit/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已审核科目汇总
    this.auditSubSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/collectSub'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //已审核地区汇总
    this.auditAreaSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/collectArea'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //已审核项目组汇总
    this.auditGroupSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/collectGroup'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已审核项目名称汇总
    this.auditProjectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/collectPname'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //获取所有地区
    this.getAllArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取所有项目组
    this.getAllGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listGroup',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目名称
    this.getAllProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/listProject',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已过账列表
    this.postedList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listChecked?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取已过账列表总条数
    this.getPostedTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/countChecked',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 结账
    this.PostedBill = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/checkAccount`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //反过账
    this.PostedAnti = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/antiPosting/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已过账科目汇总
    this.postedSubSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctTransSub'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //已过账地区汇总
    this.postedAreaSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctTransArea'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //已过账项目组汇总
    this.postedGroupSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctTransGroup'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已过账项目名称汇总
    this.postedProjectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctTransPname'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //结账记录列表
    this.billRecordsList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listCkRecord?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //获取结账记录列表总条数
    this.getBillRecordsTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/countCkRecord',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已结账科目汇总
    this.billSubSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctCkSub'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //已结账地区汇总
    this.billAreaSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctCkArea'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //已结账项目组汇总
    this.billGroupSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctCkGroup'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已结账项目名称汇总
    this.billProjectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctCkPname'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //记账凭证记录列表
    this.VRList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vouchergenerate/v1/listRecord?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取记账凭证记录列表总条数
    this.getVRTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/countRecord',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录科目汇总
    this.VRSubSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctReSub'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //记账凭证记录地区汇总
    this.VRAreaSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctReArea'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //记账凭证记录项目组汇总
    this.VRGroupSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctReGroup'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //记账凭证记录项目名称汇总
    this.VRProjectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vouchergenerate/v1/ctRePname'+urlEncode(argvs,true),
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
            uri : config()['rurl'] + `/voucherpermission/v1/list?limit=10&page=${argvs.page}`,
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
            uri : config()['rurl'] + '/voucherpermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/voucherpermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/voucherpermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/voucherpermission/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};