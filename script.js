let $overlay = $("<div id = 'overlay'></div>");

$("body").append($overlay);

let $image = $('<img>');

$overlay.append($image);

let $close = $("<img id = 'closeImage'>");

$overlay.append($close);

$("#imageGallery a").click(function (event){
     event.preventDefault();

     let imageSource = $(this).attr("href");
     $image.attr("src", imageSource);
     $close.attr("src", "images/close.png")

     $overlay.show()

});

$close.click(function (){
   $($overlay).hide();
});