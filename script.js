//your JS code here. If required.
// Get the browser information
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
const userAgent = navigator.userAgent;

// Create the message
const message = `You are using ${browserName} version ${browserVersion} ${userAgent}`;

// Display the message inside the div with id="browser-info"
document.getElementById("browser-info").innerText = message;
