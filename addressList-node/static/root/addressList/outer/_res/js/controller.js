var app = angular.module('outer', [{
    files:[
        "root/addressList/outer/_res/js/service.js",
    ]
}]);
app.controller('outerCtrl',function ($scope,$state) {
    if ($state.current.url == '/outer') {//默认加载列表
        $state.go('root.addressList.outer.list[12]')
    }
}).controller('outMenuCtrl',function($scope,$state,$rootScope,$location,outerSer){
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
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        outerSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.addressList.outer.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.addressList.outer.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idListd = ''
    };
});

//自定义过滤器
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "LIST":
               result = "查看或列表";
               break;
           case "ADD":
               result = "添加";
               break;
           case "EDIT":
               result = "编辑";
               break;
           case "AUDIT":
               result = "审核";
               break;
           case "DELETE":
               result = "删除";
               break;
           case "CONGEL":
               result = "冻结";
               break;
           case "THAW":
               result = "解冻";
               break;
           case "COLLECT":
               result = "汇总";
               break;
           case "UPLOAD":
               result = "上传附件";
               break;
           case "DOWNLOAD":
               result = "下载附件";
               break;
           case "IMPORT":
               result = "导入";
               break;
           case "SEE":
               result = "查看";
               break;
           case "SEEFILE":
               result = "查看附件";
               break;
           case "EXPORT":
               result = "导出";
               break;
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
           case "CASH":
               result = "现金";
               break;
           case "BANK":
               result = "银行汇兑";
               break;
           case "ELECTRIC":
               result = "电汇";
               break;
           case "TRANSFERACCOUNTS":
               result = "转账";
               break;
           case "PREPAY":
               result = "预付";
               break;
           case "BACKTOBACK":
               result = "背靠背";
               break;
           case "ADVANCE":
               result = "垫付";
               break;
       }
       return result;
   }
});