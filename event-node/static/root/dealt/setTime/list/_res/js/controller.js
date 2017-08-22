var app = angular.module('setTimeList', ['ng-pagination','toastr']);
app.controller('setTimeListCtrl',function($scope,setTimeSer,toastr,$stateParams,$state){
    $scope.$emit('changeId', null);
    $scope.$emit('changeName', null);
    $scope.$emit('changePermissions', null);
    //获取id
    if($stateParams.name && $stateParams.permissions){
        switch ($stateParams.name2){
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){ //取消解冻
        $scope.congealShow = false;
        $state.go('root.dealt.setTime.list[12]',{permissions:null,name2:null,name:null});
    };

    $scope.selectList = function(event){
        angular.forEach($scope.standardLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeName', event.name);
        $scope.$emit('changePermissions', event.permissions);
    };
    $scope.conFn = function(){ //确认冻结
        var data = {
            name:$stateParams.name,
            permissions :$stateParams.permissions,
        };
        setTimeSer.congealTime(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
               /* $scope.$emit('changeId', null);*/
                $scope.$emit('changeName', null);
                $scope.$emit('changePermissions', null);
                $scope.delShow = false;
                $state.go('root.dealt.setTime.list[12]',{permissions:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
     var page = {
        name:$stateParams.name || " ",
        permissions :$stateParams.permissions || " ",
    };
        setTimeSer.listTime(page).then(function(response){
            if(response.data.code==0){
                $scope.standardLists = response.data.data;
                if($stateParams.name && $stateParams.permissions){
                    if($stateParams.name.indexOf('&') && $stateParams.permissions.indexOf('&')){
                        $stateParams.name = $stateParams.name.split('&')[0];
                        $stateParams.permissions = $stateParams.permissions.split('&')[0];
                    }
                    angular.forEach($scope.standardLists,function(obj){
                        if(obj.name == $stateParams.name && obj.permissions == $stateParams.permissions){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeName', $stateParams.name);
                    $scope.$emit('changePermissions', $stateParams.permissions);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    $scope.moreList = function(event){
        angular.forEach($scope.standardLists,function(obj){
            if(event.name!==obj.name && event.permissions!==obj.permissions){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
   /* $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.standardLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });*/
    //解冻
    $scope.thaw = function(event){
        var data = {
            name:event.name,
            permissions :event.permissions,
        };
        setTimeSer.thawTime(data).then(function(response){

            if(response.data.code==0){
                event.status = "THAW";
                toastr.success("解冻成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    }
})
;


