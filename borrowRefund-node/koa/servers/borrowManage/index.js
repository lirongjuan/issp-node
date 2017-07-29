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
            uri : config()['rurl'] + '/reimburserecord/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/reimburserecord/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //菜单功能权限
    this.borrowManagePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
   this.applylendList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listApplyLend${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.applylendCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 
    this.applylendAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.applylendById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/getOneById/${argvs.id}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 
    this.applylendEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.applylendDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/delete/${argvs.id}`,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取三级科目
    this.allThirdSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/reimburserecord/v1/listThirdSubject',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    }; 
    //获取所有说明
    this.allPlains = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listPlains?thirdSubject=${encodeURIComponent(argvs.thirdSubject)}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取一级/二级科目
    this.FirstAndSecond = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listFirstAndSecond?thirdSubject=${encodeURIComponent(argvs.thirdSubject)}&plainInfo=${encodeURIComponent(argvs.plainInfo)}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.auditDetail = function(argvs){//审核详情
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/applyAuditDetail/${argvs.id}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                            //申请单有误
    //列表
   this.applyErrList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listError${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.applyErrCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countError',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.applyErrById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/getError/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 
    this.applyErrEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editError`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.applyErrDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/deleteError/${argvs.id}`,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //审核详情 
     this.applyErrDetail = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/lendreimbursement/lendauditdetail/v1/listLendAuditDetail${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                          //等待审核
    //列表
   this.waitAuditList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listWaitAudit${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.waitAuditCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countWaitAudit',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.waitAuditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/getError/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 
    this.waitAuditEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editWaitAudit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //负责人审核
    this.chargerAudit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editAuditBycharger`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.listLendAudit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editAuditByManager`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //运营部
    this.operateAdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editAuditByOperate`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //运营部冻结 
    this.congelByOperate = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/congelAuditByOperate`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //负责人冻结 
    this.congelByCharger = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/congelSureByCharger`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //负责人取消冻结 
    this.cancelCongel= function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/congelConcelByCharger`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                        //已经审核
        //列表
    this.hasAuditList= function(argvs){
        argvs.limit = 10;
            var options = {
                method : 'GET',
                timeout : 3000,
                uri : config()['rurl'] + `/applylend/v1/findListHasAudit${urlEncode(argvs,true)}`,
                headers : {
                    userToken : argvs.userToken
                }
            };
            return request(options);
        };
    //获取条目 
    this.hasAuditCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countHasAudit',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                           //等待付款 
    //列表
    this.waitPaymentList= function(argvs){
    argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/findListWaitPay${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.waitPaymentCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countWaitPay',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取借款来源 
    this.listAccountCom = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/listAccountOrigin',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
        //编辑 
    this.editPay = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editPay`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                                //确认收款
        //列表
        this.affirmRecieveList= function(argvs){
        argvs.limit = 10;
            var options = {
                method : 'GET',
                timeout : 3000,
                uri : config()['rurl'] + `/applylend/v1/listSureRecieve${urlEncode(argvs,true)}`,
                headers:{
                    userToken : argvs.userToken
                }
            };
            return request(options);
        };
        //获取条目 
        this.affirmRecieveCount = function(argvs){
            var options = {
                method : 'GET',
                timeout : 3000,
                uri : config()['rurl'] + '/applylend/v1/countRecieve',
                headers:{
                    userToken : argvs.userToken
                }
            };
            return request(options);
        };
        //编辑 
    this.affirmRecieveEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editSureRecieve`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                                         //借款记录 
    //列表
    this.borrowRecordList= function(argvs){
    argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listBorrowRecord${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.borrowRecordCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countBorRecord',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 还款
    this.borrowRecordEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editReturn`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 寄件
    this.borrowRecordEditSend = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editSend`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //借款记录 上传附件
    this.borrowRecordUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/applylend/v1/uploadFile/${argvs.fields.id}`,
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
    // 借款记录 查看附件
    this.borrowRecordFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //借款记录 删除文件
    this.borrowRecordDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };

                        //还款记录
    //列表
    this.returnRecordList= function(argvs){
    argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listReturnMoney${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.returnRecordCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countReturn',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 还款核对
    this.returnRecordEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/checkReturn`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                                //账务核对
    //列表
    this.businessCheckList= function(argvs){
    argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listBusinessCheck${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.businessCheckCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countBusCheck',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 账务核对
    this.businessCheckEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/editCheckTicket`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                                //已收票记录
    //列表
    this.recieveTicketList= function(argvs){
    argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listRecieveTicket${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.recieveTicketCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/countRecTicket',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                                    //已审核或分析
    //列表
    this.hasAnalyzeList= function(argvs){
    argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/lendreimbursement/lendauditdetail/v1/listLendAuditDetail${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.hasAnalyzeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/lendreimbursement/lendauditdetail/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 借款人
    this.hasAnalyzeLender= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/collectLender${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有人 
    this.allgetLenderList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/getLenderList',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 项目组 
    this.hasAnalyzeProjectGroup= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/collectProjectGroup${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的项目组 
    this.allgetPGroupListget = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/getPGroupList',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 地区
    this.hasAnalyzeArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/collectArea${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有地区
    this.allgetArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/getArea',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 项目名称
    this.hasAnalyzeProjectName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/collectProjectName${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
     //获取所有项目名称
    this.allgetPNameList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applylend/v1/getPNameList',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //借款凭证 
    this.bVoucher= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listAccountVoucher/${argvs.id}`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
     //还款凭证 
    this.rVoucher= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applylend/v1/listVoucherByReturn/${argvs.id}`,
            headers:{
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
            uri : config()['rurl'] + `/lendPermission/v1/list?limit=10&page=${argvs.page}`,
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
            uri : config()['rurl'] + '/lendPermission/v1/count'
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/lendPermission/v1/getOneById/${argvs.id}`
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/lendPermission/v1/listOperateById/${argvs.id}`
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/lendPermission/v1/edit',
            form:argvs,
            headers: {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    return this;
};