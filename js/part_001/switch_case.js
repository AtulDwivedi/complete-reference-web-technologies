var browser = prompt("Enter browser name (Chrome/Firefox/Edge)").toUpperCase()

switch (browser) {
    case "CHROME":
        alert("Chrome JavaScript engine: V8")
        break;
    case "FIREFOX":
        alert("Firefox JavaScript engine: SPIDERMONKEY")
        break;
    case "EDGE":
        alert("Edge JavaScript engine: CHAKRA")
        break;
    default:
        alert("No information is available for " + browser + " browser")
}
