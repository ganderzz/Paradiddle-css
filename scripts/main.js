$(function() {
    $(".show-code").on("click", function() {
        $(this).parent().find("pre").toggleClass("hidden");
    });
});
