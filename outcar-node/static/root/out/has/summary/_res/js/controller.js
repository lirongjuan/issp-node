var app = angular.module('hasSummary', ['toastr']);
app.controller('hasSummaryCtrl', function($scope,$state,toastr,hasSer){
    hasSer.summaryHas().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});





