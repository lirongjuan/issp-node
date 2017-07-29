var app = angular.module('signingProject', [{
    files:[
        "root/businessContract/signingProject/_res/js/service.js",
    ]
}]);
app.controller('signingCtrl',function ($scope,$state) {
    if ($state.current.url == '/signingProject') {//默认加载列表
        $state.go('root.businessContract.signingProject.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('signingMenuCtrl',function($scope,$state,$rootScope,$location,signingSer){
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
        signingSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.businessContract.signingProject.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.review = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.review[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'reviewMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idListd = ''
    };
});

//自定义过滤器
app.filter('sign',function(){
   return function(val){
       var result;
       switch(val){
           case "MOBILECOMMUNICATION":
               result = "移动通信类";
               break;
           case "SOFTDEVELOP":
               result = "软件开发类";
               break;
           case "INTELLIGENCESYSTEM":
               result = "智能系统集成类";
               break;
           case "ADVERT":
               result = "广告策划营销类";
               break;
           case "RENTCONTRACT":
               result = "租赁合同";
               break;
           case "CHARCONTRACT":
               result = "承包的项目合同";
               break;
           case "DISTRIBUTECONTRACT":
               result = "分包项目合同";
               break;
           case "SALECONTRACT":
               result = "销售合同";
               break;
           case "FRAMECONTRACT":
               result = "框架合同";
               break;
           case "SINGLECONTRACT":
               result = "单次合同";
               break;
       }
       return result;
   }

});