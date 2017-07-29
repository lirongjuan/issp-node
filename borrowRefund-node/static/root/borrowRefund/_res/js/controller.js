var app = angular.module('borrowRefund',[{
    files: ['root/borrowRefund/_res/js/service.js']
}]);
app.controller('borrowRefundCtrl', function ($scope,$state) {
    if ($state.current.url == '/borrowRefund') {//默认加载列表
         $state.go('root.borrowRefund.borrowManage');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,borrowRefundSer){
    $scope.navCla='applylend';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'applylend';
    $scope.navClass= function(name){
        $scope.navCla=name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    }
    $scope.showsList = [
        {id:"1",item:"借款管理",menuList:[{name:'申请借款',msg:'applylend'},{name2:"申请单有误记录",msg:'applyErr'},{name3:"等待审核",msg:'waitAudit'},{name4:"已审核/分析记录",msg:'hasAudit'},{name5:"等待付款",msg:'waitPayment'},{name6:'确认付款',msg:'affirmRecieve'},{name7:"借款记录",msg:'borrowRecord'},{name8:"还款记录",msg:'returnRecord'},{name9:"账务核对",msg:'businessCheck'},{name10:"已收票记录",msg:'recieveTicket'},{name11:'分析情况记录',msg:'hasAnalyze'}],showIs:false},{id:"2",item:"报销管理",menuList:[{name12:'申请报销记录',msg:'applyRecord'},{name13:'报销单有误记录',msg:'refundErr'},{name14:'等待审核记录',msg:'rwaitAudit'},{name15:'已审核',msg:'rhasAudit'},{name16:'已分析',msg:'rhasAnalyze'},{name17:'账户核对',msg:'rbusinessCheck'},{name18:'等待付款',msg:'rwaitPayment'},{name19:'已付款',msg:'hasPay'}],showIs:false},{id:"3",item:"业务设置",menuList:[{name20:'报销分析权限',msg:'analyze'},{name21:'报销单号管理',msg:'finoddInfor'}],showIs:false},
        {id:"4",item:"设置",menuList:[{name22:'设置'}],showIs:false}
    ];
    if(active){
        for(var i = 0;i < $scope.showsList.length;i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0;j < n.length;j++){
                var m = n[j].msg;
                if(m == active){
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };

    // 前面下拉导航权限
    borrowRefundSer.navPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    // 设置导航权限
    borrowRefundSer.setPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
});
app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});