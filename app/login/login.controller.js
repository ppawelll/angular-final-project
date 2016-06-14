export default class LoginController {
  constructor(AuthService, $rootScope, $location) {
    
    $rootScope.authData = null;
    $rootScope.auth = false;
    console.log('z auth: ', $rootScope.authData);
    var ref = AuthService.getFirebase();
    
    this.signin = function(){
      
      ref.authWithPassword({
        email    : this.email,
        password : this.password
      }, function(error, authData) { 
          if(error)
          {
            console.log('error log: ', error);
            console.log($rootScope.authData);
          }else{
            console.log('succes log: ', authData.uid);
                ref.onAuth(function(authData) {
                  $rootScope.authData = authData;
                  $rootScope.auth = true;
                  console.log('z auth: ', $rootScope.authData);
                  $location.path('/todo');
              });
          }
      });
    }
    

      
  }
  
}