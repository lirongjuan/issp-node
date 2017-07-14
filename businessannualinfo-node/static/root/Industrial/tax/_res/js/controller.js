var app = angular.module('tax', [{
    files:[
        "root/Industrial/tax/_res/js/service.js"
    ]
}]);
app.controller('taxCtrl',function ($scope,$state) {
    if ($state.current.url == '/tax') {
        $state.go('root.Industrial.tax.list[12]');
    }
}).controller('taxMenuCtrl',function($scope,$state,$rootScope,$location,taxSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        taxSer.changePermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, id){
        $scope.idList = id;
    });

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.Industrial.tax.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.Industrial.tax.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList=''
    };
//上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.Industrial.tax.upload[12]',{id:$scope.idListd});
            $scope.menuClass = 'uploadMenu'
        }
    }
    
    //下载
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.Industrial.tax.view[12]',{id:$scope.idListd});
            $scope.menuClass = 'viewMenu'
        }
    }
});
