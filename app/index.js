import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';
import login from './login';
import todo from './todo';

const ngModule = angular
        .module('app', [
          uirouter,
          login,
          todo
        ])
        .config(routing);