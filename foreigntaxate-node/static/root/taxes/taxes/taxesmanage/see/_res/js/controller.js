var app = angular.module('taxesmanageSee', ['ng-pagination','toastr']);
app.controller('taxesmanageSeeCtrl',function($scope,taxesmanageSer,toastr) {//areaLists
    $scope.areaList = {};
    $scope.collectFun = function(){
        $scope.month = angular.element(".month").val();//
        var viewData = {
            company:$scope.company || "",
            month:$scope.month || "",
            taxType:$scope.taxType || ""
        }
        taxesmanageSer.viewList(viewData).then(function(response){
            if(response.data.code==0){
                $scope.data = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    
});
