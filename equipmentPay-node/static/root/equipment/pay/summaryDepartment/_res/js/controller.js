
var app = angular.module('summaryDepartment', ['toastr']);
app.controller('summaryDepartmentCtrl', function($scope, paingSer,toastr){

    $scope.showed=true;
    $scope.collect = function(){
       
        paingSer.summaryDepartment().then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});