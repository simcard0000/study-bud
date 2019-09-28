var highlightedText = "";

chrome.runtime.onInstalled.addListener(function () {
    var context = "page";
    var title = "StudyBud: Cite this!";
    var id1 = chrome.contextMenus.create({
        "title": title, "contexts": [context],
        "id": "0"
    });
    
    context = "selection";
    var id2 = chrome.contextMenus.create({
        "title" : "StudyBud: Get relevant links",
        "contexts" : [context],
        "id" : "1"
    });
});

chrome.contextMenus.onClicked.addListener(
    function (info, tab) {
        
        console.log(info.menuItemId);
        
        switch (info.menuItemId) {
                
            case "0":
                alert("0");
                //call citation action
                
            case "1":
            
                highlightedText = info.selectionText;
                alert(highlightedText);
                
                var data = "{\r\n    \"documents\":[\r\n        {\r\n            \"language\": \"en\",\r\n            \"id\": 1,\r\n            \"text\": \"{{highlightedText}}\";\r\n        }\r\n    ]\r\n}";

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                console.log(this.responseText);
                }
                });

                xhr.open("POST", "https://canadacentral.api.cognitive.microsoft.com/text/analytics/v2.1/keyPhrases");
                xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "-");
                xhr.setRequestHeader("Content-Type", "text/json");
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("Postman-Token", "-");

                xhr.send(data);
                    break;
        }
    }
);
