var app = angular.module('hasArea', ['toastr']);
app.controller('hasAreaCtrl', function($scope,$state,toastr,hasSer){
    hasSer.summaryArea().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});





