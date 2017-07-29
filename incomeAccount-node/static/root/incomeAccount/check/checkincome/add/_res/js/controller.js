var app = angular.module('checkincomeAdd', ['toastr']);
app.controller('checkincomeAddCtrl', function($scope, checkincomeSer,$state,toastr){

    //添加
    $scope.AddFun = function(){
        $scope.data.time = angular.element('.time').val();
        var data = $scope.data;
        checkincomeSer.addData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.check.checkincome.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };
});



