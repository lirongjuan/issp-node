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
            uri : config()['rurl'] + '/materialbuy/v1/setButtonPermission',//2017-07-24 模块设置导航权限
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //下拉导航权限
    this.dropDownNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/sonPermission',//2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设备类型菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
   //列表
    this.devicetypeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/list${urlEncode(argvs,true)}`,// 2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取设备类型总条数
    this.getdeviceTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加设备类型
    this.deviceAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID设备类型
    this.findDevId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/devicetype/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设备类型编辑
    this.deviceEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/devicetype/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //临时物资需求菜单功能权限
    this.guideDemand = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取临时物资需求总记录数
    this.getdemandTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设备类型列表
    this.getDemandList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/list${urlEncode(argvs,true)}`,// 2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除设备类型
    this.deviceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/delete/${argvs.id}`,    //2017-07-25
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加临时物资需求
    this.demandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID临时物资需求
    this.findMatId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/tempmatterdemand/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //临时物资需求编辑
    this.demandEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/tempmatterdemand/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //查看购买物资详情
    this.checkDemand = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/tempmatterdemand/v1/checkdetail/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 物资需求审核
    this.demandAudit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/audit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    //删除临时物资需求
    this.demandDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/delete/${argvs.id}`,    //2017-07-25
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资购买菜单功能权限
    this.guideMatrial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-26
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设备类型列表
    this.materialbuyList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/list${urlEncode(argvs,true)}`,// 2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加物资购买
    this.purchaseAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取物资购买总条数
    this.getPurchaseTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID临时物资需求
    this.findPurId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/findbyid/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //物资购买编辑
    this.purchaseEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //物资购买 上传附件
    this.purchaseUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/materialbuy/v1/uploadFile/${argvs.fields.id}`,
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
    //获取所有地区
    this.purchaseArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/findArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有姓名
    this.purchaseNames = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/findUserNames',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目组
    this.purchaseTeam = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/findStatus',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 物资购买审核
    this.purchaseAudit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/areaprincipalaudit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    //查看购买物资详情
    this.checkBuy = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/checkdetail/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除物资审核
    this.purchaseDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/delete/${argvs.id}`,    //2017-07-27
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资购买 删除文件
    this.delFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/materialbuy/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //查看文件附件列表
    this.getFileList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/materialbuy/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    /*************************/











    //权限设置
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
    return this;
};