var app = angular.module('gradeList', ['ng-pagination','toastr']);
app.controller('gradeListCtrl',function($scope,gradeSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
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
        $state.go('root.project.grade.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        gradeSer.deleteGrade(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.pagination.itemsCount-count)%10){
                    $state.go('root.project.grade.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.project.grade.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };


    $scope.selectList = function(event){
        angular.forEach($scope.gradeLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.getId = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
        $scope.$emit('page',$location.search().page);
    };
    //分页
    $scope.pagination = {
        itemsCount: 2,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page||1
        };
        gradeSer.listGrade(pages).then(function(response){
            if(response.data.code==0){
                $scope.gradeLists = response.data.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.gradeLists, function (obj) {
                        if (obj.id == $stateParams.id.split('&')[0]) {
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
    }
    gradeSer.countGrade().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});


