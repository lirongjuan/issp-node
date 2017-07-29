
var app = angular.module('servecustomerAdd', ['toastr']);
app.controller('servereCordAddcustomerCtrl', function($scope, servereCordSer,$state,toastr,$stateParams){
    //添加
    $scope.customerAddFun = function(){
         $scope.data.marketServeId = $stateParams.id;
        var data = $scope.data;
        servereCordSer.addCustomerinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.marketActivity.servereCord.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg ,'温馨提示');
            }
        });
    };
});




