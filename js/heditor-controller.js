angular
    .module('heditorCtrl', ['heditorUtils'])
    .controller('editorController', function($scope, Utils) {
        'use strict';
        // init editor
        var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            mode: "text/x-hive",
            styleActiveLine: true,
            lineNumbers: true,
            lineWrapping: true,
            autoCloseBrackets: true,
            autofocus: true,
            extraKeys: {
                "Ctrl-Space": "autocomplete"
            },
            theme: "paraiso-light",
            tabSize: 2
        });

        // TODO 增加表的信息自动补全获取

        // init tooltip
        $('[data-rel=tooltip]').tooltip();
        $('[data-rel=popover]').popover({
            html: true
        });

        // init spinner
        Utils.spinner("holder", 10, 20, 8, 5, "#00bfff");

        // ng-click
        $scope.clearContent = function() {
            editor.setValue("");
        };

        $scope.startQ = function() {
            // TODO post方法传值查询，并生成相应的$scope ID, 可以尝试使用 $q 需要对执行计划进行更新
            console.log(editor.getValue());
            $scope.raphealSpinner = true;
        };

        $scope.stopQ = function() {
            // TODO 通过scope id 杀掉进程 ajax
            $scope.raphealSpinner = false;
        };

        $scope.exportQ = function() {
            // TODO 通过 id 进行下载  此处只需要URL即可，ng-click可以删除
        };
    })
    .controller('tableController', function () {});
