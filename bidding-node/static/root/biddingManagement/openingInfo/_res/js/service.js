var app = angular.module('openingServer',[]);
app.factory('openingSer',function ($http) {
    return {
        bidOpeningList : bidOpeningList,
        searchList : searchList,
        addBidOpening:addBidOpening,
        editBidOpening:editBidOpening,
        findBidOpeningId:findBidOpeningId,
        countBidOpening:countBidOpening,
        deleteBidOpening:deleteBidOpening,
        summaryOpen:summaryOpen,
        getCity:getCity,
        getProjectName:getProjectName,
        getBiddingNum:getBiddingNum,
        biddingNumber:biddingNumber,
        openingPermission:openingPermission
    };
    //菜单权限
    function openingPermission(data) {
        return $http.get('/openingPermission/openingPermission/'+data);
    }
    function bidOpeningList(data) {
        return $http.get('/bidopeninginfo/list',{
            params: data
        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/bidopeninginfo/search',{
            params: data
        })
    }

    //添加
    function addBidOpening(data){
        return $http.post('/bidopeninginfo/add',data)
    }
    //编辑
    function editBidOpening(data){
        return $http.post('/bidopeninginfo/edit',data)
    }
    //id查询
    function findBidOpeningId(data){
        return $http.get('/bidopeninginfo/info',{
            params:data
        })
    }
    //分页总条数
    function countBidOpening(data){
        return $http.get('/bidopeninginfo/count',{params:data})
    }
    //删除
    function deleteBidOpening(data){
        return $http.get('/bidopeninginfo/delete',{
            params: data
        })
    }
    //汇总
    function summaryOpen(data) {
        return $http.get('/bidopeninginfo/collect?cities='+data)
    }
    //获取所有地区
    function getCity(){
        return $http.get('/bidopeninginfo/cities')
    }
    //获取所有项目名称
    function getProjectName(){
        return $http.get('/getProjectName/projectName')
    }
    //编号查询
    function getBiddingNum(data){
        return $http.get('/getBiddingNum/num',{
            params:data
        })
    }
    //获取所有编号
    function biddingNumber(){
        return $http.get('/biddingNumber/num')
    }
});
