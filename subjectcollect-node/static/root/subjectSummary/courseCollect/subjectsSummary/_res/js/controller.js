var app = angular.module('subjectsSummary', ['toastr']);
app.controller('subjectsSummaryCtrl', function($scope, courseCollectSer,toastr){

    $scope.showed=true
    courseCollectSer.subjectsOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
            
        }
    });
    $scope.changSelect = function(){
        var data={firstSub:$scope.firstSubject};
        courseCollectSer.subjectsTwo(data).then(function(response){
            if(response.data.code == 0){
                $scope.secondLevel = response.data.data;
                
            }
        });
    };
    $scope.changThird = function(){
        var data={
            firstSub:$scope.firstSubject,
            secondSub:$scope.secondSubject
        };
        courseCollectSer.subjectsThree(data).then(function(response){
            if(response.data.code == 0){
                $scope.thirdLevel = response.data.data;
                
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
        courseCollectSer.subjectSummary(vm.sum).then(function(response){

            if(response.data.code == 0){
                if( vm.sum.firstSubject == undefined || vm.sum.firstSubject == ''){
                    $scope.showed=true;

                }else {
                    $scope.showed = false;
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




