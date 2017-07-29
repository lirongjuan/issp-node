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
            uri : config()['plan']['rurl'] + '/yearplan/v1/setButtonPermission',//2017-06-17
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.yearNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/yearplan/v1/sonPermission',//2017-06-17
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //年计划菜单权限
    this.yearGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/yearplan/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
    this.yearplanList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/yearplan/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.yearplanAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/yearplan/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.yearplanEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/yearplan/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.yearSearch = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/yearplan/v1/findById/${argvs.yearId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.yearplanDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/yearplan/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getYearTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/yearplan/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);


    };
    //月计划菜单权限
    this.monthGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //月计划列表
    this.monthplanList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.monthplanAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.monthplanEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.findMonthId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/findById/${argvs.monthId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.findByYearId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/findByYearId/${argvs.monthId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.getMonthTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/monthplan/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.monthplanDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //月计划 上传附件
    this.monthUploadFile = function(argvs){
        var options = {
            url: config()['plan']['rurl']+`/monthplan/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 月计划 查看附件
    this.listFileMonth = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //月计划 删除文件
    this.delFileMonth = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/monthplan/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //周计划菜单功能权限
    this.weekGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //周计划列表
    this.weekplanList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加
    this.weekplanAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
       // 编辑
    this.weekplanEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //根据id获取周计划
    this.getWeekId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/findById/${argvs.weekId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.getmonthChoice = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/yearplan/v1/getChoice',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //根据月计划id获取周计划
    this.weekGetMonth = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/findByMonth/${argvs.weekId}`,
            headers : {
                userToken : argvs.userToken
            }

        };
        return request(options);
    };
    // 获取月计划选择对象
    this.weekGetChoice = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/monthplan/v1/getChoice',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 获取周计划总条数
    this.getWeekTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/weekplan/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.weekplanDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //周计划 上传附件
    this.weekUploadFile = function(argvs){
        var options = {
            url: config()['plan']['rurl']+`/weekplan/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 周计划 查看附件
    this.listFileWeek = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //周计划 删除文件
    this.delFileWeek = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/weekplan/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //天计划菜单功能权限
    this.dayGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //天计划列表
    this.dayplanList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加
    this.dayplanAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 获取天计划总条数
    this.getDayTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/dayplan/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.dayplanEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //根据id获取周计划
    this.getDayId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/findById/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.dayplanDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //周计划 上传附件
    this.dayUploadFile = function(argvs){
        var options = {
            url: config()['plan']['rurl']+`/dayplan/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 周计划 查看附件
    this.listFileDay = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //周计划 删除文件
    this.delFileDay = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['plan']['rurl'] + `/dayplan/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    // 获取地区
    this.getAreaData = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/targetinformation/v1/findArea',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 获取业务类型
    this.getTypeData = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/businesstype/v1/findThaw',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 获取业务方向科目数据
    this.getCourseData = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['plan']['rurl'] + '/businesscourse/v1/findThaw',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    return this;
}