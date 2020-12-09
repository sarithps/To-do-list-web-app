$(document).ready(function(){

    $.getJSON("todos.json", function(data){
        var entries ='';
        $.each(data, function (key, value){
            entries += '<tr>';
            entries += '<td>' + value.userId + '</td>' ;
            entries += '<td>' + value.id + '</td>' ;
            entries += '<td>' + value.title + '</td>' ;
            if(value.completed==true){
                entries += '<td>' + '<input type="checkbox" checked=true disabled=true>' + '</td>' ;
            }
            else{
                entries += '<td>' + '<input type="checkbox" class="check" onchange="check()" >' + '</td>' ;

            }
            entries += '</tr>';
        });
        $('#table').append(entries);
    });
})