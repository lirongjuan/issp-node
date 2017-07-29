var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){

    //获取所有地区
    emailSer.allgetLender().then(function(response){
        if(response.data.code == 0){
            $scope.alleAreas = response.data.data;
        }else {
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    $scope.objLists = [];//对象列表
    $scope.emails = ['个人邮箱','公邮','自由录入'];
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };
    //添加
    $scope.emailAddFun = function(){
        var data = $scope.data;
        data.emails = $scope.objLists;
        emailSer.addSummery(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.summary.email.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});





