

    $(document).ready(function(){

    
    $(".search-field").on("keyup", function(event){
        var keyword = $(".search-field").val().toLowerCase();
        
        $.ajax({
            url: "/books/search",
            type: "GET",
            dataType: 'JSON',
            data: {keyword : keyword},
            success: function(data){
                
                $("#main").html("");
                
                $.each(data, function(key, book){
                    
                    var card = $('<div class="card bg-light mb-3" style="max-width: 640px;">\
                    <div class="row no-gutters">\
                      <div class="col-md-4 book-img-container">\
                        <img src="/' + book.imgUrl +'" class="card-img" alt="...">\
                      </div>\
                      <div class="col-md-8">\
                        <div class="card-body">\
                          <h5 class="card-title"><b>' + book.title + '</b></h5>\
                          <p class="card-text"><small class="text-muted">' + book.author + '</small></p>\
                          <p class="card-text">' + book.description + '</p>\
                          <div id="button-details" class="text-lg-right">\
                          <button type="button" onclick="window.location.href=' + "'" + book.url + "'" + '" class="btn btn-success">Подробнее</button>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    </div>');
                    $("#main").append(card);


                })
            }
        })
    })
    
}   )
