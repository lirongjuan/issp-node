var app = angular.module('salaryconfirmServer',[]);
app.factory('salaryconfirmSer',function ($http) {
    return {     
        salaryconfirmDelete:salaryconfirmDelete,//删除
        salaryconfirmEdit:salaryconfirmEdit,//编辑
        salaryconfirmList : salaryconfirmList,//列表
        salaryconfirmAdd:salaryconfirmAdd,//添加
        salaryconfirmFind:salaryconfirmFind,//根据id查询
        salaryconfirmAreas:salaryconfirmAreas,//地区查询
        countSalaryconfirm:countSalaryconfirm,//分页
        salaryconfirmUsers:salaryconfirmUsers,//用户列表查询
        salaryconfirmDepartments:salaryconfirmDepartments,//部门列表查询
        salaryconfirPositions:salaryconfirPositions,//职位列表查询
        salaryconfirmImport:salaryconfirmImport,//导入
        salaryconfirmExport:salaryconfirmExport,//导出
        salaryconfirmFiles:salaryconfirmFiles,
        salaryconfirmPermission:salaryconfirmPermission
    };
    //删除
    function  salaryconfirmDelete(data) {
        return $http.get('/salaryconfirmDelete/Delete',{
            params:data
        })
    }
    //编辑
    function  salaryconfirmEdit(data) {
        return $http.post('/salaryconfirmEdit/Edit',data)
    }
    //列表
    function  salaryconfirmList(data) {
        return $http.get('/salaryconfirmList/List',{
            params:data
        })
    }
    //添加
    function  salaryconfirmAdd(data) {
        return $http.post('/salaryconfirmAdd/Add',data)
    }
    //根据id查询
    function  salaryconfirmFind(data) {
        return $http.get('/salaryconfirmFind/Find',{
            params:data
        })
    }
    //地区查询
    function  salaryconfirmAreas(data) {
        return $http.get('/salaryconfirmAreas/Areas',{
            params:data
        })
    }
    //分页
    function  countSalaryconfirm(data) {
        return $http.get('/countSalaryconfirm/count',{
            params:data
        })
    }
    //用户列表查询
    function  salaryconfirmUsers(data) {
        return $http.get('/salaryconfirmUsers/Users',{
            params:data
        })
    }
    //部门列表查询
    function  salaryconfirmDepartments(data) {
        return $http.get('/salaryconfirmDepartments/Departments',{
            params:data
        })
    }
    //职位列表查询
    function  salaryconfirPositions(data) {
        return $http.get('/salaryconfirPositions/Positions',{
            params:data
        })
    }
    //导入
    function  salaryconfirmImport(data) {
        return $http.post('/salaryconfirmImport/Import',data)
    }
    //导出
    function  salaryconfirmExport(data) {
        return $http.get('/salaryconfirmExport/Export',{
            params:data
        })
    }
    //文件附件列表
    function salaryconfirmFiles(data) {
        return $http.get('/salaryconfirmFiles/files',{
            params:data
        })
    }
    //菜单权限
    function salaryconfirmPermission(data) {
        return $http.get('/salaryconfirmPermission/guidePermission/'+data);
    }
});
