var app = angular.module('qualifiedAdd', ['toastr']);
app.controller('qualifiedAddCtrl', function($scope, qualifiedSer,$state,toastr){
    qualifiedSer.laborElation().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    qualifiedSer.socialSecurity().then(function(response){
        if(response.data.code == 0){
            $scope.socialData = response.data.data;
        }
    });
    qualifiedSer.nameQualified().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    $scope.quaAddFun = function(){
        var vm = $scope;
        qualifiedSer.addQualified(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.qualified.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





