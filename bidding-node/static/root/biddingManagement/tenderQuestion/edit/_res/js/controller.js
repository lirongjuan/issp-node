var app = angular.module('questionEdit', ['toastr']);
app.controller('questionEditCtrl', function($scope, questionSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    questionSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });

    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.editQuestions.biddingNumber};
        questionSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //获取ID
    questionSer.findAnswerId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.editQuestions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.questionEditFun = function(){
        var vm = $scope;
        vm.editQuestions.officeHour = angular.element('.officeHour').val();
        vm.editQuestions.biddingNumber = angular.element('.num').val();
        vm.editQuestions.projectName = angular.element('.na').val();
        questionSer.editAnswer(vm.editQuestions).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.tenderQuestion.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





