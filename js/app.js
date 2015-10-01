/**
 * Created by tokunaga on 2015/09/23.
 */
(function(){
    Parse.initialize("5R4FX9XGUVWgEGEdUz2dTxjvZsYlxJswNbht98Ga", "E7IvAMZ7Bs9Hczwdgx5ktIO2OJ0pxV1N6vFwXsuH");
    var currentUser = Parse.User.current();
    if(currentUser){

    }else{
        location.href="./login.html";
    }

    $('#login-submit').click(function(event){
        event.preventDefault();//âÊñ ÇÃÉäÉçÅ[ÉhÇñhÇÆ
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        Parse.User.logIn(username,password,{
                success:function(user){
//                    self.undelegateEvents();
                    console.log(user);
                    window.sessionStorage.setItem("use",user);
//                      window.location.href("./todo.html");
                    document.location = ("../todo.html");

                    delete self;
                },
                error: function(    user,error){
                    self.$(".login-form .error").html("Invalid username or password. Please try again.").show();

                    self.$(".login-form button").removeAttr("disabled");
                }
            }
        );
    });
    $('#signup-submit').click(function(event){
        event.preventDefault();//prevent reload
        var username = $('#signup-username').val();
        var password = $('#signup-password').val();
        var newUser = new Parse.User();
        newUser.set("username",username);
        newUser.set("password",password);
        newUser.signUp(null,{
            success: function(user){

            },
            error: function(user,error){
                alert("Error:"+error.code+ "" +error.message);
            }
        });

    });


//    Parse.initialize("APPLICATION_ID", "JAVASCRIPT_KEY");
//
//    var TestObject = Parse.Object.extend("TestObject");
//    var testObject = new TestObject();
//    testObject.save({foo: "bar"}, {
//        success: function(object) {
//            $(".success").show();
//        },
//        error: function(model, error) {
//            $(".error").show();
//        }
//    });
    //var Task = Backbone.Model.extend({
    //    defaults: {
    //        title: 'do something',
    //        completed: false
    //    },
    //    validate: function(attrs){
    //        if(_.isEmpty(attrs.title)){
    //            return 'title must not be empty';
    //        }
    //    },
    //    initialize: function(){
    //        this.on('invalid', function(model, error){
    //           $('#error').html(error);
    //        });
    //    }
    //});
    //var Tasks = Backbone.Collection.extend({model: Task});
    //var TaskView = Backbone.View.extend({
    //    tagName: 'li',
    //    initialize: function(){
    //        this.model.on('destroy', this.remove, this);
    //        this.model.on('change', this.render, this);
    //    },
    //    events: {
    //      'click .delete': 'destroy',
    //        'click .toggle': 'toggle'
    //    },
    //    toggle: function(){
    //        console.log(this.model.get('completed'));
    //      this.model.set('completed', !this.model.get('completed'));
    //    },
    //    destroy: function(){
    //        if(confirm('are you sure?')){
    //            this.model.destroy();
    //        }
    //    },
    //    remove: function(){
    //      this.$el.remove();
    //    },
    //    template: _.template($('#task-template').html()),
    //    render: function(){
    //        var template = this.template(this.model.toJSON());
    //        this.$el.html(template);
    //        return this;
    //    }
    //});
    //var TasksView = Backbone.View.extend({
    //   tagName: 'ul',
    //    initialize: function(){
    //      this.collection.on('add', this.addNew, this);
    //        this.collection.on('destroy', this.updateCount, this);
    //        this.collection.on('change', this.updateCount, this);
    //    },
    //    updateCount: function(){
    //        var uncompletedTasks = this.collection.filter(function(task){
    //           return !task.get('completed');
    //        });
    //        $('#count').html(uncompletedTasks.length);
    //    },
    //    addNew: function(task){
    //      var taskView = new TaskView({model: task});
    //        this.$el.append(taskView.render().$el);
    //        $('#title').val('').focus();
    //        this.updateCount();
    //    },
    //    render: function(){
    //
    //        this.collection.each(function(task){
    //            console.log(task);
    //           var taskView = new TaskView({model: task});
    //            this.$el.append(taskView.render().el);
    //        },this);
    //        this.updateCount();
    //        return this;
    //    }
    //});
    //var AddTaskView = Backbone.View.extend({
    //   el: '#addTask',
    //    events:{
    //        'submit': 'submit'
    //    },
    //    submit: function(e){
    //        e.preventDefault();
    //       // var task = new Task({title: $('#title').val()});
    //        var task = new Task();
    //        if(task.set({title: $('#title').val()},{validate: true})){
    //            this.collection.add(task);
    //            $('#error').empty();
    //
    //        }
    //
    //    }
    //});
    //
    //var tasks = new Tasks([
    //    {
    //        title: 'task1"',
    //        completed: true
    //    },
    //    {
    //        title: 'task2"'
    //    },
    //    {
    //        title: 'task3"'
    //    }
    //]);
    //var tasksView = new TasksView({collection: tasks});
    //console.log(tasksView);
    //console.log($('#tasks'));
    //$('#tasks').html(tasksView.render().el);
    //var addTaskView = new AddTaskView({collection: tasks});
})();