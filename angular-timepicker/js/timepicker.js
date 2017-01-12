/**
 * Created by yls on 17/1/11.
 */
var app = angular.module('myApp', ['appDirectives']);
app.controller('TimepickerDemoCtrl',function ($scope) {
    //点击获取时间按钮触发
    $scope.getInfo = function () {
        //打印时间,和弹出框显示时间
        console.log($scope.hour+':'+$scope.minute);
        alert('当前选择时间为'+$scope.hour+':'+$scope.minute)
    };
});

