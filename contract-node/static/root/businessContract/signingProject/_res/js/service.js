var app = angular.module('signingServer',[]);
app.factory('signingSer',function ($http) {
    return {
        menuPermission : menuPermission,
        signingList : signingList,
        addSigning:addSigning,
        editSigning:editSigning,
        findSigningId:findSigningId,
        countSigning:countSigning,
        deleteSigning:deleteSigning,
        allProject:allProject,
        viewSigning:viewSigning,
        reviewSigning:reviewSigning
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/siginmanage/guidePermission/'+data);
    }
    //列表
    function signingList(data) {
        return $http.get('/siginmanage/list',{
            params: data
        })
    }

    //添加
    function addSigning(data){
        return $http.post('/siginmanage/add',data)
    }

    //编辑
    function editSigning(data){
        return $http.post('/siginmanage/edit',data)
    }
    //id查询
    function findSigningId(data){
        return $http.get('/siginmanage/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countSigning(data){
        return $http.get('/siginmanage/count',{params:data})
    }
    //删除
    function deleteSigning(data){
        return $http.get('/siginmanage/delete',{
            params: data
        })
    }
    //审核
    function reviewSigning(data){
        return $http.post('/siginmanage/audit',data)
    }

    //获取所有名称
    function allProject(){
        return $http.get('/siginmanage/projectName')
    }
    //附件列表
    function viewSigning(data){
        return $http.get('/siginmanage/listFile',{params:data})
    }
});
