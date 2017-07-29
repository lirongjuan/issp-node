var app = angular.module('detailServer',[]);
app.factory('detailSer',function ($http) {
    return {
        detailList : detailList,
        menuPermission : menuPermission,
        adddetail:adddetail,
        editdetail:editdetail,
        finddetailId:finddetailId,
        countdetail:countdetail,
        deletedetail:deletedetail,
        allName:allName,
        getDepartment:getDepartment,
        monthCollect:monthCollect,
        yearCollect:yearCollect,
        allGround:allGround
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/detail/guidePermission/'+data);
    }
    //列表
    function detailList(data) {
        return $http.get('/detail/list',{
            params: data
        })
    }
    //获取成本明细所有部门
    function getDepartment(data) {
        return $http.get('/detail/getDepartment',{
            params: data
        })
    }
    //添加
    function adddetail(data){
        return $http.post('/detail/add',data)
    }

    //编辑
    function editdetail(data){
        return $http.post('/detail/edit',data)
    }
    //id查询
    function finddetailId(data){
        return $http.get('/detail/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countdetail(data){
        return $http.get('/detail/count',{params:data})
    }
    //删除
    function deletedetail(data){
        return $http.get('/detail/delete',{
            params: data

        })
    }
    //获取所有姓名
    function allName(data){
        return $http.get('/detail/name',{
            params: data
        })
    }
    //获取所有部门 
    function allGround(data){
        return $http.get('/detail/allGround',{
            params: data
        })
    }
    //月汇总
     function monthCollect(data){
        return $http.post('/detail/monthCollect',data)
    }
    //年汇总
     function yearCollect(data){
        return $http.post('/detail/yearCollect',data)
    }
});
