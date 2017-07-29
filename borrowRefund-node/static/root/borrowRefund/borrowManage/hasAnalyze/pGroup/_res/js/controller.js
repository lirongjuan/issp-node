var app = angular.module('pGroup', ['toastr']);
app.controller('pGroupCtrl', function($scope, hasAnalyzeSer,toastr){

    $scope.showed = true;
    //获取所有人
    hasAnalyzeSer.allgetPGroup().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collect = function(){
        var data = {projectGroup:$scope.data.projectGroup}
        hasAnalyzeSer.collectProjectGroup(data).then(function(response){
            if(response.data.code == 0){
                $scope.showed = false;
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




