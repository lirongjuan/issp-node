var app = angular.module('cooperation', [{
    files:[
        "root/ability/cooperation/_res/js/service.js"
    ]
}]);
app.controller('cooperationCtrl',function ($scope,$state) {
    if ($state.current.url == '/cooperation') {
        $state.go('root.ability.cooperation.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('cooperationMenuCtrl',function($scope,$state,$rootScope,$location,cooperationSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        cooperationSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page) {
        $scope.page = $location.search().page;
    }
        //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.pedit = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.pedit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'peditMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = ''
    };
    $scope.perlist = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.perlist[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'perlistMenu'
       }
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idList = ''
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idList = ''
    };
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.upload[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.ability.cooperation.view[12]',{id:$scope.idList,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "INDEPENDENT":
                result = "独立完成";
                break;
            case "COOPER":
                result = "合作完成";
                break;
            case "STAGEPARTICIPATION":
                result = "阶段参与";
                break;
        }
        return result;
    }

})

