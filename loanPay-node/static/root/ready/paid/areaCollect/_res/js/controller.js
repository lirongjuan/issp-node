var app = angular.module('areaCollect', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('areaCollectCtrl', function($scope,$state,toastr,paidSer){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取行业
    paidSer.getAreaAll().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary = {onSelectionChanged(){
        var vm ={areas:$scope.areas}
        paidSer.areaPaid(vm).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                angular.forEach($scope.summaryLists, function(item, index){
                    if(item.work == "合计"){
                        $scope.tabTit = item;
                    }
                });
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }};

});



