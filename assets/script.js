// Display current day
var nowTime = dayjs(new Date());
var now = dayjs(new Date()).format("dddd, D MMMM YYYY");
$("#currentDay").text(now);


$(".description").each(function() {
    var blockTime = dayjs(new Date()).set("hour", this.id);
    if (blockTime < nowTime) {
        $(this).addClass("past");
    } else if (blockTime.get("hour") <= nowTime.get("hour") && nowTime.get("hour") < blockTime.get("hour") + 1) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

$(":button").on("click", function() {
    var text = $(this).prev("textarea");
    localStorage.setItem(text[0].id, text.val())
});