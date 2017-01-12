/**
 * Created by yls on 17/1/11.
 */
var app = angular.module('appDirectives', []);
app.directive("coTimepicker", function() {
    return {
        restrict:'AE',
        scope:{
            hour:'=',
            minute:'='
        },
        template:'<div class="co-timepicker-box" style="margin-left: 15px">'+
        '<input type="text" class="wi-timepicker-fl wi-timepicker-timeinput" ng-model="hour" maxlength="2">' +
        '<div class="wi-timepicker-fl wi-timepicker-change-box">' +
        '<div class="wi-timepicker-change-time wi-timepicker-arrow-up" ng-click="timeUp(1)"></div>' +
        '<div class="wi-timepicker-change-time wi-timepicker-arrow-down" ng-click="timeDown(1)"></div>' +
        '</div>' +
        '<div class="wi-timepicker-fl wi-timepicker-maohao">' +
        ':' +
        '</div>' +
        '<input type="text" class="wi-timepicker-fl wi-timepicker-timeinput" ng-model="minute" maxlength="2">' +
        '<div class="wi-timepicker-fl wi-timepicker-change-box">' +
        '<div class="wi-timepicker-change-time wi-timepicker-arrow-up" ng-click="timeUp(2)"></div>' +
        '<div class="wi-timepicker-change-time wi-timepicker-arrow-down" ng-click="timeDown(2)"></div>' +
        '</div>'+
        '</div>',
        link: function ($scope,element,attrs) {
            //时间为个位数的时候的格式化方法
            $scope.PrefixInteger = function (num, n) {
                return (Array(n).join(0) + num).slice(-n);
            };
            //初始化小时和分钟
            if(!$scope.hour){
                $scope.hour = 12;
            }
            if(!$scope.minute){
                $scope.minute = '00';
            }

            var reg=/^\d+$/;
            //点击向上小三角触发
            $scope.timeUp = function (type) {
                if(type == 1){
                    if(reg.test($scope.hour)){
                        if(parseInt($scope.hour) >=0 && parseInt($scope.hour) <= 23){
                            if($scope.hour == 23){
                                $scope.hour = -1;
                            }
                            $scope.hour = parseInt($scope.hour) + 1;
                        }else {
                            $scope.hour = 12;
                        }
                    }else {
                        $scope.hour = 12;
                    }
                    $scope.hour = $scope.PrefixInteger($scope.hour,2);
                }else if(type == 2){
                    if(angular.isNumber($scope.minute) || reg.test($scope.minute)){
                        if(parseInt($scope.minute) >=0 && parseInt($scope.minute) <=59){
                            if($scope.minute == 59){
                                $scope.minute = -1;
                            }
                            $scope.minute = parseInt($scope.minute) + 1;
                        }else {
                            $scope.minute = 0;
                        }
                    }else {
                        $scope.minute = 0;
                    }
                    $scope.minute = $scope.PrefixInteger($scope.minute,2);
                }
            };
            //点击向下小三角触发
            $scope.timeDown = function (type) {
                if(type == 1){
                    if(angular.isNumber($scope.hour) || reg.test($scope.hour)){
                        if(parseInt($scope.hour) >=0 && parseInt($scope.hour) <=24){
                            if($scope.hour == 0){
                                $scope.hour = 24;
                            }
                            $scope.hour = parseInt($scope.hour) - 1;
                        }else {
                            $scope.hour = 12;
                        }
                    }else {
                        $scope.hour = 12;
                    }
                    $scope.hour = $scope.PrefixInteger($scope.hour,2)
                }else  if(type == 2){
                    if(angular.isNumber($scope.minute) || reg.test($scope.minute)){
                        if(parseInt($scope.minute) >=0 && parseInt($scope.minute) <=60){
                            if($scope.minute == 0){
                                $scope.minute = 60;
                            }
                            $scope.minute = parseInt($scope.minute) - 1;
                        }else {
                            $scope.minute = 0;
                        }
                    }else {
                        $scope.minute = 0;
                    }
                    $scope.minute = $scope.PrefixInteger($scope.minute,2);
                }
            };
        }
    }
});
