var app = angular.module('workEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('workEditCtrl', function($scope,$state,$stateParams,toastr,workSer){

    var getId = {id:$stateParams.id};
    workSer.getWork(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的项目组
    workSer.getGroup().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    workSer.getStation().then(function (response){
        if (response.data.code==0){
            $scope.station=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.workEditFun = function(){
        $scope.edit.workJoinStartTime=angular.element('.workJoinStartTime').val();
        $scope.edit.workJoinendTime=angular.element('.workJoinendTime').val();
        workSer.editWork($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.hand.work.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





