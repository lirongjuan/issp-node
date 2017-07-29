var app = angular.module('hasCars', ['toastr']);
app.controller('hasCarsCtrl', function($scope,$state,toastr,hasSer){
    hasSer.summaryUse().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});





