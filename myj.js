


/* Give everything with the class 'hello' a white background when you click on one of them.   i gave mind a blue background to see it i use css cause we learn how
to apply it from js
 */


$('.hello').on('click', function () {


    $(this).css("background", "blue")


});

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */






/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
/* i added those to the end of my sentence once you click it you will see it on the end */


$(".hello:first").click(function(){

    $(this).append("'.'");

});