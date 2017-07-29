var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    this.abilitybaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/companycapability/v1/listCompanyCapability${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //分页
    this.countBaseInfos = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/companycapability/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //添加公司能力
    this.companyAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //删除
    this.companyAbilityDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/delete/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑
    this.companyAbilityEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/edit',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
   //编辑id
    this.companyEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.abilitySelfCapList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/selfcapability/v1/listSelf${urlEncode(argvs,true)}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //分页
    this.countSelfCapInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/selfcapability/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.deleteAbilitySelfDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/delete/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.selfAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑
    this.personAbilityEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/edit',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑
    this.SocialEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/editSocial',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑id
    this.personEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.abilityCooperationList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/coopercapability/v1/list${urlEncode(argvs,true)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //分页
    this.CooperationInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/coopercapability/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.CooperationSelfDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/delete/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.cooperationAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.cooperationAbilityEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/edit',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.threeEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.RelationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/editRelation',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
  //邮件发送
    this.collectemaillist= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/listCollectEmail?limit=10&page='+argvs.page,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.emailCountInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.EmailCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/congeal/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.EmailThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/thaw/' + argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //删除
    this.emailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/delete/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //添加邮件
    this.emailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.typelistName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/listName?type='+argvs.type,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.emailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/edit',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.fourEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getCollectCompany = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/collectCompanyCapability?companys='+encodeURIComponent(argvs.join(',')),
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //数组
    this.getCompanyName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/listAllCompanyName',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getCollectPerson = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/collectSelfCapability?names='+encodeURIComponent(argvs.join(',')),
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//个人数组
    this.getPersonName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/listAllSelfName',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.getCollectCooperation = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/collectCooperCapability?companys='+encodeURIComponent(argvs.join(',')),
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getCooperationName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/listCompany',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //添加个人社交
    this.socialSelfAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.socialSelfList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/listSelf?limit=10&page='+argvs.page+'&selfCapabilityId='+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //分页
    this.socialCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.socialSelfDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/delete/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.socialSelfEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/edit/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //编辑id
    this.socialEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/getOne/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user']['rurl'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };

    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //公司能力菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/companycapability/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //个人能力
    this.selfcapPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/selfcapability/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //个人社交资源菜单权限
    this.selfcapPermission2 = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/selfsocial/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //公司合作菜单权限
    this.cooperPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/coopercapability/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //邮件发送菜单权限
    this.emailPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/cusemail/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //公司能力导入
    this.companyImport = function(argvs){
        var options = {
            url: config()['ability']['rurl']+'/companycapability/v1/importExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取所有公司名称
    this.companyByName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/listAllCompanyName',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //公司上传附件
    this.companyUploadFile = function(argvs){
        var options = {
            url: config()['ability']['rurl']+`/companycapability/v1/upload/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //公司能力查看附件
     this.companyEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/companycapability/v1/files/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //公司能力删除文件
    this.delFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/companycapability/v1/delfile`,
            headers:{
                userToken:argvs.token
            },
            form:argvs.fields
        };
        return request(options);
    };
    //合作对象导入
    this.cooperationImport = function(argvs){
        var options = {
            url: config()['ability']['rurl']+'/coopercapability/v1/importExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作对象获取所有公司名称
    this.cooperationByName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/listCompany',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.cooperationUploadFile = function(argvs){
        var options = {
            url: config()['ability']['rurl']+`/coopercapability/v1/upload/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作对象查看附件
    this.cooperationEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/coopercapability/v1/files/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //合作对象删除文件
    this.cooperationFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + `/coopercapability/v1/delfile`,
            headers:{
                userToken:argvs.token
            },
            form:argvs.fields
        };
        return request(options);
    };
    return this;
};