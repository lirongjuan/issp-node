var app = angular.module('meansAdd', ['toastr']);
app.controller('meansAddCtrl', function($scope, meansSer,$state,toastr){
    //添加
    $scope.meansAddFun = function(){
        var data = $scope.data;
        meansSer.meansAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.means.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





