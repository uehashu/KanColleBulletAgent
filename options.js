$(function(){
    

    // if SAVE Button is pressed, save this token to sync storage
    $("#save").click(function() {
	var notify_token = $("#notify_token").val();
	var options = {notify_token: notify_token };
	chrome.storage.sync.set(options, function(){});
    });

    // set notify_token from sync storage to text area.
    chrome.storage.sync.get("notify_token", function(items){
	$("#notify_token").val(items.notify_token);
	console.log(items);
    });





});
