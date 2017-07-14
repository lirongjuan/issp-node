
var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, reviewSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){
        var vm = $scope;
        reviewSer.summaryReview(vm.data.month).then(function(response){
            if(response.data.code == 0){
                if( vm.data.month == undefined || vm.data.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





