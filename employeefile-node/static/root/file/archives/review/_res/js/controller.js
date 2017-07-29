var app = angular.module('archivesReview', ['toastr']);
app.controller('archivesReviewCtrl', function($scope, archivesSer,$state,toastr,$stateParams){
    var reviewData ={id: $stateParams.id};
    archivesSer.getOneById(reviewData).then(function(response){
        if(response.data.code== 0){
            $scope.reviewId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //审核
    $scope.archivesFun = function(){
        var vm = $scope;
        var data = {
            id:vm.reviewId.id,
            pass: vm.reviewId.pass,
            opinion: vm.reviewId.opinion
        };

        archivesSer.reviewArchives(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.archives.review.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





