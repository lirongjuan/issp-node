var app = angular.module('mainfeeAdd', ['toastr']);
app.controller('checkindexAddCtrl', function($scope, checkindexSer,$state,toastr){

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        checkindexSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.check.checkindex.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };
});



