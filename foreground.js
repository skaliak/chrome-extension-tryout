// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("this is something else")

// Send a message to the background script of type "test"
chrome.runtime.sendMessage({type: 'test', data: 'hello from the page'}, response => {
    console.log("sending test message to background script")
    console.log(response)
})


// function to insert a span with a smiley emoji immediately after this element
function insert_smiley(element) {
    const smiley = document.createElement("span")
    smiley.innerHTML = "😊"
    element.after(smiley)
}

// function to find all elements with the class "author" and insert a smiley after each one
function insert_smileys() {
    const elements = document.getElementsByClassName("author")
    for (let element of elements) {
        insert_smiley(element)
    }
}

insert_smileys()