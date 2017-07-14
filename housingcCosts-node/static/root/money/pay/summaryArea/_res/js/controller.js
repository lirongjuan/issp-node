var app = angular.module('summaryArea', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryAreaCtrl', function($scope, paingSer,toastr){
    $scope.cities = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    paingSer.areaPaying().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;

        }else {
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.getSummary ={onSelectionChanged(){

        paingSer.summaryArea($scope.cities).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        })
    }}
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.openLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.openLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
});





