var app = angular.module('marketActivity', [{
    files: ['root/marketActivity/_res/js/service.js']
}]);
app.controller('marketActivityCtrl', function ($scope,$state) {
    if ($state.current.url == '/marketActivity') {//默认加载列表
         $state.go('root.marketActivity.marketserve');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,marketActivitySer){
    $scope.navCla='marketserve';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'marketserve';
    $scope.navClass= function(name){
        $scope.navCla=name;
    }
    marketActivitySer.navPermission().then(function(response){
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
    marketActivitySer.setPermission().then(function(response){
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
    //导航菜单
    $scope.showsList = [
        {id:"1",item:"市场招待",menuList:[{name:'市场招待申请'},{name2:'市场招待申请汇总'},{name3:'市场招待记录'},{name4:'市场招待记录汇总'}],showIs:false},
        {id:"2",item:"设置",menuList:[{name5:'设置'}],showIs:false},
    ];
      $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
               /* angular.forEach(function(item){ showSubAble sublist*/
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
});
//自定义指令
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

            });
        }
    };
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    };
});
app.filter('chinese',function(){
    return function(val){
        var result;
        switch(val){
            case 'ALLOWED':
            result = '通过';
            break;
            case 'NONE':
            result = '未通过';
            break;
            case 'DENIED':
            result = '拒绝';
            break;
            case true:
                result = '是';
                break;
            case false:
                result = '否';
                break;
        }
        return result;
    }
})
