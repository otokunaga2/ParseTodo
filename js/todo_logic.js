/**
 * Created by tokunaga on 2015/10/01.
 */

/*global�ɂ��Ċ֐�����Ăяo����悤�ɂ��Ă���*/
Parse.initialize("5R4FX9XGUVWgEGEdUz2dTxjvZsYlxJswNbht98Ga", "E7IvAMZ7Bs9Hczwdgx5ktIO2OJ0pxV1N6vFwXsuH");

function saveTodoData(text, user){

    var tasks = new Task();
    tasks.set("title",text);

}
function obtainDataFromParseDB(){
    var tasks = Parse.Object.extend("Task");
    var query = new Parse.Query(tasks);
    query.equalTo('completed','false')
    query.find({
        success: function(results){
            console.log(results.length);
            console.log(results);
            //javascript�̃I�u�W�F�N�g�̃v���p�e�B�̃A�N�Z�X���@�𒲂ׂ�
        },
        error: function(error){
            //do something
        }
    });
}

var Task = Parse.Object.extend("Task",{
    completed: false,
    title: ""
});

function createTitleString(name){
    var titleLabel =  "<li>" + name + "</li>";
    return titleLabel;
}
function printTodo(element, index, array){
    console.log(index+ element.get("title"));

    var titileStr = createTitleString(element.get("title"));
    $(function(){
        $('.tasks-uncompleted').append(titileStr);;
    });
}
function findTodo(){/*�f�[�^�x�[�X����*/
    var user = Parse.User.current();
    var relation = user.relation("tasks");/*relational*/

    relation.query().find({
        success: function(list){
            console.log(list)
            list.forEach(printTodo);
        }
    });
}
$(function(){

    findTodo();
//       console.log("�������s"+Task);


    var currentUser = sessionStorage.getItem("user");/*�Z�b�V��������l���擾*/
    if(currentUser == null){
        location.href="./login.html";
    }

    var UserTasks = Parse.Object.extend("");

    $('.todoClass').click(function(event){
        event.preventDefault();//��ʂ̃����[�h��h��
        var todoText = $('#title').val();
        tasks = new Task({
                title: todoText,
                completed: false
            }
        );
        var user = Parse.User.current();
        var relation = user.relation("tasks");
        tasks.save({
            success: function(){
                relation.add(tasks);
                user.save();

            } ,error: function(){
                console.log("save has failed");
            }
        });
    });

    $('#logout').click(function(event){
        event.preventDefault();//��ʂ̃����[�h��h��
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        Parse.User.logOut();
        location.href="./login.html";
    });

});

