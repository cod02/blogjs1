				$(function() {
jQuery(".post-body img").each(function() {
	
            imageurl = jQuery(this).find("img").attr("src");
            
		$(this).append('<div class="download-link"><a id="download_nopurchased"  class="click_pop icon-download" onclick="javascript:void(0)" data-url="'+ imageurl +'">Download</a></div>');
	});
  });
</script>
<script type="rocketlazyloadscript">
    $(document).ready(function () {
        $('.adpop-close').click(function () {
            $('.adbgPop,.adpop').hide();
        });

        $('.click_pop').click(function () {
            $('.adbgPop,.adpop').show(); doclock();
			
			myid("downbtnad").href = $(this).attr("data-url");
			  
			var offsettop =   $(document).scrollTop() + 150; 
 
			
			  $('.adpop').css("top",offsettop);

  
        });

        $('.downloadadopen').click(function () {
            $('.adbgPop,.adpop').hide();
        });
    })

var clock = 4;
function doclock() {
	var clockobj = myid("clockid");
	if (clock > 0) { clockobj.innerHTML =  clock; } else { clockobj.innerHTML =  ""; }
 	if (clock-- > 0) { setTimeout(doclock, 1000); } else { clock = 2; $('.adpop-content-left').show(); 
	$('.adtextshow').hide(); 

	}
}


function myid(objid){return document.getElementById(objid);}
