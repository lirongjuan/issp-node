
var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr,$location){

    $scope.selectTpye = function(val){
        var data = {type:val}
        //获取所有项目组
        emailSer.allProject(data).then(function(response){
            if(response.data.code == 0){
                $scope.allProjects = response.data.data;
            }else {
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    }
    $scope.objLists = [];//对象列表
    $scope.emails = ['个人邮箱','公邮','自由录入'];
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    $scope.dbSend = function (index) {//双击删除
        $scope.objLists.splice(index,1);
    }

    //添加
    $scope.emailAddFun = function(){
        var data = $scope.data;
        data.startTime = angular.element('.startTime').val();
        data.endTime = angular.element('.endTime').val();
        data.emails = $scope.objLists;
        emailSer.addSummery(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.email.list[12]');
                toastr.success( "成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        });

    };
    
});





