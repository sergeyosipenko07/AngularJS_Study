(function () {
    'use strict';
    angular.module('app')
        .controller('Todo', Todo);

    Todo.$inject = ['model', 'todoService'];
    function Todo(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;
        $ctrl.myName = 'Sergey';
        $ctrl.myHtml = '<span>Sergey</span>'

        /*$ctrl.incompleteCount = todoService.incompleteCount;
        $ctrl.warningLevel = todoService.warningLevel;*/
        Object.assign($ctrl, todoService);

        console.log($ctrl.todo);
    }
}) ();
