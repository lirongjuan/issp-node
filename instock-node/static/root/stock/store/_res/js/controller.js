var app = angular.module('store', [{
    files:[
        "root/stock/store/_res/js/service.js"
    ]
}]);
app.controller('storeCtrl',function ($scope,$state) {

    if ($state.current.url == '/store') {//默认加载列表
        $state.go('root.stock.store.list[12]')
    };

}).controller('storeMenuCtrl',function($scope,$state,$rootScope,$location,storeSer){

    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1] || window.location.href.split('cusNum=')) {//如果是刷新进来的页面，没有经过list
        $scope.getId = window.location.href.split('id=')[1] || window.location.href.split('cusNum=')[1];
        $scope.customerNum = window.location.href.split('customerNum=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function(name){
        var buttonName = name;
        $scope.buttonShow = true;
        storeSer.menuPermission(buttonName).then(function(response){

            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };

    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.stock.store.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //查看详情
    $scope.detail = function(){
        if($scope.getId){
            $state.go('root.stock.store.detail[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='detailMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.stock.store.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };
    //上传附件
    $scope.upload = function(){
        if($scope.getId){
            $state.go('root.stock.store.upload[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='uploadMenu';
        }
    };
    //查看附件
    $scope.download = function(){
        if($scope.getId){
            $state.go('root.stock.store.view[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='viewMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu',
        $scope.getId = ''
    };

});

//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "UPLOAD":
                result = "上传附件";
                break;
            case "SEEFILE":
                result = "查看附件";
                break;
            case "SEE":
                result = "查看详情";
                break;
            case "BUY":
                result = "购买入库";
                break;
            case "LEND":
                result = "外借入库";
                break;
            case "UNAUDITED":
                result = "未审核";
                break;
            case "AUDITED":
                result = "通过";
                break;
            case "REJECT":
                result = "拒绝";
                break;
            case "INTACT":
                result = "完好";
                break;
            case "MANUAL_DAMAGE":
                result = "人为损坏";
                break;
            case "NATURAL_DAMAGE":
                result = "自然损坏";
                break;
            case "REPAIRING":
                result = "维修中";
                break;
            case "SCRAP":
                result = "已报废";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case "TRANSFER":
                result = "调动入库";
                break;
            case "RECEIVE":
                result = "领用";
                break;
            case "CHECKOUT":
                result = "外借";
                break;
            case "TRANSFER":
                result = "调动";
                break;
            case "INSTOCK":
                result = "在库";
                break;
        }
        return result;
    }
});



