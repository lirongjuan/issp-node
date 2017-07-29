var app = angular.module('activityServer',[]);
app.factory('activitySer',function ($http) {
    return {
        listActivity : listActivity,
        countActivity:countActivity,
        summaryFirst:summaryFirst,
        listFirstById:listFirstById,
        collectAllDetails:collectAllDetails,
        summarySecond:summarySecond,
        summaryThird:summaryThird,
        summaryAreaByOrder:summaryAreaByOrder,
        summaryProjectByOrder:summaryProjectByOrder,
        summaryProjectNameByOrder:summaryProjectNameByOrder,
        menuPermission:menuPermission,
    };
    function listActivity(data) {
        return $http.get('/listActivity/list',{params:data})
    }
    function countActivity() {
        return $http.get('/countActivity/count')
    }
  //一级科目汇总
    function summaryFirst(data) {
        return $http.post('/summaryFirst/first',data)
    }
//获取时间
    function listFirstById() {
        return $http.get('/listFirstById/summary/id')
    }
//汇总详情
    function collectAllDetails(data) {
        return $http.get('/collectAllDetails/id',{params:data})
    }
//二级科目汇总
    function summarySecond(data) {
        return $http.post('/summarySecond/second',data)
    }
    //三级科目汇总
    function summaryThird(data) {
        return $http.post('/summaryThird/third',data)
    }
    //地区汇总
    function summaryAreaByOrder(data) {
        return $http.post('/summaryAreaByOrder/area',data)
    }
    //项目组汇总
    function summaryProjectByOrder(data) {
        return $http.post('/summaryProjectByOrder/project',data)
    }
    //项目名称汇总
    function summaryProjectNameByOrder(data) {
        return $http.post('/summaryProjectNameByOrder/projectName',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/activity/guidePermission/'+data);
    }
});
