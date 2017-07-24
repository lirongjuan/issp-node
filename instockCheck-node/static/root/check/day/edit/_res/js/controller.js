var app = angular.module('dayEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('dayEditCtrl', function($scope,$state,$stateParams,toastr,daySer){

    var getId = {id:$stateParams.id};
    daySer.getDay(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    daySer.getUserAll().then(function (response){
        if(response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.dayEditFun = function(){
        daySer.editDay($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.check.day.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





