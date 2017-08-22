var app = angular.module('classify', ['toastr','toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('classifyCtrl', function($scope,$state,toastr,alleventSer){
    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};
    //获取地区
    $scope.workOptions=[{id:"SEE",value:"查看"},{id:"MAKE",value:"制作"},{id:"ADUIT",value:"审核"}
    ,{id:"CONFIRM",value:"确认"},{id:"CHECK",value:"核对"},{id:"ANALYZE",value:"分析"}]
   $scope.vm={};
    //获取周数
    $scope.classCollects = function(){
        var permitArr = [];
        angular.forEach($scope.positions, function(item){
            permitArr.push(item.id)
        });
        $scope.vm.classifys = permitArr.join(',');
        if($scope.vm){
            alleventSer.classCollect($scope.vm).then(function(response){
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



