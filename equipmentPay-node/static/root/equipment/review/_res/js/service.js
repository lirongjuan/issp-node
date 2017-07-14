var app = angular.module('reviewServer',[]);
app.factory('reviewSer',function ($http) {
    return {
        listReview : listReview,
        addReview:addReview,
        editReview:editReview,
        findReviewId:findReviewId,
        countReview:countReview,
        deleteReview:deleteReview,
        reviewPermission:reviewPermission,
        summaryReview:summaryReview
    };
    //菜单权限
    function reviewPermission(data) {
        return $http.get('/reviewPermission/reviewPermission/'+data);
    }
    function listReview(data) {
        return $http.get('/listReview/list',{
            params: data
        })
    }
    //添加
    function addReview(data){
        return $http.post('/addReview/add',data)
    }
    //编辑
    function editReview(data){
        return $http.post('/editReview/edit',data)
    }
    //id查询
    function findReviewId(data){
        return $http.get('/findReviewId/info',{
            params:data
        })
    }
    //分页总条数
    function countReview(data){
        return $http.get('/countReview/count',{params:data})
    }
    //删除
    function deleteReview(data){
        return $http.get('/deleteReview/delete',{
            params: data
        })
    }
    //汇总
    function summaryReview(data) {
        return $http.get('/summaryReview/collect?month='+data)
    }
});
