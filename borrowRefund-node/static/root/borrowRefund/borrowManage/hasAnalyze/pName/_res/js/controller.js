var app = angular.module('pName', ['toastr']);
app.controller('pNameCtrl', function($scope, hasAnalyzeSer,toastr){

    $scope.showed = true;
    //获取所有人
    hasAnalyzeSer.allgetPName().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    $scope.collect = function(){
        var data = {projectName:$scope.data.projectName};
        hasAnalyzeSer.collectProjectName(data).then(function(response){
            if(response.data.code == 0){
                $scope.showed = false;
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    };

});




