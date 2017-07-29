var app = angular.module('controlSummary', ['toastr','chart.js']);
app.controller('controlSummaryCtrl', function($scope, controlSer,$state,toastr){
    $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
    $scope.series = ['Series A', 'Series B', 'Series C'];
    controlSer.ectSummary().then(function(response){
        if(response.data.code == 0){
            $scope.summaryLists = response.data;
               $scope.data = [
                   [
                       $scope.summaryLists.data[0].actualCar,
                       $scope.summaryLists.data[0].actualCost,
                       $scope.summaryLists.data[0].actualIncome,
                       $scope.summaryLists.data[0].actualOther,
                       $scope.summaryLists.data[0].actualProfit,
                       $scope.summaryLists.data[0].actualTotal,
                       $scope.summaryLists.data[0].targetCar,
                       $scope.summaryLists.data[0].targetCost,
                       $scope.summaryLists.data[0].targetIncome,
                       $scope.summaryLists.data[0].targetOther,
                       $scope.summaryLists.data[0].targetProfit,
                       $scope.summaryLists.data[0].targetTotal,
                   ],
                   [
                       $scope.summaryLists.data[1].actualCar,
                       $scope.summaryLists.data[1].actualCost,
                       $scope.summaryLists.data[1].actualIncome,
                       $scope.summaryLists.data[1].actualOther,
                       $scope.summaryLists.data[1].actualProfit,
                       $scope.summaryLists.data[1].actualTotal,
                       $scope.summaryLists.data[1].targetCar,
                       $scope.summaryLists.data[1].targetCost,
                       $scope.summaryLists.data[1].targetIncome,
                       $scope.summaryLists.data[1].targetOther,
                       $scope.summaryLists.data[1].targetProfit,
                       $scope.summaryLists.data[1].targetTotal,
                   ],
                   [
                       $scope.summaryLists.data[2].actualCar,
                       $scope.summaryLists.data[2].actualCost,
                       $scope.summaryLists.data[2].actualIncome,
                       $scope.summaryLists.data[2].actualOther,
                       $scope.summaryLists.data[2].actualProfit,
                       $scope.summaryLists.data[2].actualTotal,
                       $scope.summaryLists.data[2].targetCar,
                       $scope.summaryLists.data[2].targetCost,
                       $scope.summaryLists.data[2].targetIncome,
                       $scope.summaryLists.data[2].targetOther,
                       $scope.summaryLists.data[2].targetProfit,
                       $scope.summaryLists.data[2].targetTotal,
                   ],
               ];
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collectFun = function () {
        var data={
            area:$scope.area,
            project:$scope.project,
            name:$scope.name,
            year:$scope.year,
            month:$scope.month
        };
        controlSer.ectSummary(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.summaryLista = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }


});