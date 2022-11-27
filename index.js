window.addEventListener('load', getinfo)
console.log('hwllowdahdbajgdjagdyjagdyakgdyauk');
function getinfo() {
let urlinfo = window.location.href;
console.log('hello');
// if url contains code=
if (urlinfo.indexOf("code=") > -1) {
    // get the code
    let code = urlinfo.split("code=")[1];
    console.log(code);
    // send code to server
    // fetch("/api/auth", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ code })
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //     // do something with the data
    //     });


    }

}