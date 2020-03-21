$(function(){ 
      function buildHTML(message){
      if ( message.image ) {
        var html =
          `<div class="main-chat__message__log">
            <div class="main-chat__message__log__upload">
              <div class="main-chat__message__log__upload__name">
                ${message.user_name}
              </div>
              <div class="main-chat__message__log__upload__date">
                ${message.created_at}
              </div>
            </div>
            <div class="main-chat__message__log__comment">
              <p class="main-chat__message__log__comment__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
          `<div class="main-chat__message__log">
            <div class="main-chat__message__log__upload">
              <div class="main-chat__message__log__upload__name">
                ${message.user_name}
              </div>
              <div class="main-chat__message__log__upload__date">
                ${message.created_at}
              </div>
            </div>
            <div class="main-chat__message__log__comment">
              <p class="main-chat__message__log__comment__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
      }
  $("#new_message").on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".main-chat__message").append(html);
      $('.main-chat__message').animate({ scrollTop: $('.main-chat__message')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
    .always(function(){
      $('.main-chat__form__flame__btn').prop("disabled",false);
    })
  })
});