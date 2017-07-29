var app = angular.module('dispatchAdd', ['toastr']);
app.controller('dispatchAddCtrl', function($scope, dispatchSer,$state,toastr){
    //获取内部项目编号
    dispatchSer.getInnerNum().then(function(response){
        if(response.data.code==0){
            $scope.inner= response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    // var selects = [
    //     {
    //         name:'businessType',
    //         list:{
    //             MOBILECOMMUNICATION: '移动通信类',
    //             SOFTDEVELOP: '软件开发类',
    //             INTELLIGENCESYSTEM: '智能系统集成类',
    //             ADVERT: '广告策划营销类'
    //         }
    //     },
    //     {
    //         name:'businessCooperate',
    //         list:{
    //             RENTCONTRACT: '租赁合同',
    //             CHARCONTRACT: '承包的项目合同',
    //             DISTRIBUTECONTRACT: '分包项目合同',
    //             SALECONTRACT: '销售合同',
    //             FRAMECONTRACT: '框架合同',
    //             SINGLECONTRACT: '单次合同'
    //         }
    //     }
    // ];
    // console.log(selects);
    // selects.forEach(function (select) {
    //     if($scope.workers[select.name]){
    //         var isFind;
    //             for (var name in select.list) {
    //                 var text = select.list[name];
    //                 if ($scope.workers[select.name] == text) {
    //                     $scope.workers[select.name] = name;
    //                     isFind = name;
    //                     break;
    //                 }
    //             }
    //             if(isFind){
    //                 $scope.workers[select.name] = isFind;
    //             }else{
    //                 for (var name in select.list) {
    //                     var text = select.list[name];
    //                     if ($scope.workers[select.name+"_default"] == text) {
    //                         $scope.workers[select.name+"_default"] = name;
    //                         isFind = name;
    //                         break;
    //                     }
    //                 }
    //                 $scope.workers[select.name] = isFind;
    //             }
    //     }
    // });
    //获取项目合同
    $scope.selPro = function(val){
        if(val){
            var data = {innerProjectNum:val};
            dispatchSer.getProjectNum(data).then(function(response){
                if(response.data.code==0){
                    $scope.projectNum= response.data.data;
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }else {
            $scope.projectNum = null;
        }
    };
    //添加
    $scope.workersAddFun = function(){
        clone($scope.projectNum,$scope.workers);
        var vm = $scope;
        vm.workers.siginTime = angular.element('.siginTime').val();
        vm.workers.startProjectTime = angular.element('.addTime').val();
        vm.workers.endProjectTime = angular.element('.endTime').val();
        dispatchSer.addDispatchWorkers(vm.workers).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.dispatchList.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };

});

function clone(obj1,obj2){
    if(obj1){
        for(key in obj1){
            if(!obj2[key]){
                obj2[key] = obj1[key];
            }
        }
    }
}
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



