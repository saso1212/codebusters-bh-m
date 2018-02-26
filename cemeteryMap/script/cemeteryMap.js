$("#gotoGate").on("click", () => {
    $("#mainDiv").empty()
        .load("homepage/homepage.html");
    document.title = "Welcome";
});