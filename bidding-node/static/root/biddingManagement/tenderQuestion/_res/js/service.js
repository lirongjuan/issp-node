var app = angular.module('questionServer',[]);
app.factory('questionSer',function ($http) {
    return {
        answerList : answerList,
        addAnswer:addAnswer,
        editAnswer:editAnswer,
        findAnswerId:findAnswerId,
        countAnswer:countAnswer,
        deleteAnswer:deleteAnswer,
        getProjectName:getProjectName,
        getBiddingNum:getBiddingNum,
        biddingNumber:biddingNumber,
        questionFiles:questionFiles,//文件附件列表
        questionPermission:questionPermission
    };
    //菜单权限
    function questionPermission(data) {
        return $http.get('/questionPermission/questionPermission/'+data);
    }
    function answerList(data) {
        return $http.get('/biddinganswerquestions/list',{
            params: data

        })
    }

    //添加
    function addAnswer(data){
        return $http.post('/biddinganswerquestions/add',data)
    }
    //编辑
    function editAnswer(data){
        return $http.post('/biddinganswerquestions/edit',data)
    }
    //id查询
    function findAnswerId(data){
        return $http.get('/biddinganswerquestions/answer',{
            params:data
        })
    }
    //分页总条数
    function countAnswer(){
        return $http.get('/biddinganswerquestions/count')
    }
    //删除
    function deleteAnswer(data){
        return $http.get('/biddinganswerquestions/delete',{
            params: data

        })
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
    //文件附件列表
    function questionFiles(data) {
        return $http.get('/questionFiles/files',{
            params:data
        })
    }
});
