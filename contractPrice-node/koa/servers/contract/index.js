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
            uri : config()['rurl'] + '/contractquotedata/v1/setButtonPermission',//2017-06-12
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
            uri : config()['rurl'] + '/contractquotedata/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //基本信息菜单权限
    this.baseInfoPermission = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //资料信息菜单权限
    this.materialPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //标准信息菜单权限
    this.standardPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listBasicinfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.countBasicinfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/count',
        };
        return request(options);
    };
    this.addBasicinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.getBasicinfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/contractprojectinfo/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.editBasicinfo = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.deleteBasicinfo = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.listMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.countMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractquotedata/v1/count',
        };
        return request(options);
    };
    this.addMaterial = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractquotedata/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.getMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/contractquotedata/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.editMaterial = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contractquotedata/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.deleteMaterial = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.congealMaterial = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.thawMaterial = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/thaw/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.collectMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/collects?area=${encodeURIComponent(argvs.area)}&customerName=${encodeURIComponent(argvs.customerName)}&startDate=${argvs.startDate}&endDate=${argvs.endDate}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.listStandard = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.countStandard = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractnodestandard/v1/count',
        };
        return request(options);
    };
    this.addStandard = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractnodestandard/v1/add',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.getStandard = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/contractnodestandard/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.editStandard = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contractnodestandard/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.deleteStandard = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };

    this.collectStandard = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/contractnodestandard/v1/collect?date="+
            (argvs.date==undefined?'':argvs.date)+"&area="+(argvs.area==undefined?'':encodeURIComponent(argvs.area))+
            "&project="+(argvs.project==undefined?'':encodeURIComponent(argvs.project))+
            "&node="+(argvs.node==undefined?'':encodeURIComponent(argvs.node)),
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };
    //合同单价资料 上传附件
    this.materialUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/contractquotedata/v1/uploadFile/${argvs.fields.id}`,
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
    // 合同单价资料 查看附件
    this.mateEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //合同单价资料 删除文件
    this.delmate = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //项目签订与立项 导入
    this.basicinfoImport = function(argvs){
        var options = {
            url: config()['rurl']+'/contractprojectinfo/v1/importExcel',
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
    //获取所有的派单工编号
    this.getNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/allDispatchNum',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的内部项目地区名称
    this.ApplyAreas = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/findApplyAreas',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据派工单编号查询派工单信息
    this.getProjectByNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/dispatchprojectinfo${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    }
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
    return this;
};