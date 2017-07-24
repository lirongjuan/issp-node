var app = angular.module('analyseYearsEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('analyseYearsEditCtrl', function($scope,$state,$stateParams,toastr,analyseYearsSer){

    var getId = {id:$stateParams.id};
    analyseYearsSer.getYears(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的地区
    analyseYearsSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    analyseYearsSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.WeekEditFun = function(){
        analyseYearsSer.editYears($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.check.analyseYears.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





