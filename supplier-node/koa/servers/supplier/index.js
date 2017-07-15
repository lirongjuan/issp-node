var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

 //设置导航权限
     this.settingNav = function(argvs){
     var options = {
     method : 'GET',
     timeout : 3000,
     uri : config()['rurl'] + '/supplierinformation/v1/setButtonPermission',//2017-06-12
     headers:{
     userToken:argvs.userToken
     }
     };
     return request(options);
     };
     //下拉导航权限
     this.supplierNav = function(argvs){
     var options = {
     method : 'GET',
     timeout : 3000,
     uri : config()['rurl'] + '/supplierinformation/v1/sonPermission',//2017-06-10
     headers:{
     userToken:argvs.userToken
     }
     };
     return request(options);
     };
    //基本信息菜单权限
     this.baseInfoPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/supplierinformation/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
   //类型管理菜单权限
    this.suppliertype = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/suppliertype/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    this.listBasicInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/maps?limit=10&page='+argvs.page,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getBasicInfoContact = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/getTotal',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.addBasicInfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/save',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    // 编辑
    this.editBasicInfoList = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/update/'+ argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findContactId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/findById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //删除
    this.basicInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/delete/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获奖情况列表
    this.listBasicInfoReward = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/rewardsituation/v1/findByInformation/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获奖情况添加
    this.addewardBasic = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/rewardsituation/v1/save?informationId='+argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//获取情况删除
    this.rewardBasicDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/rewardsituation/v1/delete/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//获奖情况编辑
    this.rewardBasicedit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/rewardsituation/v1/update/'+ argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取情况id
    this.findQualificationListId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/rewardsituation/v1/findById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.findRewardId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/rewardsituation/v1/findById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //企业资质列表
    this.listBasicInfoQualification = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/enterprisequalification/v1/findByInformation/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //企业资质添加
    this.addQualificationAddBasic = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/enterprisequalification/v1/save?informationId='+argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //企业资质删除
    this.eQualiBasicDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/enterprisequalification/v1/delete/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //企业资质编辑
    this.qualiBasicedit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/enterprisequalification/v1/update/'+ argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //企业资质编辑id
    this.findQualificationEditId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/enterprisequalification/v1/findById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //联系列表
    this.listBasicInfoContact = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contactsituation/v1/findByInformation/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //联系添加
    this.addContactBasic = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contactsituation/v1/save?informationId='+argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //联系删除
    this.eContactDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/contactsituation/v1/delete/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //联系编辑
    this.contentBasicedit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contactsituation/v1/update/'+ argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //联系id
    this.findContentEditId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contactsituation/v1/findById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作列表
    this.listBasicInfoCooperation = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cooperationsituation/v1/findByInformation/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合做添加
    this.addCooperationBasic = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/cooperationsituation/v1/save?informationId='+argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作删除
    this.eCooperationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/cooperationsituation/v1/delete/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作编辑
    this.cooperationBasicedit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cooperationsituation/v1/update/'+ argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作id
    this.findCooperationEditId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cooperationsituation/v1/findById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //供应商类型列表
    this.listType = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/maps?limit=10&page='+argvs.page,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //供应商总条数
    this.getCountType = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/getTotal',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //供应商添加
    this.addTypeBasicInfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/save',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //供应商删除
    this.typeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/delete/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //冻结
    this.typeCongeal = function(argvs){
        var options = {
            method :'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/congeal/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //解冻
    this.typeThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/thaw/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑
    this.supplieTyoeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/update/'+ argvs.id,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑id
    this.findEditTypeEditId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/suppliertype/v1/getById/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/suppermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/suppermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/suppermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/suppermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/suppermission/v1/edit/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //获取所有的派单工编号
    this.getArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/listArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的供应商类型名称
    this.getType = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/supplierinformation/v1/listType',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    return this;
};