$("#btnEnter, #imgGate").on("click", () => {
    $("#mainDiv").empty()
        .load("cemeteryMap/cemeteryMap.html");
    document.title = "Cemetery Map";
});