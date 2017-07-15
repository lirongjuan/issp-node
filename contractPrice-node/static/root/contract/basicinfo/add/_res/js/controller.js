var app = angular.module('basicinfoAdd', ['toastr','ipCookie']);
app.controller('basicinfoAddCtrl', function($scope,$state,toastr,basicinfoSer,ipCookie,$location){
    //获取内部项目编号
    basicinfoSer.getInnerNum().then(function(response){
        if(response.data.code==0){
            $scope.NumbersInfo= response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.selPro=function(val){
        if(val){
            var data ={dispatchNum:val};
            basicinfoSer.getProjectByNum(data).then(function(response){
                if(response.data.code==0){
                    $scope.inner=response.data.data;
                }else{
                    toastr.error(response.data.msg,"温馨提示");
                }
            });
        }else{
            $scope.inner=null;
        }
    }
    //com
    $scope.com=function(val){
        if(val){
            $scope.add.completeTime = Number(val);
        }
    }
    $scope.fe=function(val){
        if(val){
            $scope.add.money = Number(val);
        }
    }

    $scope.basicAddFun = function(){
        clone($scope.dispatchNum,$scope.add);
        $scope.add.startProjectTime=angular.element('.startTime').val();
        $scope.add.endProjectTime=angular.element('.endTime').val();
        basicinfoSer.addBasicinfo($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.contract.basicinfo.list[12]');
                toastr.success( $scope.add.area+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
function clone(obj1,obj2){
    if(obj1){
        for(key in obj1){
            if(!obj2[key]){
                obj2[key] = obj1[key];
            }
        }
    }
}




