var app = angular.module('purchaseServer',[]);
app.factory('purchaseSer',function ($http) {
    return {
        menuPermission : menuPermission,
        purchaseList : purchaseList,
        countMaterial : countMaterial,
        addPurchase : addPurchase,
        findPurchaseId : findPurchaseId,
        editPurchaseW : editPurchaseW,
        getAllArea : getAllArea,
        getAllName : getAllName,
        getAllTeam : getAllTeam,
        reviewPurchase : reviewPurchase,
        purSeeList : purSeeList,
        viewFiles : viewFiles,
        deletePurchaseWorkers : deletePurchaseWorkers,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/materialbuy/guidePermission/'+data);
    }
    //物资购买列表
    function purchaseList(data) {
        return $http.get('/materialbuy/list',{
            params: data
        })
    }
    //查看详情
    function purSeeList(data) {
        return $http.get('/materialbuy/checkdetail',{
            params: data
        })
    }
    //分页总条数
    function countMaterial(data){
        return $http.get('/materialbuy/count',{params:data})
    }

    //添加
    function addPurchase(data){
        return $http.post('/materialbuy/add',data)
    }
    //id查询
    function findPurchaseId(data){
        return $http.get('/materialbuy/findbyid',{
            params:data
        })
    }
    //编辑
    function editPurchaseW(data){
        return $http.post('/materialbuy/edit',data)
    }
    //获取所有地区
    function getAllArea(data){
        return $http.get('/materialbuy/findArea',data)
    }
    //获取所有姓名
    function getAllName(data){
        return $http.get('/materialbuy/findUserNames',data)
    }
    //获取所有项目组
    function getAllTeam(data){
        return $http.get('/materialbuy/findStatus',data)
    }
    //审核
    function reviewPurchase(data){
        return $http.post('/materialbuy/areaprincipalaudit',data)
    }
    //删除
    function deletePurchaseWorkers(data){
        return $http.get('/materialbuy/delete',{
            params: data
        })
    }
    //获取文件列表
    function viewFiles(data){
        return $http.get('/materialbuy/listFile',{
            params: data
        })
    }

});
