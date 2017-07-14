var app = angular.module('peopleEdit', ['toastr']);
app.controller('peopleEditCtrl', function($scope, peopleSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    // peopleSer.biddingNumber().then(function(response){
    //     if(response.data.code == 0){
    //         $scope.biddingNumbers = response.data.data;
    //     }
    // });

    // $scope.changSelect = function(){
    //     var obj={biddingNumber:$scope.editpeoples.biddingNumber};
    //     peopleSer.getBiddingNum(obj).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.projectNames = response.data.data;
    //         }
    //     });
    // };
    //获取ID
    peopleSer.popId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.pop = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.peopleEditFun = function(){
        var vm = $scope;
        vm.pop.planArriveTime = angular.element('.startTime').val();
        vm.pop.actualArriveTime = angular.element('.endTime').val();
        vm.pop.auditor = angular.element('.num').val();
        peopleSer.popEdit(vm.pop).then(function(response){
            if(response.data.code == 0){
                $state.go('root.personnel.people.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





