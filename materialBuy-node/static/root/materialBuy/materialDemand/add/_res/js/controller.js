var app = angular.module('demandAdd', ['toastr']);
app.controller('demandAddCtrl', function($scope,demandSer,$state,toastr){
    //获取所有地区
    demandSer.getAllArea().then(function (response) {
        if(response.data.code==0){
            $scope.getAllAreas = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有人
    demandSer.getAllName().then(function (response) {
        if(response.data.code==0){
            $scope.getAllNames = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有项目组
    demandSer.getAllTeam().then(function (response) {
        if(response.data.code==0){
            $scope.getAllTeams = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.demandAddFun = function(){
        var vm = $scope;
        $scope.demand.requiredDate=angular.element('.requiredDate').val();
        demandSer.addDemand(vm.demand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.materialBuy.materialDemand.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});





