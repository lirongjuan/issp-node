var app = angular.module('difference', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('differenceCtrl',function($scope,paidSer,toastr){

    $scope.Anfn =function(){
            var vm= {} ;
            vm.startTime = angular.element('.startTime').val();
            vm.endTime = angular.element('.endTime').val();
            paidSer.listSelect(vm).then(function(response){
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
                angular.forEach($scope.infoLists, function(obj){
                    if(event.id !== obj.id){
                        obj._moreList = false
                    }
                });
                event._moreList = !event._moreList;
            };

    }

});
