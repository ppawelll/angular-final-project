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
            
        this.remove = function(task){
            this.tasks.$remove(task);
            }
            
        this.complete = function(task){
            var taskId = this.tasks.$getRecord(task.$id);
            taskId.status = true;
            this.tasks.$save(taskId);
            }
            
        this.filtering = function(type) {
             switch (type) {
                case 'completed':
                    this.filter = true;
                    break;
                case 'uncompleted':
                    this.filter = false;
                    break;
                case 'my':
                    this.filter = $rootScope.authData.password.email;
                    break;
                case 'all':
                    this.filter = "";
                    break;
                default:
                    this.filter = "";
                }
            }
          
        }
}