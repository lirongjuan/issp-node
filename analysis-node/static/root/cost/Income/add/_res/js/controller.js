var app = angular.module('IncomeAdd', ['toastr','ipCookie']);
app.controller('IncomeAddCtrl', function($scope,$state,toastr,IncomeSer){

    $scope.IncomeAddFun = function(){
        IncomeSer.addIncome($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.cost.Income.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


