var app = angular.module('coverIdea', ['toastr']);
app.controller('coverIdeaCtrl', function($scope, coverSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    //获取ID
    coverSer.coverId(infoData).then(function(response){
        if(response.data.code == 0){
            $scope.cover = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.coverEditFun = function(){
        var vm = $scope;
        // vm.cover.biddingNumber = angular.element('.num').val();
        // vm.cover.projectName = angular.element('.na').val();
        coverSer.coverIdea(vm.cover).then(function(response){
            if(response.data.code == 0){
                $state.go('root.rotation.cover.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





