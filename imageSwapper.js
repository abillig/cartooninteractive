$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > 320 && y < 9000) {
        $('#lead_image').fadeOut('slow');
    }

    if (y < 320 || y > 9000) {
      $('#lead_image').fadeIn('slow');
      // $('.images').fadeOut('slow')
    }
    // else {$('#lead_image').fadeOut('slow')};
});

var $findme = $('.section');

	function Scrolled() {
        $findme.each(function() {
            var $section = $(this),
                findmeOffset = $section.offset(),
                findmeTop = findmeOffset.top,
                findmeBottom = $section.height() + findmeTop,
                scrollTop = $(document).scrollTop(),
                visibleBottom = window.innerHeight,
                prevVisible = $section.prop('_visible');

            if ((findmeTop > scrollTop + visibleBottom) ||
                 findmeBottom < scrollTop) {
                visible = false;
            } else visible = true;

            if (!prevVisible && visible) {
            var slide_num = $section.attr('id').substring(4,5)
                // $section.attr('id').substring()
                // if ($('#img' + slide_num).attr("class") !== "img current"){

                  $('.current').fadeOut('slow')
                  $('#img' + slide_num).addClass("current")
                  $('#img' + slide_num).css('display', 'inline')
                // }

            }
            $section.prop('_visible', visible);
        });
    }

    function Setup() {
        var $top = $('#top'),
            $bottom = $('#bottom');

        $top.height(500);
        $bottom.height(500);

        $(window).scroll(function() {
            Scrolled();
        });
    }

    $(document).ready(function() {
        Setup();
    });
