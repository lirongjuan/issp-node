var app = angular.module('missionEdit', ['toastr']);
app.controller('missionEditCtrl', function($scope, missionSer,$state,toastr,$stateParams){
    var emaiId = {id : $stateParams.id};
    //获取所有组
     missionSer.allGroup().then(function(response){
        if(response.data.code == 0){
            $scope.allGroup = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取值
    missionSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
   
    //提交
    $scope.missionEditFun = function(){
        var data = $scope.data;
        missionSer.editmission(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.schedulejob.mission.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});