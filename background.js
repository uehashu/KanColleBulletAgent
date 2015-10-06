/*
function httpGetAsync(theURL){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theURL, false);
    xmlHttp.setRequestHeader("Access-Token", "v1hpqPBmikn5wnAspk61yJYONofiCAz8k4ujAzlvylLcO");
    xmlHttp.send();
    console.log(xmlHttp.responseText);
}

httpGetAsync("https://api.pushbullet.com/v2/users/me");
 */

// 艦これウィジェットへの登録. 
var kcwExtId = "iachoklpnnjfgmldgelflgifhdaebnol";
var request = {
    path: "/api/subscribe"
};
chrome.runtime.sendMessage(kcwExtId, request, function(response){
    //console.log(response);
});


// 艦これウィジェットのイベントへのフックを登録.
chrome.runtime.onMessageExternal.addListener(function(message, sender){
    if(sender.id == kcwExtId){
	var timestamp = message["timestamp"];
	var finish = message.event.finish;
	var target = message.event.target;
	var type = message.event.type;

	console.log(message);
	console.log("timestamp:" + timestamp);
	console.log("finish:" + finish);
	console.log("target:" + target);
	console.log("type:" + type);
	
	if(target == "createship"){
	    // 建造
	    var dock_no = message.event.params.key;
	    console.log("dock no:" + dock_no);

	}else if(target == "mission"){
	    // 遠征
	    var fleet_no = message.event.params.key;
	    var mission_id = message.event.params.optional.missionId;
	    console.log("fleet no:" + fleet_no);
	    console.log("mission id:" + mission_id);

	}else if(target == "nyukyo"){
	    // 入渠
	    var dock_no = message.event.params.key;
	    
	}
	
    }
});
