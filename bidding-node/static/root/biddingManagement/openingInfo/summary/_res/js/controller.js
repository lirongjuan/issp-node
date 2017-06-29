var app = angular.module('summary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryCtrl', function($scope, openingSer,toastr){
    $scope.cities = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    openingSer.getCity().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;

        }else {
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.getSummary ={onSelectionChanged(){

        openingSer.summaryOpen($scope.cities).then(function(response){
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





