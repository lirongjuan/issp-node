var app = angular.module('peopleAdd', ['toastr']);
app.controller('peopleAddCtrl', function ($scope, peopleSer, $state, toastr) {
    $scope.showed=true
    // peopleSer.biddingNumber().then(function(response){
    //     if(response.data.code == 0){
    //         $scope.biddingNumbers = response.data.data;
    //     }
    // });

    // $scope.changSelect = function(){
    //     var obj={biddingNumber:$scope.answer.biddingNumber};
    //     peopleSer.getBiddingNum(obj).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.projectNames = response.data.data;
    //         }
    //     });
    // };
    //添加
    $scope.peopleAddFun = function () {
        var vm = $scope;
        vm.pop.planArriveTime = angular.element('.startTime').val();
        vm.pop.actualArriveTime = angular.element('.endTime').val();
        vm.pop.auditor = angular.element('.num').val();
console.log(vm.pop)
        peopleSer.popAdd(vm.pop).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.personnel.people.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




