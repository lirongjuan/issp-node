var app = angular.module('obligationsAdd', ['toastr']);
app.controller('obligationsAddCtrl', function($scope, obligationsSer,$state,toastr){
    //添加
    $scope.obligationsAddFun = function(){
        var t =  angular.element('.yon').val();
        var data = $scope.data;
        data.object=t;
        console.log(data)
        obligationsSer.obligationsAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.obligations.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





