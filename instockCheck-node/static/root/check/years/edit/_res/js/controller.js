var app = angular.module('yearsEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('yearsEditCtrl', function($scope,$state,$stateParams,toastr,yearsSer){

    var getId = {id:$stateParams.id};
    yearsSer.getYears(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的用户
    yearsSer.getUserAll().then(function (response){
        if(response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.YearsEditFun = function(){
        yearsSer.editYears($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.check.years.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





