var app = angular.module('voucherAuditServer',[]);
app.factory('auditSer',function ($http) {
    return {
        menuPermission : menuPermission,
        AuditList : AuditList,
        LevelOne : LevelOne,
        LevelTwo : LevelTwo,
        LevelThree : LevelThree,
        editSplit:editSplit,
        findVoucherId:findVoucherId,
        countReview:countReview,
        deleteVoucher:deleteVoucher,
        auditVoucher:auditVoucher,
        organizeArea:organizeArea,
        organizeDepart:organizeDepart,
        organizeUser:organizeUser

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/vouchergenerate/guidePermission/'+data);
    }
    //列表
    function AuditList(data) {
        return $http.get('/vouchergenerate/listAudit',{
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

    //编辑
    function editSplit(data){
        return $http.post('/vouchergenerate/split',data)
    }
    //id查询
    function findVoucherId(data){
        return $http.get('/vouchergenerate/getOne',{
            params:data
        })
    }
    //分页总条数
    function countReview(){
        return $http.get('/vouchergenerate/countAudit')
    }
    //删除
    function deleteVoucher(data){
        return $http.get('/vouchergenerate/delete',{
            params: data
        })
    }
    //审核
    function auditVoucher(data){
        return $http.get('/vouchergenerate/audit',{
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
