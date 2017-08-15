var app = angular.module('IncomeEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('IncomeEditCtrl', function($scope,$state,$stateParams,toastr,IncomeSer){

    var getId = {id:$stateParams.id};
    IncomeSer.getIncome(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });

    $scope.IncomeEditFun = function(){
        IncomeSer.editIncome($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.cost.Income.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





