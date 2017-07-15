var app = angular.module('recordList', ['ng-pagination','toastr']);
app.controller('recordListCtrl',function($scope,toastr,usecarSer,$stateParams,$state){

    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除/解冻
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.finance.usecar.record.list[12]',{id:null,name:null});
    };
    var count =0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        usecarSer.deleteRecord(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow =false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.finance.usecar.record.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.finance.usecar.record.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

    $scope.conFn = function(){ //确认冻结
        var data = {
            id:$stateParams.id
        };
        usecarSer.congealRecord(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.finance.usecar.record.list[12]',{id:null,name:null});

            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //---------------------------------------------------------------
    $scope.selectList = function(event){
        angular.forEach($scope.usecarLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page',$stateParams.page);
    };

    $scope.moreList = function(event){
        angular.forEach($scope.usecarLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    //分页
    $scope.custom = {
        itemsCount: 1,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var listData = {
            page:page ||1
        };
        usecarSer.listUsecar(listData).then(function(response){
            if(response.data.code==0){
                $scope.usecarLists = response.data.data
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.usecarLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj.usecarLists = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg,"温馨提示");
            }
        });
    }
    usecarSer.countRecord().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg,"温馨提示");
        }
    });


     $scope.$on('deletedId',function(event,delid){
         angular.forEach($scope.usecarLists,function(obj){
             if(obj.id == delid){
                 obj._delete = true
             }
         })
     });
     //冻结
     $scope.$on('congealId',function(event,conid){
         angular.forEach($scope.usecarLists,function(obj){
             if(obj.id == conid){
                 obj.status = 'CONGEAL';
                 obj._selectList = false;
             }
         })
     });

     //解冻
     $scope.thaw = function(event){
         var data = {
             id :event.id
         };
         usecarSer.thawAngle(data).then(function(response){
             if(response.data.code==0){
                 event.status = "THAW"
             }else if(response.data.code==403){
                 toastr.error( "请登录用户", '温馨提示');
             }

         })
     }
});


