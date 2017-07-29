var app = angular.module('taxesmanage', [{
    files:[
        "root/taxes/taxes/taxesmanage/_res/js/service.js"
    ]
}]);
app.controller('taxesmanageCtrl',function ($scope,$state) {
    if ($state.current.url == '/taxesmanage') {//默认加载列表
        $state.go('root.taxes.taxes.taxesmanage.list[12]');
    }
}).controller('taxesmanageMenuCtrl',function($scope,$state,$rootScope,$location,taxesmanageSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        taxesmanageSer.menuPermission(buttonName).then(function(response){
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
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.taxes.taxes.taxesmanage.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.taxes.taxes.taxesmanage.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.taxes.taxes.taxesmanage.upload[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.taxes.taxes.taxesmanage.view[12]',{id:$scope.idList,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";//清空选择的 id
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = "";//清空选择的 id
    };
    //查看
    $scope.see = function(){
        $scope.menuClass = 'seeMenu';
        $scope.idList = "";//清空选择的 id
    };
    //汇总
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu';
        $scope.idList = "";//清空选择的 id
    };
});
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case 'DIDPAY':
                result = '待缴税';
                break;
            case 'DUTYPAID':
                result = '已缴税';
                break;
        }
        return result;
    }
})