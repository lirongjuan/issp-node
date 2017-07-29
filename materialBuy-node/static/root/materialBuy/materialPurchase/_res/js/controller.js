var app = angular.module('purchaseC', [{
    files:[
        "root/materialBuy/materialPurchase/_res/js/service.js",
    ]
}]);
app.controller('purchaseCtrl',function ($scope,$state) {
    if ($state.current.url == '/materialPurchase') {//默认加载列表
        $state.go('root.materialBuy.materialPurchase.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('purchaseMenuCtrl',function($scope,$state,$rootScope,$location,purchaseSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        purchaseSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
        $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.materialBuy.materialPurchase.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.amend = function(){
        if($scope.idListd){
            $state.go('root.materialBuy.materialPurchase.amend[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'amendMenu'
        }
    };
    $scope.review = function(){
        if($scope.idListd){
            $state.go('root.materialBuy.materialPurchase.review[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'reviewMenu';
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.materialBuy.materialPurchase.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu';
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.materialBuy.materialPurchase.view[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'viewMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idListd = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.see = function(){
        if($scope.idListd){
            $state.go('root.materialBuy.materialPurchase.see[12]',{id:$scope.idListd,see:1,page:$scope.page});
            $scope.menuClass = 'seeMenu'
        }
    };
});
//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case "UNAUDITED":
                result = "未审核";
                break;
            case "AUDITED":
                result = "已审核";
                break;
            case true:
                 result = "是";
            break;
            case false:
                result = "否";
                break;

        }
        return result;
    }

});
