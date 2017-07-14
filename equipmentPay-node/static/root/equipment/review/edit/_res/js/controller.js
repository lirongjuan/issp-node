var app = angular.module('reviewEdit', ['toastr']);
app.controller('reviewEditCtrl', function($scope, reviewSer,$stateParams,$state,toastr){
$scope.showed=true
    var infoData ={id: $stateParams.id};
    //获取ID
    reviewSer.findReviewId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.review = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.openEditFun = function(){
        var vm = $scope;
        reviewSer.editReview(vm.review).then(function(response){
            if(response.data.code == 0){
                $state.go('root.equipment.review.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





