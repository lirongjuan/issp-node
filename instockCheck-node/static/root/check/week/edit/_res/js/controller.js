var app = angular.module('weekEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('weekEditCtrl', function($scope,$state,$stateParams,toastr,weekSer){

    var getId = {id:$stateParams.id};
    weekSer.getWeek(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    weekSer.getUserAll().then(function (response){
        if(response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.weekEditFun = function(){
        weekSer.editWeek($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.check.week.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





