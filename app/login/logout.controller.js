export default class LogoutController{
    constructor(AuthService, $rootScope, $location){
        
        var ref = AuthService.getFirebase();
        
        this.signout = function(){
            ref.onAuth(function(authData) {
                $rootScope.authData = null;
                $rootScope.auth = false;
                console.log('z auth: ', $rootScope.authData);
            });
            $location.path('/login');
        }
        
        
    }
}