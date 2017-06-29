var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, websiteSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    websiteSer.findWebsiteId(webData).then(function(response){
        if(response.data.code==0){
            $scope.webInfoEdit = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        websiteSer.editWebsite(vm.webInfoEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.websiteInfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





