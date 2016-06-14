export default class AuthService {
  constructor($firebaseAuth) {
      this.$firebaseAuth = $firebaseAuth;
  }

  getFirebase() {
      return new Firebase("https://angularfinalproject.firebaseIO.com");
  }
  
}