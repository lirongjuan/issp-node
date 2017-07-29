var app = angular.module('missionGroupEdit', ['toastr']);
app.controller('missionGroupEditCtrl', function($scope, missionGroupSer,$state,toastr,$stateParams){
    var emaiId = {id : $stateParams.id};
    //获取值
    missionGroupSer.getFourById(emaiId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    
    //提交
    $scope.missionGroupEditFun = function(){
        var data = $scope.data;
        missionGroupSer.editmissionGroup(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.schedulejob.missionGroup.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});