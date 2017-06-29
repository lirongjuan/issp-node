var app = angular.module('emailServer',[]);
app.factory('emailSer',function ($http) {
    return {
        emailPermission:emailPermission,
        emailCheck:emailCheck,
        editEmail:editEmail,
        emailId:emailId,
        emailCount:emailCount,
        emailList:emailList,
        emailDelete:emailDelete,
        addEmail:addEmail,
        emailThaw:emailThaw,
        getCityInfo:getCityInfo,
        getCityOpen:getCityOpen,
        emailCongeal:emailCongeal
    };
    //菜单权限
    function emailPermission(data) {
        return $http.get('/emailPermission/emailPermission/'+data);
    }
    //检测(未写)
    function emailCheck(data) {
        return $http.get('/emailCheck/check',{
            params: data

        })
    }
    //编辑
    function editEmail(data){
        return $http.post('/emailEdit/edit',data)
    }
    //id查询
    function emailId(data){
        return $http.get('/emailId/getOneById',{
            params:data
        })
    }
//分页总条数
    function emailCount(){
        return $http.get('/emailCount/count')
    }
    //列表
    function emailList(data) {
        return $http.get('/emailList/list',{
            params: data

        })
    }
//删除
    function emailDelete(data){
        return $http.get('/emailDelete/delete',{
            params: data
        })
    }
    //添加
    function addEmail(data){
        return $http.post('/emailAdd/add',data)
    }
//解冻
    function emailThaw(data){
        return $http.get('/emailThaw/thaw',{
            params: data
        })
    }
//冻结
    function emailCongeal(data){
        return $http.get('/emailCongeal/congeal',{
            params: data
        })
    }   
//------------------------------------------------
    //招标获取所有地区
    function getCityInfo(){
        return $http.get('/biddinginfo/cities')
    }  
    //开标获取所有地区
    function getCityOpen(){
        return $http.get('/bidopeninginfo/cities')
    }
});
