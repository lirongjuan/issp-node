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
            uri : config()['rurl'] + '/buyticketapply/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/buyticketapply/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //基本信息菜单权限
    this.basicPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //购买网站信息记录菜单导航权限
    this.recordPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/ticketinforecord/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //车票购买申请
    this.appPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //车票购买记录
    this.selectPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketrecord/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //购票标准菜单权限
    this.StandPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketstandard/v1/guidePermission?guideAddrStatus=`+argvs.name,
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

    //基本信息列表
    this.listBasic = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //基本信息总条数
    this.countBasic = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/basicinfo/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //删除基本信息
    this.deleteBasic = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加基本信息
    this.addBasic = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/basicinfo/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询基本信息
    this.getBasic = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/basic/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑基本信息
    this.editBasic = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/basicinfo/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //查询所有的用户
    this.getUserAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/allGetPerson`,
        };
        return request(options);
    };
     //物资车票信息
     this.listRecord = function(argvs){
         var options = {
             method : 'GET',
             timeout : 3000,
             uri : config()['rurl'] + `/ticketinforecord/v1/list?limit=10&page=${argvs.page}`,
             headers : {
                 userToken : argvs.token
             },
         };
         return request(options);
     };
     //车票信息总条数
     this.countRecord = function(argvs){
         var options = {
             method : 'GET',
             timeout : 3000,
             uri : config()['rurl'] + '/ticketinforecord/v1/count',
             headers : {
                 userToken : argvs.token
             },
         };
         return request(options);
     };
     //删除车票信息
     this.deleteRecord = function(argvs){
         var options = {
             method : 'DELETE',
             timeout : 3000,
             uri : config()['rurl'] + `/ticketinforecord/v1/delete/${argvs.id}`,
             headers : {
                 userToken : argvs.token
             },
             form : argvs
         };
         return request(options);
     };
     //添加车票信息
     this.addRecord = function(argvs){
         var options = {
             method : 'POST',
             timeout : 3000,
             uri : config()['rurl'] + '/ticketinforecord/v1/add',
             headers : {
                 userToken : argvs.token
             },
             form : argvs
         };
         return request(options);
     };
     //根据id来查询车票信息
     this.getRecord = function(argvs){
         var options = {
             method : 'GET',
             timeout : 3000,
             uri : config()['rurl'] + `/ticketinforecord/v1/record/${argvs.id}`,
             headers : {
                 userToken : argvs.token
             },
         };
         return request(options);
     };
     //编辑车票信息
     this.editRecord = function(argvs){
         var options = {
             method : 'POST',
             timeout : 3000,
             uri : config()['rurl'] + '/ticketinforecord/v1/edit',
             headers : {
                 userToken : argvs.token
             },
             form : argvs
         };
         return request(options);
     };
     //冻结
     this.congealRecord = function(argvs){
         var options = {
             method : 'PUT',
             timeout : 3000,
             uri : config()['rurl'] + `/ticketinforecord/v1/congeal/${argvs.id}`,
             headers : {
                 userToken : argvs.token
             },
         };
         return request(options);
     };
     //解冻
     this.thawRecord = function(argvs){
         var options = {
             method : 'PUT',
             timeout : 3000,
             uri : config()['rurl'] + `/ticketinforecord/v1/thaw/${argvs.id}`,
             headers : {
                 userToken : argvs.token
             },
         };
         return request(options);
     };
     //____________------------------------------------------------------
    //车票购买申请列表
    this.listApp = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //车票购买申请总条数
    this.countApp = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketapply/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //删除车票购买申请
    this.deleteApp = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加车票购买申请
    this.addApp = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketapply/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询车票购买申请
    this.getApp = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/apply/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑车票购买申请
    this.editApp = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketapply/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //查询所有的地区
    this.getAreaAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/allArea`,
        };
        return request(options);
    };
    //查询所有的地区
    this.getgroupAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/allOrageDepartment`,
        };
        return request(options);
    };
    //查询所有的购票原因
    this.getCauseAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/findticketCause`,
        };
        return request(options);
    };
    //查询所有的车票类型
    this.getTypeAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/findTicketType`,
        };
        return request(options);
    };
    //查询所有的购买方式
    this.getPatternAll = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/basicinfo/v1/findBuyPattern`,
        };
        return request(options);
    };
    //审核物资领用信息
    this.AduitApp = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/planAuditOpinion/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //福利模块审核意见
    this.Aduitwelf = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketapply/v1/welfAuditOpinion/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //车票查询列表
    this.listSelect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketrecord/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //车票查询总条数
    this.countSelect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketrecord/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //删除车票查询
    this.deleteSelect = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketrecord/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };

    //根据id来查询车票查询
    this.getSelect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketrecord/v1/record/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑车票查询
    this.editSelect = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketrecord/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //----------------------------------
    //购票标准信息列表
    this.listStand = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketstandard/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //购票标准信息总条数
    this.countStand = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketstandard/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //删除购票标准信息
    this.deleteStand = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketstandard/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //添加购票标准信息
    this.addStand = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketstandard/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //根据id来查询购票标准信息
    this.getStand = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/buyticketstandard/v1/standard/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //编辑购票标准信息
    this.editStand = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/buyticketstandard/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};