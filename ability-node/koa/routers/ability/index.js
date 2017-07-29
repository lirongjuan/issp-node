var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();
     //列表
    router.get('/ability/abilitycompanycap/listAbilityCompanyCap', function*(){
        var $self = this;
       var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().abilitybaseinfoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilitycompanycap/count', function*(){
        var $self = this;
        var countData = $self.request.query;
        countData.token = this.cookies.get('token');
        yield (server().countBaseInfos(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addCompanyAbility/add', function*(){
            var $self = this;
            var addData = this.request.body;
            addData.token = this.cookies.get('token');
                yield (server().companyAbilityAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        //删除
        }).post('/ability/deleteCompanyAbility/delete', function*(){
        var $self = this;
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        yield (server().companyAbilityDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑
    }).post('/ability/editCompanyAbility/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().companyAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).post('/ability/getOneById', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.token = $self.cookies.get('token');
        yield (server().companyEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/abilitySelfCap/listAbilitySelfCap', function*(){
        var $self = this;
        var page2 = this.request.query;
            page2.token = $self.cookies.get('token');
        yield (server().abilitySelfCapList(page2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilitySelfCap/count', function*(){
        var $self = this;
        var countData = this.request.query;
        countData.token = $self.cookies.get('token');
        yield (server().countSelfCapInfo(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteAbilitySelf/delete', function*(){
        var $self = this;
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        yield (server().deleteAbilitySelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑
    }).post('/ability/addSelfCapAbility/add', function*(){
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
       var $self = this;
        yield (server().selfAbilityAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editSelfCapAbility/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().personAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).post('/ability/getTwoById', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.token = this.cookies.get('token');
        yield (server().personEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editEditSocial/editsocial', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().SocialEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).get('/ability/listAbilityCooperation/listCoop', function*(){
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().abilityCooperationList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countCooperation/count', function*(){
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().CooperationInfo(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //添加公司能力
    }).post('/ability/deleteCooperationSelf/delete', function*(){
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().CooperationSelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addCooperationAbility/add', function*(){
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cooperationAbilityAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //删除
    }).post('/ability/editCooperationAbility/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cooperationAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/getThreeById', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.token = this.cookies.get('token');
        yield (server().threeEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editRelation/editRel', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().RelationEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //汇总和邮件发送
    }).get('/ability/listAbilityEmail/listEmail', function*(){
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().collectemaillist(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countEmail/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().emailCountInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/congealEmail/congeal', function*(){//冻结
        var $self = this;
        var congealData = this.request.body;
        congealData.token = this.cookies.get('token');
        yield (server().EmailCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/thawEmail/thaw', function*(){//解冻
        var thawData = this.request.body;
        thawData.token = this.cookies.get('token');
        var $self = this;
        yield (server().EmailThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteEmail/delete', function*(){ //删除
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().emailDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addEmail/add', function*(){ //添加邮件
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().emailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/listNameType/type', function*(){
        var getTyoeData = this.request.query;
        var $self = this;
        getTyoeData.token = this.cookies.get('token');
        yield (server().typelistName(getTyoeData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editEmail/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().emailEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/getFourById', function*(){
        var editId = this.request.body;
        var $self = this;
        editId.token = this.cookies.get('token');
        yield (server().fourEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryCompany', function*(){ //汇总
        var getCollect = this.request.body;
        var $self = this;
        getCollect.token = this.cookies.get('token');
        yield (server().getCollectCompany(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getCompanyNames', function*(){   //数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getCompanyName(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryPerson', function*(){
        var getCollect = this.request.body;
        var $self = this;
        getCollect.token = this.cookies.get('token');
        yield (server().getCollectPerson(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getPersonNames', function*(){   //数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getPersonName(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryCooperation', function*(){
        var getCollect = this.request.body;
        var $self = this;
        getCollect.token = this.cookies.get('token');
        yield (server().getCollectCooperation(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getCooperationNames', function*(){   //数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getCooperationName(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addSocialSelf/add', function*(){
        var socialData = this.request.body;
        socialData.token = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfAdd(socialData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/listSocialSelf/socialList', function*(){
        var $self = this;
        var listData = this.request.query;
        listData.token = this.cookies.get('token');
        yield (server().socialSelfList(listData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSocial/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().socialCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteSocialSelf/delete', function*(){
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editSocialSelf/socialEdit', function*(){
        var editSocial = this.request.body;
        editSocial.token = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfEdit(editSocial)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getFiveById', function*(){
        var $self = this;
        var EditFiveId = $self.request.query;
        EditFiveId.token = this.cookies.get('token');
        yield (server().socialEditById(EditFiveId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.token = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilityManage/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {token:$self.cookies.get('token')};
        yield (server().settingNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/abilityManage/sonPermission', function*(){ //导航权限
        var $self = this;
        var navToken = {token:$self.cookies.get('token')};
        yield (server().siginNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/companyCap/guidePermission/:guideAddrStatus', function*(){ //公司能力菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().guidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/selfcap/guidePermission/:guideAddrStatus', function*(){ //个人能力菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().selfcapPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/selfcap2/guidePermission/:guideAddrStatus', function*(){ //个人能力社交菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().selfcapPermission2(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/cooperation/guidePermission/:guideAddrStatus', function*(){ //公司合作菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().cooperPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/email/guidePermission/:guideAddrStatus', function*(){ //汇总和邮件菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().emailPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    })
        .post('/companyManage/import', koaBody({multipart:true}),function *(next) {//公司能力展示导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().companyImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/companyManage/templateExport', function*(){//公司能力导入模板下载
        var $self = this;
        var fileName = '公司能力展示导入模板.xlsx';
        yield (fetch(config()['ability']['rurl']+`/companycapability/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/allCompanyName/company', function*(){// 获取所有公司名称
        var $self = this;
        var comData = $self.request.query;
        comData.token = $self.cookies.get('token');
        yield (server().companyByName(comData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/companyName/exportFile', function*(){//公司能力展示导出
        var $self = this;
        var count = $self.request.query;
        var fileName = count.companyName+'.xlsx';
        yield (fetch(config()['ability']['rurl']+`/companycapability/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/companyManage/upload', koaBody({multipart:true}),function *(next) {//公司能力上传文件
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().companyUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/viewCompany/listFile', function*(){ //公司能力查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().companyEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/company/delFile', koaBody({multipart:true}), function*(){//公司能力删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().delFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/company/download', function*(){//公司能力附件下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['ability']['rurl']+`/companycapability/v1/download${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/cooperation/import', koaBody({multipart:true}),function *(next) {//合作对象导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().cooperationImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cooperation/templateExport', function*(){//合作对象模板下载
        var $self = this;
        var fileName = '合作对象商务展示导入模板.xlsx';
        yield (fetch(config()['ability']['rurl']+`/coopercapability/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/allCooperationName/company', function*(){// 合作对象获取所有公司名称
        var $self = this;
        var comData = $self.request.query;
        comData.token = $self.cookies.get('token');
        yield (server().cooperationByName(comData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cooperationName/exportFile', function*(){//合作对象导出
        var $self = this;
        var count = $self.request.query;
        var fileName = count.companyName+'.xlsx';
        yield (fetch(config()['ability']['rurl']+`/coopercapability/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/cooperationManage/upload', koaBody({multipart:true}),function *(next) {//公司能力上传文件
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().cooperationUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/viewCooperation/listFile', function*(){ //合作对象查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().cooperationEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cooperation/delFile', koaBody({multipart:true}), function*(){//合作对象删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().cooperationFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cooperation/download', function*(){//合作对象附件下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['ability']['rurl']+`/coopercapability/v1/download${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    })
    return router;
};
