var app = angular.module('project', []);
app.controller('projectCtrl', function ($scope,$state) {
    if ($state.current.url == '/project') {//默认加载列表
         $state.go('root.project.situation');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='situation';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'situation';
    $scope.navClass= function(name){
        $scope.navCla=name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
      $scope.showsList = [
        {id:"1",item:"项目验收、签字、结算进度管理",menuList:[{name:'项目情况'},{name2:"项目实施情况"},{name3:"项目验收情况"},{name4:"项目合同结算跟进"},{name5:"项目实施审核"}],showIs:false},
        {id:"2",item:"设置",menuList:[{name6:'设置'}],showIs:false},
    ];
      $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
               /* angular.forEach(function(item){*/
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

