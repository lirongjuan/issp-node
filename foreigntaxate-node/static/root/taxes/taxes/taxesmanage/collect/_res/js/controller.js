var app = angular.module('projectgroup', ['toastr','angularjs-dropdown-multiselect']);
app.controller('collectCtrl',function($scope,taxesmanageSer,toastr) {
    $scope.firstCompany = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    taxesmanageSer.getCompany().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    // $scope.collectFun = function(){
    //     var collectData = {
    //         company:$scope.company || ""
    //     }
    //     taxesmanageSer.collectList(collectData).then(function(response){
    //         if(response.data.code==0){
    //             $scope.data = response.data.data;
    //         }else{
    //             toastr.success('汇总失败','温馨提示')
    //         }
    //     });
    // }
    $scope.getSummary ={onSelectionChanged(){
        var data = {
            company: $scope.firstCompany || ''
        }
        taxesmanageSer.collectList(data).then(function(response){
            if($scope.firstCompany.length==0){
                $scope.summaryLists = {};
            }else {
                if(response.data.code == 0){
                    $scope.summaryLists = response.data.data;
                    angular.forEach($scope.summaryLists,function(item,index){
                        if(item.type=="合计"){
                            $scope.tabTit = item;
                        }
                    });
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            }

        })
    }}
});
