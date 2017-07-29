var app = angular.module('archivesAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('archivesAddCtrl', function($scope, archivesSer,$state,toastr){
    archivesSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.stringSettings = {displayProp: 'name'};
    archivesSer.nameReference().then(function(response){
        if(response.data.code == 0){
            $scope.modelOptions = response.data.data;
        }
    });
    $scope.myVar = "admin";
    $scope.yhModel = [];
    $scope.archivesAddFun = function(){
        var posName = [];
        angular.forEach($scope.yhModel,function(item){
            posName.push(item.name)
        });
        var data={
            start:angular.element('.start').val(),
            end:angular.element('.end').val(),
            accessNames : posName,
            reason:$scope.reason,
            username:$scope.username
        };
        archivesSer.addArchives(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.archives.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





