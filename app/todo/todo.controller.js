export default class ToDoController{
    constructor(Auth, $firebaseArray, $rootScope){
        var ref = Auth.getFirebase();
        var taskRef = ref.child('task');
        
        
        this.tasks = $firebaseArray(taskRef);
        
        this.add = function(){
              taskRef.push().set({
                author: $rootScope.authData.password.email,
                task: this.task,
                status: false
              });
              
              this.author = "";
              this.task = "";
              this.status = false;
            }
        }
}