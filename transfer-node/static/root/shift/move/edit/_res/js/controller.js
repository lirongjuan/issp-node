var app = angular.module('moveEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('moveEditCtrl', function($scope,$state,$stateParams,toastr,moveSer){

    var getId = {id:$stateParams.id};
    moveSer.getMove(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的地区
    moveSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    moveSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    //获取所有的用户
    moveSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.moveEditFun = function(){
        $scope.edit.applyDate=angular.element('.onetime').val();
        $scope.edit.transferTime=angular.element('.twotime').val();
        moveSer.editMove($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.shift.move.list[12]');
                    toastr.success($scope.edit.proposer + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





