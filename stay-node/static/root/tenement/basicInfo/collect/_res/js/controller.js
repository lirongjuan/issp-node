var app = angular.module('basicInfoCollect', ['toastr','toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('basicInfoCollectCtrl', function($scope,$state,toastr,basicInfoSer){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取行业
    basicInfoSer.getAreaCollect().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    $scope.getSummary ={onSelectionChanged(){
        basicInfoSer.collectBasic($scope.words).then(function(response){
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
        })
    }}

});



