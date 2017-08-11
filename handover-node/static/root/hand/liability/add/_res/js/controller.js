var app = angular.module('liabilityAdd', ['toastr','ipCookie']);
app.controller('liabilityAddCtrl', function($scope,$state,toastr,liabilitySer){

    $scope.liabAddFun = function(){
        liabilitySer.addliab($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.liability.list[12]');
                toastr.success("已成功添加!", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


