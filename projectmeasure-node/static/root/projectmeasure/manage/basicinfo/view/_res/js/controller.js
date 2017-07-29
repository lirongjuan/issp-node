var app = angular.module('view', ['toastr']);
app.controller('viewCtrl',function($scope,basicinfoSer,toastr,$stateParams) {
   
    //查看更多
    $scope.moreList = function(){
        $scope.isShow = !$scope.isShow;
    };
    var viewData = {id:$stateParams.id}
    basicinfoSer.getOneById1(viewData).then(function(response){
        if(response.data.code == 0){
            $scope.list = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
});
