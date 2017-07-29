var app = angular.module('archivesEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('archivesEditCtrl', function($scope, archivesSer,$state,toastr,$stateParams){
    var araId = {id : $stateParams.id};
    archivesSer.nameMessage().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.stringSettings = {displayProp: 'name'};
    archivesSer.nameReference(araId).then(function(response){
        if(response.data.code == 0){
            $scope.modelOptions = response.data.data;
        }
    });
    $scope.yhModel = [];
      //获取值
    archivesSer.getOneById(araId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.archivesEditFun = function(){
        var posName = [];
        angular.forEach($scope.yhModel,function(item){
            posName.push(item.name)
        });
        var vm = $scope;
        $scope.editInfo.accessNames = posName;
        archivesSer.editArchives(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.archives.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});