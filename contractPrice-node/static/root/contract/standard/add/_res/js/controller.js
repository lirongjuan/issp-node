var app = angular.module('standardAdd', ['toastr','ipCookie']);
app.controller('standardAddCtrl', function($scope,$state,toastr,standardSer,$location,ipCookie){

    $scope.standardAddFun = function(){
        $scope.add.date=angular.element('.time').val();
        standardSer.addStandard($scope.add).then(function(response){
            console.info($scope.add);
            if(response.data.code == 0){
                $state.go('root.contract.standard.list[12]');
                toastr.success( $scope.add.projectInner+"已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





