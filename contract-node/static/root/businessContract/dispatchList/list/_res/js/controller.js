var app = angular.module('dispatchWork', ['ng-pagination','toastr']);
app.controller('dispatchWorkCtrl',function($scope,dispatchSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.businessContract.dispatchList.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        dispatchSer.deleteDispatchWorkers(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.businessContract.dispatchList.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.businessContract.dispatchList.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        var listData = {
            page:page || 1
        };
        dispatchSer.dispatchWorkersList(listData).then(function(response){
            if(response.data.code==0){
                $scope.dispatchLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.dispatchLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        //搜索功能
        $scope.collect = function(){

            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                innerProject: $scope.innerProject,
                outProjectNum: $scope.outProjectNum,
                saleContractNum: $scope.saleContractNum,
                businessType: $scope.businessType,
                businessSubject: $scope.businessSubject,
                businessCooperate: $scope.businessCooperate,
                majorCompany: $scope.majorCompany,
                subCompany: $scope.subCompany,
                area: $scope.area,
                dispatchProject: $scope.dispatchProject,
                dispatchNum: $scope.dispatchNum
            };
            dispatchSer.countDispatchWorkers(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                innerProject: $scope.innerProject,
                outProjectNum: $scope.outProjectNum,
                saleContractNum: $scope.saleContractNum,
                businessType: $scope.businessType,
                businessSubject: $scope.businessSubject,
                businessCooperate: $scope.businessCooperate,
                majorCompany: $scope.majorCompany,
                subCompany: $scope.subCompany,
                area: $scope.area,
                dispatchProject: $scope.dispatchProject,
                dispatchNum: $scope.dispatchNum,
                page: page
            };
            dispatchSer.dispatchWorkersList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.dispatchLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    // 搜索功能
    $scope.titles = ['内部项目名称','合同外部编号','对应销售合同号','业务类型','业务方向科目','合作方式','总包单位名称','分包单位名称','地区','合同属性','立项情况'];
    $scope.selectList = function(event){
        angular.forEach($scope.dispatchLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.dispatchLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 3, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    dispatchSer.countDispatchWorkers().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

});

