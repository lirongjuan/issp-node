var app = angular.module('view', ['toastr']);
app.controller('viewCtrl',function($scope,marketserveSer,toastr,$stateParams) {
    
    //查看更多
    $scope.moreList = function(){
        $scope.list._moreList = !$scope.list._moreList;
    };  
    var viewData = {id:$stateParams.id}
    marketserveSer.getOneById(viewData).then(function(response){
        if(response.data.code == 0){
            $scope.list = response.data.data;
            $scope.list._selectList = true;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

});
