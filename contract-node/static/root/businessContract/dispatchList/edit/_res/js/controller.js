var app = angular.module('dispatchEdit', ['toastr']);
app.controller('dispatchEditCtrl', function($scope, dispatchSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    dispatchSer.findDispatchWorkersId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editSheet = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });


    //编辑点击提交
    $scope.workersEditFun = function(){
        var vm = $scope;
        vm.editSheet.siginTime = angular.element('.siginTime').val();
        vm.editSheet.startProjectTime = angular.element('.addTime').val();
        vm.editSheet.endProjectTime = angular.element('.endTime').val();
        dispatchSer.editDispatchWorkers(vm.editSheet).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.dispatchList.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});
//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case "MOBILECOMMUNICATION":
                result = "移动通信类";
                break;
            case "SOFTDEVELOP":
                result = "软件开发类";
                break;
            case "INTELLIGENCESYSTEM":
                result = "智能系统集成类";
                break;
            case "ADVERT":
                result = "广告策划营销类";
                break;
            case "RENTCONTRACT":
                result = "租赁合同";
                break;
            case "CHARCONTRACT":
                result = "承包的项目合同";
                break;
            case "DISTRIBUTECONTRACT":
                result = "分包项目合同";
                break;
            case "SALECONTRACT":
                result = "销售合同";
                break;
            case "FRAMECONTRACT":
                result = "框架合同";
                break;
            case "SINGLECONTRACT":
                result = "单次合同";
                break;
        }
        return result;
    }
});




