function copyToClipboard(statusid){
var copyText = document.getElementById(statusid).innerHTML;
 copyText.toString();
  // Create a dummy input to copy the string array inside it
  var dummy = document.createElement(&quot;input&quot;);
  // Add it to the document
  document.body.appendChild(dummy);
  // Set its ID
  dummy.setAttribute(&quot;id&quot;, &quot;dummy_id&quot;);
  // Output the array into it
  document.getElementById(&quot;dummy_id&quot;).value=copyText;
  // Select it
  dummy.select();
  // Copy its contents
  document.execCommand(&quot;copy&quot;);
  // Remove it as its not needed anymore
  document.body.removeChild(dummy);
}
function changeText(element){
	//alert(element.value);
	element.value = &quot;Copied!&quot;;
	setTimeout(function(){ element.value = &quot;Copy Again &quot;; }, 2000);
}
