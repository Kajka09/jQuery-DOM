$(function(){
    'use strict';
	
    var divWithParagraphs= $('.paragraphs');
    
     $('#button1').click(function(){
        divWithParagraphs.prepend(divWithParagraphs.children().last())
    });
	
	$('#button2').click(function(){
        divWithParagraphs.append(divWithParagraphs.children().first())
    });
    
});