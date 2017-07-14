var app = angular.module('taxAdd', ['toastr']);
app.controller('taxAddCtrl', function($scope, taxSer,$state,toastr){
    //添加
    $scope.taxAddFun = function(){
        var d =  angular.element('.time').val()
        var data = $scope.data;
        data.changeDate=d;
        taxSer.changeAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.Industrial.tax.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });


    };
});





