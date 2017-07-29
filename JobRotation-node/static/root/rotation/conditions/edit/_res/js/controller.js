var app = angular.module('conditEdit', ['toastr']);
app.controller('conditEditCtrl', function($scope, conditSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    // conditSer.biddingNumber().then(function(response){
    //     if(response.data.code == 0){
    //         $scope.biddingNumbers = response.data.data;
    //     }
    // });

    // $scope.changSelect = function(){
    //     var obj={biddingNumber:$scope.condit.biddingNumber};
    //     conditSer.getBiddingNum(obj).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.projectNames = response.data.data;
    //         }
    //     });
    // };
    //获取ID
    conditSer.conditId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.condit = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.conditEditFun = function(){
        var vm = $scope;
        // vm.condit.biddingNumber = angular.element('.num').val();
        // vm.condit.projectName = angular.element('.na').val();
        conditSer.conditEdit(vm.condit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.conditions.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





