var data = "{\r\n    \"documents\":[\r\n        {\r\n            \"language\": \"en\",\r\n            \"id\": 1,\r\n            \"text\": \"where text goes\";\r\n        }\r\n    ]\r\n}";

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

function bingWebSearch(query) {
    https.get({
      hostname: 'api.cognitive.microsoft.com',
      path:     '/bing/v7.0/search?q=' + encodeURIComponent(query),
      headers:  { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY },
    }, res => {
      let body = ''
      res.on('data', part => body += part)
      res.on('end', () => {
        for (var header in res.headers) {
          if (header.startsWith("bingapis-") || header.startsWith("x-msedge-")) {
            console.log(header + ": " + res.headers[header])
          }
        }
        console.log('\nJSON Response:\n')
        console.dir(JSON.parse(body), { colors: false, depth: null })
      })
      res.on('error', e => {
        console.log('Error: ' + e.message)
        throw e
      })
    })
  }

  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  // at q=hello, enter keywords from json retrieved from xhr data
  xhr.open("GET", "https://bingcustomsearchforhtn.cognitiveservices.azure.com/bingcustomsearch/v7.0/search?customconfig=-&q=Hello");
  xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "-");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.17.1");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "-");
  xhr.setRequestHeader("Host", "bingcustomsearchforhtn.cognitiveservices.azure.com");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");
