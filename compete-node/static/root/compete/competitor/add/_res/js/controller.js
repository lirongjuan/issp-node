var app = angular.module('companyAdd', ['toastr']);
app.controller('companyAddCtrl', function($scope, competitorSer,$state,toastr,$location,ipCookie){
    //添加竞争对手
    $scope.companyAddFun = function(){
        var data = $scope.data;
        var vm =this;
        competitorSer.addCompanyAbility(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.competitor.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





