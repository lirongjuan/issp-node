var app = angular.module('MaterialEdit', ['toastr']);
app.controller('MaterialEditCtrl', function($scope, MaterialSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    MaterialSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.editTender.biddingNumber};
        MaterialSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //获取ID
    MaterialSer.findSourceId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.editTender = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.tenderEditFun = function(){
        var vm = $scope;
        vm.editTender.biddingNumber = angular.element('.num').val();
        vm.editTender.projectName = angular.element('.na').val();
        MaterialSer.editSource(vm.editTender).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.tenderMaterial.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





