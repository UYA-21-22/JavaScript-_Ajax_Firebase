
$(document).ready(function(){

  $('#btnEnviar').click(function() {
      $.ajax({
        url:'https://jsonplaceholder.typicode.com/comments',
        type:'GET',
        async: true,
        data: $('#form').serialize(),
        success: function(result){
          let str_result = "";
          result.forEach((v) => {
            str_result += `{<br>postId: ${v.postId},<br>id: ${v.id},<br>name: ${v.name},<br>body: ${v.body}<br>}<br><br>`;
          });
          $('#result').html(str_result);
        },
      });
  });
  
  });