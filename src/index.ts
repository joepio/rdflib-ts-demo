import { graph, Fetcher } from "rdflib";

document.getElementById("app").innerHTML = `
<h1>RDFlib.js TS demo</h1>
<div id="app">
</div>
`;

const store = graph();
var timeout = 5000; // 5000 ms timeout
var fetcher = new Fetcher(store, timeout);
const subject = "https://id.openraadsinformatie.nl/1";

fetcher.nowOrWhenFetched(subject, function(ok, body, xhr) {
  if (!ok) {
    console.log("Oops, something happened and couldn't fetch data");
  } else {
    console.log("store", store.any(subject));
  }
});
