var app = angular.module('marketserveAdd', ['toastr']);
app.controller('personDemandAddCtrl', function($scope, marketserveSer,$state,toastr){
    //获取所有的项目名称
    marketserveSer.AllProjectNames().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else {
             toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.companyAddFun = function(){
        var data = $scope.data;
        marketserveSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.personDemand.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




