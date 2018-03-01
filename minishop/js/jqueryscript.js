$(document).ready(() => {
    $(".container-right").hide();
    $("#AddToCart").on("click", () => {
        $(".container-right").show("slide", {direction: "right"}, 1000);
    });
    $("#btnClose").on("click", () => {
        $(".container-right").hide("slide", {direction: "right"}, 1000);
    });
});