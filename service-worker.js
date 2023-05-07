// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the console of the service worker (background script)")

// Importing and using functionality from external files is also possible.
importScripts('service-worker-utils.js')

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

const api_base_url = 'http://fakedetectapi-env.eba-q5xfkcgv.us-west-2.elasticbeanstalk.com/'

// handle a "test" message from the foreground script by logging it
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'test') {
            console.log(message)
            // send response
            sendResponse({data: 'hello from the service worker'})
        }
    }
)

// send a request to the fake detect api users/<username> endpoint, passing the username parameter, return the response
async function get_user(username) {
    console.log("making an api request to get user " + username)
    const response = await fetch(api_base_url + 'users/' + username)
    return response.json()
}

get_user("spez").then(response => console.log(response))
