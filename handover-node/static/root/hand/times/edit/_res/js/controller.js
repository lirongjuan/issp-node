var app = angular.module('timesEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('timesEditCtrl', function($scope,$state,$stateParams,toastr,timesSer){

    var getId = {id:$stateParams.id};
    timesSer.getTimes(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.TimesEditFun = function(){
        timesSer.editTimes($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.hand.times.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





