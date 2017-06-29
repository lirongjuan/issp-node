var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    this.WebInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.WebInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.WebInfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/edit?userToken=${argvs.userToken}`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //删除
    this.WebInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getWebInfoTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddingwebinfo/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findWebInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/web/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.websitePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取网址
    // this.websiteUrl = function(argvs){
    //     var options = {
    //         method : 'GET',
    //         timeout : 3000,
    //         uri : config()['rurl'] + '/biddingwebinfo/v1/getWebInfo',
    //         headers:{
    //             userToken:argvs.userToken
    //         }
    //     };
    //     return request(options);
    // };
    //获取网址
    this.websiteUrl = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/getWebInfo${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取网站名称
    this.websiteName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddingwebinfo/v1/webName',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //-------------------------------招标信息----------------------------
    //文件附件列表    
   this.infoFiles= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/listFile/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //招标信息列表
    this.InfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除文件夹
    this.infoDelfile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //招标信息列表搜索
    this.biddingSearch = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/search${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.InfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.InfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //删除
    this.InfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getInfoTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.getInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/info/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.collectList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/collect?cities=${encodeURIComponent(argvs)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有地市
    this.getAllArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/cities',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //菜单权限
    this.infoGuide = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //上传附件
    this.infoUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/biddinginfo/v1/uploadFile/${argvs.fields.id}`,
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
    //--------------------------投标答疑问题-----------------------------------
    //删除文件夹
    this.questionDelfile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
//文件附件列表    
   this.questionFiles= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/listFile/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //菜单权限
    this.questionPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //投标答疑问题列表
    this.questionsList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.questionsAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.questionsEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //删除
    this.questionsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getQuestionsTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinganswerquestions/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.getQuestionsId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/answer/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //上传附件
    this.questionUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/biddinganswerquestions/v1/uploadFile/${argvs.fields.id}`,
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
    //----------------------------------标书资料------------------------------------
   //删除文件夹
    this.materialDelfile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
//文件附件列表    
   this.materialFiles= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/listFile/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //菜单权限
    this.MaterialPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //标书资料列表
    this.tenderList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.tenderAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.tenderEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //删除
    this.tenderDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getTenderTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/tenderinfo/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.getTenderId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/info/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //上传附件
    this.materialUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/tenderinfo/v1/uploadFile/${argvs.fields.id}`,
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
    //--------------------------开标信息----------------------------------------------
    //菜单权限
    this.openingPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //开标信息列表
    this.openingInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //开标信息列表搜索
    this.openSearchList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/search${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.openingInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.openingInfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //删除
    this.openingInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getOpeningInfoTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.getOpeningInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/info/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.collectInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/bidopeninginfo/v1/collect?cities='+encodeURIComponent(argvs.cities),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有地市
    this.getAllCities = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/bidopeninginfo/v1/cities',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
//----------------------邮件发送------------------------------
    //邮件汇总菜单权限
    this.emailPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //邮件汇总列表
    this.emailList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加邮件汇总
    this.emailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑邮件汇总
    this.emailEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID邮件汇总
    this.emailId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除邮件汇总
    this.emailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数邮件汇总
    this.emailCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collectemail/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //冻结邮件汇总
    this.emailCongeal = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //解冻邮件汇总
    this.emailThaw = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/thaw/${argvs.id}`,
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
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
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
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/sonPermission',//2017-06-10
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
            uri : config()['rurl'] + '/biddinginfo/v1/setButtonPermission',//2017-06-12
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目名称
    this.getProjectName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/projectName',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有编号
    this.biddingNumber = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/biddingNumber',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //编号查询
    this.getBiddingNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/getBiddingNum${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    return this;
}