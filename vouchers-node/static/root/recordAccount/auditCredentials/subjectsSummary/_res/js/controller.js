var app = angular.module('subjectsSummary', ['toastr']);
app.controller('subjectsSummaryCtrl', function($scope, credentialsSer,toastr){

    $scope.showed=true
    credentialsSer.LevelOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.changSelect = function(){
        var data={firstSel:$scope.firstSubject};
        credentialsSer.LevelTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSel:$scope.firstSubject,
            secondSel:$scope.secondSubject
        };
        credentialsSer.LevelThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            firstSubject:vm.firstSubject,
            secondSubject:vm.secondSubject,
            thirdSubject:vm.thirdSubject
        };
        credentialsSer.subjectSummary(vm.sum).then(function(response){

            if(response.data.code == 0){
                if( vm.sum.firstSubject == undefined || vm.sum.firstSubject == ''){
                    $scope.showed=true;

                }else {
                    $scope.showed = false;
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    };

});




