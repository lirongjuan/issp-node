var app = angular.module('costEdit', ['toastr']);
app.controller('costEditCtrl', function($scope,$state,$stateParams,toastr,costSer){
    costSer.allGrade().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    var getId = {id:$stateParams.id};
    costSer.getCost(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.costEditFun = function(){
        costSer.editCost($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.cost.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





