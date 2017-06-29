var app = angular.module('websiteServer',[]);
app.factory('websiteSer',function ($http) {
    return {
        websiteList : websiteList,
        addWebsite:addWebsite,
        editWebsite:editWebsite,
        findWebsiteId:findWebsiteId,
        countWebsite:countWebsite,
        deleteWebsite:deleteWebsite,
        websitePermission:websitePermission,
        websiteUrl:websiteUrl,
        websiteName:websiteName
    };
    function websiteList(data) {
        return $http.get('/biddingwebinfo/list',{
            params: data

        })
    }

    //添加
    function addWebsite(data){
        return $http.post('/biddingwebinfo/add',data)
    }
    //编辑
    function editWebsite(data){
        return $http.post('/biddingwebinfo/edit',data)
    }
    //id查询
    function findWebsiteId(data){
        return $http.get('/biddingwebinfo/web',{
            params:data
        })
    }
    //分页总条数
    function countWebsite(){
        return $http.get('/biddingwebinfo/count')
    }
    //删除
    function deleteWebsite(data){

        return $http.get('/biddingwebinfo/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function websitePermission(data){

        return $http.get('/websitePermission/permission/'+data);
    }
    //获取网址
    function websiteUrl(data){

        return $http.get('/websiteUrl/url',{
            params: data

        })
    }
    //获取网站名称
    function websiteName(data){

        return $http.get('/websiteName/name',{
            params: data

        })
    }
});
