var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    //菜单功能权限
    this.refundManagePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //菜单功能权限 报销人员
    this.analyzePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburseanalisisor/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //菜单功能权限 报销人员
    this.finoddInforPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
   this.applyRecordList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.applyRecordCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/count${urlEncode(argvs,true)}`,
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
    //添加 报销申请
    this.applylendAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/add`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/getOneById/${argvs.id}`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/edit`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/delete/${argvs.id}`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/getReimburseRecord/${argvs.applyLendId}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //申请报销 上传附件
    this.applyRecordUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/reimburserecord/v1/uploadFile/${argvs.fields.id}`,
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
    // 申请报销 查看附件
    this.applyRecordFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //申请报销 删除文件
    this.applyRecordDelFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
                          //报销单有误
    //列表
   this.applyErrList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listErrorRecord${urlEncode(argvs,true)}`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/countError${urlEncode(argvs,true)}`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/getOneById/${argvs.id}`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/editError`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                    //等待审核记录
    //列表
   this.rwaitAuditList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listAuditRecord${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.rwaitAuditCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/countAuditRecord${urlEncode(argvs,true)}`,
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
            uri : config()['rurl'] + `/reimburserecord/v1/auditRecord`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //负责人冻结 
    this.congel = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/congelAuditRecord`,
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
                          //报销单号管理
    //列表
   this.finoddinforList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/listFinoddinfor${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.finoddinforCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/finoddinfor/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加
    this.finoddInforAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.finoddInforDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/delete/${argvs.id}`,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结 
    this.finoddInforCongel = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/congeal/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //取消冻结 
    this.finoddInforCancelCongel= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/thaw/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                //已经审核
    //列表
   this.rhasAuditList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listAnalisysRecord${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.rhasAuditCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/countAnalisysRecord${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //分析
    this.rhasAuditAudit= function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/analisysRecord`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结 
    this.rhasAuditCongel = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/analisysRecord`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                 //已经分析
    //列表
   this.rhasAnalyzeList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listHasAnalisys${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.rhasAnalyzeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/countHasAnalisys${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                    //帐务核对
    //列表
   this.rbusinessCheckList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listAccountCheck${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.rbusinessCheckCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/countAccountCheck${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑id
    this.rbusinessCheckEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/recieveTicket`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                    //等待付款
    //列表
   this.rwaitPaymentList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listWaitPay${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.rwaitPaymentCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/countWaitPay${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //付款 
    this.rwaitPaymentPay = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/waitPay`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //预计付款 
    this.predictPay = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/prepay`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的报销单号 
    this.listFinoddinfor = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/finoddinfor/v1/listFinoddinfor${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                        //已经付款
    //列表
   this.hasPayList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listHasPay${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.hasPayCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/countHasPay${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
     //生成记账凭证
   this.bVoucher= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listAccountVoucher/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有报销人 
    this.listUser = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listReimUser`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有一级科目 
    this.listFirstSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listFirstSubject`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有地区
    this.listArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listArea`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目名称
    this.listProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/listProject`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 报销人
    this.collectReimer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/collectReimer${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 一级科目
    this.collectFirstSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/collectProjectGroup${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 地区
    this.collectArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/collectArea${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总 项目名称
    this.collectProjectName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburserecord/v1/collectProjectName${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
                  //分析人员设置
    this.analyzeList= function(argvs){
       argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburseanalisisor/v1/listReimburseAnalisisor${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.analyzeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/reimburseanalisisor/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目 
    this.allLisisor = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/reimburseanalisisor/v1/listUser',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 分析人员设置
    this.analyzeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburseanalisisor/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.analyzeById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburseanalisisor/v1/getOne/${argvs.id}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 
    this.analyzeEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburseanalisisor/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.analyzeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/reimburseanalisisor/v1/delete/${argvs.id}`,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    return this;
};