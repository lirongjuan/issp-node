var app = angular.module('voucherServer',[]);
app.factory('voucherSer',function ($http) {
    return {
        menuPermission : menuPermission,
        VoucherList : VoucherList,
        LevelOne : LevelOne,
        LevelTwo : LevelTwo,
        LevelThree : LevelThree,
        addVoucher:addVoucher,
        editGeneration:editGeneration,
        findVoucherId:findVoucherId,
        countVoucher:countVoucher,
        deleteVoucher:deleteVoucher,
        organizeArea:organizeArea,
        organizeDepart:organizeDepart,
        organizeUser:organizeUser
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/vouchergenerate/guidePermission/'+data);
    }
    //列表
    function VoucherList(data) {
        return $http.get('/vouchergenerate/list',{
            params: data
        })
    }
    //获取所有一级科目
    function LevelOne(){
        return $http.get('/vouchergenerate/listFirstSubject')
    }
    //获取所有二级科目
    function LevelTwo(data){
        return $http.get('/vouchergenerate/listSubByFirst',{params:data})
    }
    //获取所有三级科目
    function LevelThree(data){
        return $http.get('/vouchergenerate/listTubByFirst',{params:data})
    }
    //添加
    function addVoucher(data){
        return $http.post('/vouchergenerate/add',data)
    }

    //编辑
    function editGeneration(data){
        return $http.post('/vouchergenerate/edit',data)
    }
    //id查询
    function findVoucherId(data){
        return $http.get('/vouchergenerate/getOne',{
            params:data
        })
    }
    //分页总条数
    function countVoucher(){
        return $http.get('/vouchergenerate/count')
    }
    //删除
    function deleteVoucher(data){
        return $http.get('/vouchergenerate/delete',{
            params: data
        })
    }
    //获取组织结构所有地区
    function organizeArea(){
        return $http.get('/vouchergenerate/listOrganArea')
    }
    //获取组织结构所有项目组和部门
    function organizeDepart(){
        return $http.get('/vouchergenerate/listOrganDepart')
    }
    //获取组织结构所有用户
    function organizeUser(){
        return $http.get('/vouchergenerate/listOrganUser')
    }
});
