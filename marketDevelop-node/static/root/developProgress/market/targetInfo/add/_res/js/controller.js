var app = angular.module('targetInfoAdd', ['toastr']);
app.controller('targetInfoAddCtrl', function($scope, targetInfoSer,$state,toastr){

    //添加
    $scope.targetAddFun = function(){
        var vm = $scope;
        var data = {
            area : vm.addArea,
            type : vm.addType,
            course : vm.addCourse,
            customer_id : vm.addCustomer_id,
            remark : vm.addRemark
        };
        targetInfoSer.addTargetInfo(data).then(function(response){
                console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.market.targetInfo.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




