var sippyArray = [jokes, quotes, facts]

function jokes() {
    event.preventDefault();
    var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";
    $.ajax({
        url: jokeURL,
        method: "GET"
    }).then(function (response) {
        $("#jokeModal").attr("class","modal is-active");
        //var newDiv = $("<div>");
        //var saveBtn = $("<button>").text("Save").attr("save");

        var jokeSetup = response[0].setup;
        var jokePunch = response[0].punchline;

        //newDiv.text(jokeSetup + " " + jokePunch)
        //$("#results").append(newDiv);
        $("#jokeSetup").text(jokeSetup)
//        $("#jokePunchline").text(jokePunch)
        masterTimer(jokePunch)
        console.log(response)
        console.log("Setup: " + response[0].setup);
        console.log("Punchline: " + response[0].punchline);
    })

}
function gifs() {
    var gifURL = "https://api.giphy.com/v1/gifs/random?"
    var gifapi_key = "api_key=1sI8qnYSYJT3bcAJldPmGbL6gO1XMuOV"
    var gifSearchParameters = "&tag=laughing&rating=pg&SameSite=Secure" //Need a laugh? Potentially update HTML
    $.ajax({
        url: gifURL + gifapi_key + gifSearchParameters,
        method: "GET"
    }).then(function (response) {
        //var newImg = $("<img>");
        var gif = response.data.images.original.url
        $("#gifModal").attr("class","modal is-active");
        $("#displayGIF").attr("src", gif);

        //newImg.attr("src", gif);
        //$("#results").append(newImg);

        console.log(response);
        //  console.log(gif); 
        
    })
}
function quotes() {
    event.preventDefault();
    //var quotesURL = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
    var quotesURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    $.ajax({
        url: quotesURL,
        method: "GET"
    }).then(function (response) {

        var author = response.quote.quoteAuthor;
        var text = response.quote.quoteText;

        $("#quoteAdviceModal").attr("class","modal is-active");
        $("#quoteOrAdvice").text(text + " - " + author);
        //response = response[0].content.rendered;
        //response = JSON.parse(response);
        //quoteResponse = JSON.stringify(quoteResponse)
        //console.log(response[0].content.rendered);
       
    })
}
function facts() {
    event.preventDefault();
    var factsURL = "https://api.adviceslip.com/advice"
    $.ajax({
        url: factsURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        response = JSON.parse(response)
        $("#quoteAdviceModal").attr("class","modal is-active");
        $("#quoteOrAdvice").text(response.slip.advice);
        
        //console.log(response.slip.advice);
        //$("#quoteOrAdvice").text(response)
        //var newDiv = $(`<div>${response.slip.advice}</div>`)
        //$("#results").append(newDiv)
    })
}
function masterTimer(jokePunch) {
    setTimeout(function() {
        $("#jokePunchline").text(jokePunch)
        setTimeout(function(){
            console.log("here")
            $("#jokeModal").removeAttr("class");
            $("#jokeModal").attr("class", "modal");
            gifs()
        }, 4000)
    }, 3000)$
    ("#jokePunchLine").empty()
}

function jEE() {
    
}

$("#jeff").on("click", function(event) {
    jEE()
})

$("#sip").on("click", function (event) {
    event.preventDefault()
    var sippy = Math.floor(Math.random() * 3)
    console.log(sippy);
    sippyArray[sippy]()
})
$("#smile").on("click", function (event) {
    // $(".smile1").attr("class", "columns is-block !important");
    jokes()
})
// $("#jokes").on("click", function (event) { //#jokes
//     jokes()
// })
$("#gifs").on("click", function (event) { //#gifs
    gifs()
})
$("#quote").on("click", function (event) {
    quotes()
})
$("#fact").on("click", function (event) { //advice
    facts()
})

$("#close").on("click", function (event) {
    //$("#modal").removeAttr("class");
    $("#gifModal").removeAttr("class");
    $("#gifModal").attr("class", "modal")
})

$("#closeJoke").on("click", function (event) {
    //$("#modal").removeAttr("class");
    $("#jokeModal").removeAttr("class");
    $("#jokeModal").attr("class", "modal");
})

$("#closeQuoteAdvice").on("click", function (event) {
    //$("#modal").removeAttr("class");
    $("#quoteAdviceModal").removeAttr("class");
    $("#quoteAdviceModal").attr("class", "modal");
})


