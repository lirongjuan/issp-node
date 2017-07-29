var app = angular.module('costAdd', ['toastr',]);
app.controller('costAddCtrl', function($scope,$state,toastr,costSer){
    costSer.allGrade().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.costAddFun = function(){
        costSer.addCost($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.cost.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





