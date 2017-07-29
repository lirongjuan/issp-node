var app = angular.module('missionGroupAdd', ['toastr']);
app.controller('missionGroupAddCtrl', function($scope, missionGroupSer,$state,toastr){

    missionGroupSer.allGroup().then(function(response){
        if(response.data.code == 0){
            $scope.allGroup = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.missionGroupAddFun = function(){
        var data = $scope.data;
        missionGroupSer.addmissionGroup(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.schedulejob.missionGroup.list[12]');
                toastr.success( "成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





