var app = angular.module('openingEdit', ['toastr']);
app.controller('openingEditCtrl', function($scope, openingSer,$stateParams,$state,toastr){
$scope.showed=true
    openingSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.editOpening.biddingNumber};
        openingSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    var infoData ={id: $stateParams.id};
    //获取ID
    openingSer.findBidOpeningId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.editOpening = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.openEditFun = function(){
        var vm = $scope;
        vm.editOpening.bidOpeningTime = angular.element('.bidOpeningTime').val();
        vm.editOpening.biddingNumber = angular.element('.num').val();
        vm.editOpening.projectName = angular.element('.na').val();
        openingSer.editBidOpening(vm.editOpening).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.openingInfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





