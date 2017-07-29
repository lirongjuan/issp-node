var app = angular.module('detail', [{
    files:[
        "root/payment/detail/_res/js/service.js",
    ]
}]);
app.controller('detailCtrl',function ($scope,$state) {
    if ($state.current.url == '/detail') {//默认加载列表
        $state.go('root.payment.detail.list[12]')
    }

}).controller('detailMenuCtrl',function($scope,$state,$rootScope,$location,detailSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        detailSer.menuPermission(buttonName).then(function(response){
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
//查看详细信息
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idListd = ''
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.payment.detail.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.payment.detail.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.settlement = function(){
        if($scope.idListd){
            $state.go('root.payment.detail.settlement[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'settlementMenu'
        }
    };
    $scope.time = function(){
        if($scope.idListd){
            $state.go('root.payment.detail.time[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'timeMenu'
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
    $scope.contrast= function(){
        $scope.menuClass = 'contrastMenu';
        $scope.idListd = ''
    };
    $scope.summary= function(){
        $scope.menuClass = 'summaryMenu';
        $scope.idListd = ''
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu';
        $scope.idListd = ''
    };

    $scope.prosummary= function(){
        $scope.menuClass = 'prosummaryMenu';
        $scope.idListd = ''
    };
    $scope.collectPro = function(){
        $scope.menuClass = 'collectProMenu';
        $scope.idListd = ''
    };
    $scope.genSummary = function(){
        $scope.menuClass = 'genSummaryMenu';
        $scope.idListd = ''
    };
    $scope.general = function(){
        $scope.menuClass = 'generalMenu';
        $scope.idListd = ''
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val) {
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case "0":
                result = "否";
                break;
            case "1":
                result = "是";
                break;
        }
        return result;
    }
});