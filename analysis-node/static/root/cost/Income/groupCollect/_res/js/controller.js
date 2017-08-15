var app = angular.module('groupCollect', ['toastr','toastr','ipCookie']);
app.controller('groupCollectExportCtrl', function($scope,$state,toastr,IncomeSer){
  
    //获取行业
    IncomeSer.getGroupAll().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.groupCollects = function(){
        IncomeSer.groupIncome($scope.department).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                angular.forEach($scope.summaryLists,function(item,index){
                    if(item.work=="合计"){
                        $scope.tabTit = item;
                    }
                });
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

});



