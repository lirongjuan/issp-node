var app = angular.module('marketserveAdd', ['toastr']);
app.controller('coststatusAddCtrl', function($scope, coststatusSer,$state,toastr){
    //获取值
    coststatusSer.projectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.companyAddFun = function(){
        $scope.data.backDate = angular.element('.backDate').val();
        var data = $scope.data;
        coststatusSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.coststatus.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




