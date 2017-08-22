var app = angular.module('handled', ['toastr','toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('handledCtrl', function($scope,$state,toastr,alleventSer){
    $scope.positions = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    alleventSer.getAreaAll().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.vm = {};
    //获取周数
    $scope.handCollects = function(){
        var permitArr = [];
        angular.forEach($scope.positions, function(item){
            permitArr.push(item)
        });
        $scope.vm.areas = permitArr.join(',');
        if($scope.vm){
            alleventSer.handledCollect($scope.vm).then(function(response){
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
        }
        ;

    }
});



