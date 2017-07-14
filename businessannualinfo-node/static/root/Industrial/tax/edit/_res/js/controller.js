var app = angular.module('taxEdit', ['toastr']);
app.controller('taxEditCtrl', function($scope, taxSer,$state,toastr,$stateParams){
    var taxId = {id : $stateParams.id};
    //获取值
    taxSer.changeOne(taxId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.taxEditFun = function(){
        var vm = $scope;
        var data = vm.data;

        var d =  angular.element('.time').val();
        data.changeDate=d;
        
        taxSer.changeEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.Industrial.tax.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});

