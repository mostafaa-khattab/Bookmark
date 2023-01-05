var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")

var allWeb = [];

if (localStorage.getItem("allSite") != null) {
    allWeb = JSON.parse(localStorage.getItem("allSite"))
    displayWeb()
}
else {
    allWeb = []
}
function addWeb() {
    var site = {
        Name: siteName.value,
        URL: siteUrl.value
    }

    allWeb.push(site)
    localStorage.setItem("allSite", JSON.stringify(allWeb))
    displayWeb()
}


function displayWeb() {
    temp = ""
    for (var i = 0; i < allWeb.length; i++) {

        temp += ` <div id="item" class="py-4 my-5">
        <div class="d-flex justify-content-between w-50 align-items-center">
           <div class="ms-3 px-3"><h2>`+ allWeb[i].Name + `</h2></div> 
            <div>
                <a  target="_blank" class="btn btn-primary mx-3 my-3 fs-5 fw-semibold" id="Visit" onclick="visitSide(`+ i + `)">Visit</a>
                <button type="button" class="btn btn-danger my-3 fs-5 fw-semibold" onclick="deletSide(`+ i + `)" id="del">Delete</button>
            </div>
        </div>
    </div> `

    }

    document.getElementById("PushWeb").innerHTML = temp

}

function deletSide(index) {
    allWeb.splice(index, 1);
    localStorage.setItem("allSite", JSON.stringify(allWeb))
    displayWeb()
}


function visitSide(index){

    Array.from(document.querySelectorAll("#Visit")[index].href = allWeb[index].URL)
    
}

//############################ Finaly ###############################
// Visit.addEventListener("click" , function (e) {

//     // var link = e.target.getAttribute("src")
//     // Visit.innerHTML = ` href " ` + e + ` " `

//     console.log(e);

// })
