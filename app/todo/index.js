import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './todo.routes';
import ToDoController from './todo.controller';
import Auth from '../login/auth.service';

export default angular.module('app.todo', [uirouter])
    .controller('ToDoController', ToDoController)
    .service('Auth', Auth)
    .config(routing)
    .name;