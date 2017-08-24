var app = angular.module('rechargeCollect', ['toastr','toastr','ipCookie']);
app.controller('rechargeCollectCtrl', function($scope,$state,toastr,rechargeSer){
    rechargeSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.getNo=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.Anfn =function(){
        if($scope.selectAn){
            $scope.selectAn.startTime=angular.element('.onetime').val();
            $scope.selectAn.endTime=angular.element('.twotime').val();
            rechargeSer.RechargeCollect($scope.selectAn).then(function(response){
                if(response.data.code == 0){
                    $scope.infoLists = response.data.data;

                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });

            $scope.selectList = function(event){
                angular.forEach($scope.infoLists,function(obj){
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
        }else{
            toastr.info("请把信息补充完整！", '温馨提示');
        }
    }

});
