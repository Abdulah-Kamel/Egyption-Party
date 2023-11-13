"use strict";
$(function () {
  $(".fa-bars").click(function () {
    if ($(".sideNav").hasClass("sideNavActive") == false) {
      $(".sideNav").addClass("sideNavActive");
      $(".sideNav ul").slideDown();
    } else {
      $(".sideNav").removeClass("sideNavActive");
      $(".sideNav ul").slideUp();
    }
  });
  $(".fa-x").click(function () {
    $(".sideNav").removeClass("sideNavActive");
    $(".sideNav ul").slideUp();
  });

  $(".singers li h2").click(function (e) {
    $(this).next().slideToggle(500);
    $(".singers li h2").not(this).next().slideUp(500);
  });

  function getTimeToEvent() {
    let eventDate = new Date("2023-12-27");
    let currentDate = new Date();
    let timeDiff = eventDate.getTime() - currentDate.getTime();
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    $(".countDown ul li").eq(0).text(`${days}D`);
    $(".countDown ul li").eq(1).text(`${hours}H`);
    $(".countDown ul li").eq(2).text(`${minutes}M`);
    $(".countDown ul li").eq(3).text(`${seconds}S`);
  }

  setInterval(() => {
    getTimeToEvent();
  }, 1000);

  $("textarea").keyup(function () {
    let value = this.value.length;
    if (value == 0) {
      $("form span").html(100);
      // console.log(this.value.length);
    } else {
        if (value < 100) {
            $("form span").html(100 - value);
            $("form button").removeAttr("disabled");
      } else {
        $("form span").html("your available character finished");
        $("form button").attr("disabled", "true");
      }
    }
  });
});
