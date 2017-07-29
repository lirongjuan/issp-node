var app = angular.module('hasContrast', ['toastr']);
app.controller('hasContrastCtrl', function($scope,$state,toastr,hasSer){
    $scope.collect = function(){
        var data = {month:$scope.month};
        hasSer.contrastHas(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





