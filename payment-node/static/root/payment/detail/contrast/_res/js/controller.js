var app = angular.module('detailContrast', ['toastr']);
app.controller('detailContrastCtrl', function($scope, detailSer,$state,toastr){
    $scope.selects = ['MONTH','QUARTER','YEAR'];
    $scope.myFunc = function(val) {
       if(val == 'MONTH'){
           $scope.quarter = '';
           $scope.year = '';
       }else if(val == 'QUARTER'){
           $scope.month = '';
           $scope.year = '';
       }else if(val == 'YEAR'){
           $scope.month = '';
           $scope.quarter = '';
       }
    };
    $scope.collect = function() {
        var data = {
            timeStatus: $scope.timeStatus,
            compareStatus: $scope.compareStatus,
            month: $scope.month,
            year: $scope.year,
            quarter: $scope.quarter,
        };
         for(key in data){
             if(data[key] == ''){
                 delete data.key
             }
         }
        detailSer.summaryContrast(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.summaryLists = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});





