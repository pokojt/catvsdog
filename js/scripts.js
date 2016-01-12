$(document).ready(function() {
  $("button#meow").click(function() {
    $("img#main").show();
    $("img#bark").hide();
    $("img#purr").hide();
    $("img#nap").hide();

    $("ul#mittens").prepend("<li>Meeeeoooooowww</li>");
    $("ul#spot").prepend("<li>WOOOOF!</li>");

    $("img#meow").toggle();
    $("img#main").toggle();

    $("li").next().remove();

    // $("ul#mittens").children("li").first().click(function() {
    //   $(this).remove();
    //   $("ul#spot").children("li").first().remove();
    // });
    //
    // $("ul#spot").children("li").first().click(function() {
    //   $(this).remove();
    //   $("ul#mittens").children("li").first().remove();
    // });
  });

  $("button#bark").click(function() {
    $("img#main").show();
    $("img#purr").hide();
    $("img#meow").hide();
    $("img#nap").hide();

    $("ul#mittens").prepend("<li>meow meow meow</li>");
    $("ul#spot").prepend("<li>Ruff ruff</li>");

    $("img#bark").toggle();
    $("img#main").toggle();

    $("li").next().remove();

    // $("img#bark").next("btn").remove();

    // $("ul#mittens").children("li").first().click(function() {
    //   $(this).remove();
    //   $("ul#spot").children("li").first().remove();
    // });
    //
    // $("ul#spot").children("li").first().click(function() {
    //   $(this).remove();
    //   $("ul#mittens").children("li").first().remove();
    // });
  });

  $("button#purr").click(function() {
    $("img#main").show();
    $("img#bark").hide();
    $("img#meow").hide();
    $("img#nap").hide();

    $("ul#mittens").prepend("<li>puuuuurrrrrrrrr</li>");
    $("ul#spot").prepend("<li>Oh you speak German? You fancy.</li>");

    $("img#purr").toggle();
    $("img#main").toggle();

    $("li").next().remove();

    // $("ul#mittens").children("li").first().click(function() {
    //   $(this).remove();
    //   $("ul#spot").children("li").first().remove();
    // });
    //
    // $("ul#spot").children("li").first().click(function() {
    //   $(this).remove();
    //   $("ul#mittens").children("li").first().remove();
    // });
  });

  $("button#nap").click(function() {
    $("img#main").show();
    $("img#bark").hide();
    $("img#meow").hide();
    $("img#purr").hide();

    $("ul#mittens").prepend("<li>*plays with yarn*</li>");
    $("ul#spot").prepend("<li>zzzzZZZZzzzZZZZZzzzz</li>");

    $("img#nap").toggle();
    $("img#main").toggle();

    $("li").next().remove();

  });
});
