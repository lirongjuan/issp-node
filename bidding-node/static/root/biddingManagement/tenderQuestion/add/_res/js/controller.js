var app = angular.module('questionAdd', ['toastr']);
app.controller('questionAddCtrl', function ($scope, questionSer, $state, toastr) {
    $scope.showed=true
    questionSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.answer.biddingNumber};
        questionSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //添加
    $scope.questionAddFun = function () {
        var vm = $scope;
        vm.answer.officeHour = angular.element('.officeHour').val();
        vm.answer.biddingNumber = angular.element('.num').val();
        vm.answer.projectName = angular.element('.na').val();

        questionSer.addAnswer(vm.answer).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.tenderQuestion.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




