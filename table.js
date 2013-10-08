$('#listingsTable1 tbody tr td')  
    .mouseover(function() {  
      var countx=0;  
      var x=0;  
      var y=0;    
      var xcounter=0;  
      var ycounter=0;  
      var currindex=$(this).index()+1;  
      var currenttd=$(this).parent().index()+1;  
         
       $(this).parent().parent().find('tr').each(function (key,val) {  
       if(key<currenttd){  
       $(this).find('td:nth-child('+currindex+')').addClass("highlight");  
       y=y+parseInt( $(this).find('td:nth-child('+currindex+')').text());  
       ycounter++;  
       }  
        });  
             
       $("#y_data").empty("");  
       if(ycounter==1)$("#y_data").append(0); else $("#y_data").append(y);        
             
$(this).parent().find('td').each(function (key,val) {  
      if(key<currindex){  
       x=x+parseInt( $(this).text());  
       xcounter++;  
      $(this).addClass("highlight");  
      }  
   });  
  
       $("#x_data").empty("");  
       if(xcounter==1)$("#x_data").append(0);else $("#x_data").append(x);   
             
        })  
       .mouseout(function() {  
           var countx=0;  
           var currindex=$(this).index()+1;  
           var currenttd=$(this).parent().index()+1;  
             
   $(this).parent().parent().find('tr').each(function (key,val) {  
   if(key<currenttd)$(this).find('td:nth-child('+currindex+')').removeClass("highlight");});  
   $(this).parent().find('td').each(function (key,val) {  
   if(key<currindex)$(this).removeClass("highlight");  
   });     
        })  
       .click(function() { //add other functionality if needed            
        });  
