var app = angular.module('missionAdd', ['toastr']);
app.controller('missionAddCtrl', function($scope, missionSer,$state,toastr){

    missionSer.allGroup().then(function(response){
        if(response.data.code == 0){
            $scope.allGroup = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.missionAddFun = function(){
        var data = $scope.data;
        missionSer.addmission(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.schedulejob.mission.list[12]');
                toastr.success( "成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





