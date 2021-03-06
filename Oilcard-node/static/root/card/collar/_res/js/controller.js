var app = angular.module('collar', [{
    files:[
        "root/card/collar/_res/js/service.js"
    ]
}]);
app.controller('collarCtrl',function ($scope,$state) {

    if ($state.current.url == '/collar') {//默认加载列表
        $state.go('root.card.collar.list[12]')
    };

}).controller('collarMenuCtrl',function($scope,$state,$rootScope,$location,collarSer){

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
        collarSer.menuPermission(buttonName).then(function(response){

            if(response.data.code == 0 &&response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
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
            $state.go('root.card.collar.edit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.card.collar.list[12]',{id:$scope.getId,name:"delete",page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };
    //审核
    $scope.audit = function(){
        if($scope.getId){
            $state.go('root.card.collar.audit[12]',{id:$scope.getId,page:$scope.page});
            $scope.menuClass='auditMenu';
        }
    };
    //归还
    $scope.returnColl = function(){
        if($scope.getId){
            $state.go('root.card.collar.list[12]',{id:$scope.getId,name:'returnColl',page:$scope.page})
            $scope.menuClass='returnCollMenu';
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.getId = ''
    };
});
//自定义过滤器
app.filter('cover3', function(){
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
            case "NONE":
                result = "未审核";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "IDLE":
                result = "闲置";
                break;
            case "USE":
                result = "正常使用";
                break;
            case "FREEZE":
                result = "冻结使用";
                break;
        }
        return result;
    }
});

