var app = angular.module('infoAdd', ['toastr','ipCookie']);
app.controller('infoAddCtrl', function($scope,$state,toastr,infoSer,ipCookie,$location){

    $scope.infoAddFun = function(){
        infoSer.addInfo($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.statement.info.list[12]');
                toastr.success( $scope.add.name+"已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





