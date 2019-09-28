//chrome.runtime.onInstalled.addListener(function(){
//chrome.storage.sync.set({})
//});

var isMLA;

function settingCitationContent() {

    var firstName;
    var websiteTitle ;
    var articleTitle = document.title;
    var url = document.url;
    var publicationDate;
    var publisher;

    var as = document.evaluate("//*[contains(@class, 'author')]", document, null, XPathResult.ANY_TYPE, null);
    if (as != null && as != undefined) {

        for (a in as) {	

            if (a != null && a.textContent != undefined) {
                
                if (a.textContent.contains('by ')) {

                    author = a.textContent.split('by ')[1];
                    break;
                }

                if (a.textContent.contains('By ')) {

                    author = a.textContent.split('By ')[1];
                    break;
                }

                author = a.textContent;
            }
        }
    }

    as = document.evaluate("//*[contains(@class, 'date')]", document, null, XPathResult.ANY_TYPE, null); 
    if (as != null && as != undefined) {

        for (a in as) {

            if (a != null && a.textContent != undefined) {
            
                publicationDate = a.textContent;
            }
        }
    }

    if (url != undefined && url != null && url.contains("http://")) {

        websiteTitle = url.substring(7).split(".")[0];
    }
 
}

function handler() {

    var notes = String[2];

    var title = document.getElementById("NOTETITLE").value;
    var body = document.getElementById("text_field").value;

    var node = document.createElement("li");
    var textnode = document.createTextNode(title);
    node.appendChild(textnode);
    document.getElementById("parent").appendChild(node);


}

function main() {

    settingCitationContent();

    isMLA = false;
}

window.onload = function () {

    var mb = document.getElementById("saveButton");
    mb.addEventListener("click", handler);

    let author = document.getElementById("authorInput");
    let otherAuthor = document.getElementById("otherAuthorsInput");
    let title = document.getElementById("titleInput");
    let date = document.getElementById("dateInput");
    let webTitle = document.getElementById("webTitleInput");
    let orgPublisher = document.getElementById("organizationInput");
    let URL = document.getElementById("URLInput");
    let Version = document.getElementById("versionInput");
    let Number = document.getElementById("numberInput");
    let pubDate = document.getElementById("pubDateInput");
    let Location = document.getElementById("locationInput");

    let citationButton = document.getElementById("CitationsButton");
    let researchButton = document.getElementById("ResearchButton");
    let notesButton = document.getElementById("NotesButton");
    let MLAButton = document.getElementById("MLAButton");
    let APAButton = document.getElementById("APAButton");
    let submitButton = document.getElementById("submitButton");
    let saveButton = document.getElementById("saveButton");

    MLAButton.addEventListener("click", function () {
        isMLA = true;
    });

    APAButton.addEventListener("click", function () {
        isMLA = false;
    });

    submitButton.addEventListener("click", function () {
        console.log(isMLA);
        
        if (isMLA === true) {

            var otherAuthorText = otherAuthor.textContent + ',';
            var titleText = "\"" + title.textContent + ".\"";
            var dateText = date.textContent + ',';
            var webTitleText = webTitle.textContent + ',';
            var orgPublisherText = orgPublisher.textContent + ',';
            var URLText = URL.textContent + ',';
            var VersionText = Version.textContent + ',';
            var NumberText = Number.textContent + ',';
            var pubDateText = pubDate.textContent + ',';
            var LocationText = Location.textContent + ',';

            var totalCitation = "\"" + highlightedText + "\"\n" + lastNameText + firstNameText + titleText + otherAuthorText + VersionText + NumberText + webTitleText + orgPublisherText + pubDateText + LocationText + dateText + URLText;
            
            //copying to clipboard code
            //window.clipboardData.setData("text", totalCitation);
            
            var newCitation = document.createElement("DIV");
            
            var h4 = document.createElement("H4");
            h4.setAttribute("class", "uk-card-title");
            h4.textContent = titleText;
            newCitation.appendChild(h4);
            
            var p = document.createElement("P");
            p.textContent = totalCitation;
            newCitation.appendChild(p);
            
            document.getElementById().appendChild(newCitation);
        }
    });

    main();
}
