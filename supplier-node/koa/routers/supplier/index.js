var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    router.get('/supplierinformation/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().settingNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/supplierinformation/sonPermission', function*(){ //下拉导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().supplierNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/supplierinformation/guidePermission/:guideAddrStatus', function*(){ //基本信息菜单导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().baseInfoPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/suppliertype/guidePermission/:guideAddrStatus', function*(){ //基本信息菜单导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().suppliertype(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/basicInfoList/list', function*(){ //列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listBasicInfo(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countBasicInfo/count', function*(){//总条数
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getBasicInfoContact(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/basicInfoAdd/add', function*(){//添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addBasicInfo(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/basicInfoEdit/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editBasicInfoList(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editBasicInfoById/id', function*(){//ID查询
        var $self = this;
        var findById = $self.request.query;
        findById.token = $self.cookies.get('token');
        yield (server().findContactId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteBasicInfo/delete', function*(){
        var $self = this;
        var delData = this.request.query;
        delData.token = $self.cookies.get('token');
        yield (server().basicInfoDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/rewardSituationList/rewardList', function*(){ //获奖情况列表
        var $self = this;
        var page2 = $self.request.query;
        page2.token = $self.cookies.get('token');
        yield (server().listBasicInfoReward(page2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/rewardBasicAdd/add', function*(){//获奖情况添加
        var $self = this;
        var rewardData = $self.request.body;
        rewardData.token = $self.cookies.get('token');
        yield (server().addewardBasic(rewardData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteRewardBasic/delete', function*(){
        var $self = this;
        var delReward = this.request.query;
        delReward.token = $self.cookies.get('token');
        yield (server().rewardBasicDelete(delReward)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editRewardBasic/edit', function*(){//获奖情况编辑
        var $self = this;
        var editRewardData = $self.request.body;
        editRewardData.token = $self.cookies.get('token');
        yield (server().rewardBasicedit(editRewardData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editRewardById/id', function*(){//ID查询
        var $self = this;
        var findById = $self.request.query;
        findById.token = $self.cookies.get('token');
        yield (server().findRewardId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/qualificationList/qualificationList', function*(){//id
        var $self = this;
        var qualificationById = $self.request.query;
        qualificationById.token = $self.cookies.get('token');
        yield (server().findQualificationListId(qualificationById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/qualificationList/list', function*(){ //企业资质列表
        var $self = this;
        var page4 = $self.request.query;
        page4.token = $self.cookies.get('token');
        yield (server().listBasicInfoQualification(page4)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/qualificationAdd/add', function*(){//企业资质添加
        var $self = this;
        var qualificationAdd = $self.request.body;
        qualificationAdd.token = $self.cookies.get('token');
        yield (server().addQualificationAddBasic(qualificationAdd)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteQualiBasic/delete', function*(){
        var $self = this;
        var delQuali = this.request.query;
        delQuali.token = $self.cookies.get('token');
        yield (server().eQualiBasicDelete(delQuali)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editQualiBasic/edit', function*(){//获奖情况编辑
        var $self = this;
        var editQualiData = $self.request.body;
        editQualiData.token = $self.cookies.get('token');
        yield (server().qualiBasicedit(editQualiData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editQualiBasicById/id', function*(){//id
        var $self = this;
        var qualificationEditById = $self.request.query;
        qualificationEditById.token = $self.cookies.get('token');
        yield (server().findQualificationEditId(qualificationEditById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contactList/list', function*(){ //联系列表
        var $self = this;
        var page6 = $self.request.query;
        page6.token = $self.cookies.get('token');
        yield (server().listBasicInfoContact(page6)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contactAdd/add', function*(){//联系添加
        var $self = this;
        var conDataAdd = $self.request.body;
        conDataAdd.token = $self.cookies.get('token');
        yield (server().addContactBasic(conDataAdd)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteContact/delete', function*(){
        var $self = this;
        var delCont = this.request.query;
        delCont.token = $self.cookies.get('token');
        yield (server().eContactDelete(delCont)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editContact/edit', function*(){//联系编辑
        var $self = this;
        var editContData = $self.request.body;
        editContData.token = $self.cookies.get('token');
        yield (server().contentBasicedit(editContData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editContactById/id', function*(){//id
        var $self = this;
        var contentEditById = $self.request.query;
        contentEditById.token = $self.cookies.get('token');
        yield (server().findContentEditId(contentEditById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cooperationList/list', function*(){ //合作列表
        var $self = this;
        var page8 = $self.request.query;
        page8.token = $self.cookies.get('token');
        yield (server().listBasicInfoCooperation(page8)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cooperationAdd/add', function*(){//合作添加添加
        var $self = this;
        var coopDataAdd = $self.request.body;
        coopDataAdd.token = $self.cookies.get('token');
        yield (server().addCooperationBasic(coopDataAdd)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteCooperationBasic/delete', function*(){
        var $self = this;
        var delCoop = this.request.query;
        delCoop.token = $self.cookies.get('token');
        yield (server().eCooperationDelete(delCoop)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editCooperation/edit', function*(){//合作编辑
        var $self = this;
        var editCoopData = $self.request.body;
        editCoopData.token = $self.cookies.get('token');
        yield (server().cooperationBasicedit(editCoopData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editCooperationById/id', function*(){//id
        var $self = this;
        var cooperEditById = $self.request.query;
        cooperEditById.token = $self.cookies.get('token');
        yield (server().findCooperationEditId(cooperEditById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplier/listType/list', function*(){ //供应商类型列表
        var $self = this;
        var page = $self.request.query;
        page.token = $self.cookies.get('token');
        yield (server().listType(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countType/count', function*(){//供应商类型总条数
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getCountType(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/addType/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addTypeBasicInfo(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplier/deleteType/delete', function*(){
        var $self = this;
        var delData = this.request.query;
        delData.token = $self.cookies.get('token');
        yield (server().typeDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/congealType/congeal', function*(){//冻结
        var $self = this;
        var congealData = this.request.body;
        congealData.token = $self.cookies.get('token');
        yield (server().typeCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/thawType/thaw', function*(){//解冻
        var $self = this;
        var thawData = this.request.body;
        thawData.token = $self.cookies.get('token');
        yield (server().typeThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/editType/edit', function*(){//编辑
        var $self = this;
        var editSupp = $self.request.body;
        editSupp.token = $self.cookies.get('token');
        yield (server().supplieTyoeEdit(editSupp)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplier/getEditTypeById', function*(){//id
        var $self = this;
        var suppEditById = $self.request.query;
        suppEditById.token = $self.cookies.get('token');
        yield (server().findEditTypeEditId(suppEditById)
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
    }).get('/supplierinformation/listArea', function*(){
        var $self = this;
        var token = {userToken:$self.cookies.get('token')};
        yield (server().getArea(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplierinformation/listType', function*(){  //获取所有的地区名称
            var $self = this;
            var token = {userToken:$self.cookies.get('token')};
            yield (server().getType(token)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        })
    return router;
};
