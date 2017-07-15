var app = angular.module('materialList', ['ng-pagination','toastr','ipCookie']);
app.controller('materialListCtrl',function($scope,materialSer,toastr,ipCookie,$location,$stateParams,$state){
    $scope.$emit('changeId', null);

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
        $state.go('root.contract.material.list[12]',{id:null,name:null});
    };
    var count =0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        materialSer.deleteMaterial(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow =false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.contract.material.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.contract.material.list[12]',{id:null,name:null,page:$stateParams.page-1});
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
        materialSer.congealMaterial(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.contract.material.list[12]',{id:null,name:null});

            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //----------------------------------------------------------------

    $scope.selectList = function(event){
        angular.forEach($scope.materialLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        ;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page',$stateParams.page);
    };

    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page||1
        };
        materialSer.listMaterial(pages).then(function(response){
            if(response.data.code==0){
                $scope.materialLists = response.data.data;

                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.materialLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    materialSer.countMaterial().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.materialLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.materialLists,function(obj){
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
        }
        materialSer.thawMaterial(data).then(function(response){

            if(response.data.code==0){
                event.status = "THAW";
                toastr.success( event.customerName+"解冻成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    }


})
;


