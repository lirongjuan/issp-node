var app = angular.module('checkincomeServe',[]);
app.factory('checkincomeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        deleteData:deleteData,
        listArea:listArea,
        ctArea:ctArea,
        listGroup:listGroup,
        ctGroup:ctGroup,
        listProject:listProject,
        ctProject:ctProject
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/checkincome/guidePermission/'+data);
    };
    //列表
    function allList(data) {
        return $http.get('/check/checkincome/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/check/checkincome/count')
    }
    //添加
    function addData(data){
        return $http.post('/check/checkincome/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/check/checkincome/getOneById',data)
    }
    //编辑
    function editData(data){
        return $http.post('/check/checkincome/editData',data)
    }
    //删除
    function deleteData(data){
        return $http.post('/check/checkincome/delete',data)
    }
    //获取所有地区
    function listArea(){
        return $http.get('/check/checkincome/listArea')
    } 
    //地区汇总
    function ctArea(data) {
        return $http.post('/check/checkincome/ctArea',data)
    }
    //获取所有的项目组
    function listGroup(){
        return $http.get('/check/checkincome/listGroup')
    } 
    //项目组汇总
    function ctGroup(data) {
        return $http.post('/check/checkincome/ctGroup',data)
    }
    //获取所有的项目名称
    function listProject(){
        return $http.get('/check/checkincome/listProject')
    } 
    //项目名称汇总
    function ctProject(data) {
        return $http.post('/check/checkincome/ctProject',data)
    }
});
