var app = angular.module('inventoryServer',[]);
app.factory('inventorySer',function ($http) {
    return {
        menuPermission : menuPermission,
        inventoryList : inventoryList,
        allNum : allNum,
        countInventory : countInventory,
        findInventoryId:findInventoryId,
        editInventory:editInventory,
        getExcel:getExcel,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/inventory/guidePermission/'+data);
    }
    //盘点列表
    function inventoryList(data) {
        return $http.get('/inventory/list',{
            params: data
        })
    }
    //获取所有编号
    function allNum(){
        return $http.get('/inventory/allstockEncoding')
    }
    //分页总条数
    function countInventory(data){
        return $http.get('/inventory/count',{params:data})
    }

    //盘点_编辑
    function editInventory(data){
        return $http.post('/inventory/inventory',data)
    }
    //id查询
    function findInventoryId(data){
        return $http.get('/inventory/inventoryOne',{
            params:data
        })
    }
    //excel导出获取
    function getExcel(data){
        return $http.get('/inventory/list',{
            params:data
        })
    }
});
