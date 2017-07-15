var app = angular.module('summarySelect', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('summarySelectCtrl',function($scope,summarySer,toastr){

    $scope.Anfn =function(){
            summarySer.summarylistInfo($scope.selectAn).then(function(response){
                if(response.data.code == 0){
                    $scope.infoLists = response.data.data;
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });

            $scope.selectList = function(event){
                angular.forEach($scope.infoLists, function(obj){
                    obj._selectList = false
                });
                event._selectList = true;
                //向父Ctrl传递事件
                $scope.$emit('changeId', event.id);
            };
            //点击更多详细
            $scope.moreList = function(event){
                angular.forEach($scope.infoLists,function(obj){
                    if(event.id!==obj.id){
                        obj._moreList = false
                    }
                });
                event._moreList = !event._moreList;
            };
    }
});
