jQuery(document).ready(function() {
              alert("most-view-product ");
    jQuery('.carousel[data-type="multi"] .item').each(function(){
      var next = jQuery(this).next();
      if (!next.length) {
        next = jQuery(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo(jQuery(this));
      
      for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = jQuery(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    });
          
  });