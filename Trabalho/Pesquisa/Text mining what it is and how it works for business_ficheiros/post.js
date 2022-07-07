$(function () {
    var options = {
        auto: true,
        mode: 'fade',
        speed: 700,
        pause: 8000,
        controls: false,
        onSlideAfter: function ($slideElement, oldIndex, newIndex) {
            this.stopAuto();
            this.startAuto();
        }
    };

    $('#galleryListImages').bxSlider(options);
});

$(function () {
    
    function socialFixed() {
        var $window = $(window);
        var $sidebar = $(".sidebarSocial");
        var $headerHeight = $(".sectionWaContentPost");
        var $sidebarTop = $headerHeight.position().top;
        var $sidebarHeight = $sidebar.height();
        var $footer = $('.section-top-rated,.sectionRelatedServices').first();
        var $footerTop = $footer.position().top;
        var $menu = $('.navbar');
        var $menuHeight = $menu.height();

        $window.scroll(function (event) {
            $sidebar.addClass("fixed");
            var $scrollTop = $window.scrollTop();
            var $topPosition = Math.max($menuHeight, $sidebarTop - $scrollTop);

            if ($scrollTop + $sidebarHeight > $footerTop) {
                var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight + $menuHeight);
            }

            $sidebar.css("top", $topPosition);
        });

        if ($(window).scrollTop() > 100) {
            $sidebar.addClass("fixed");
            var $scrollTop = $window.scrollTop();
            var $topPosition = Math.max($menuHeight, $sidebarTop - $scrollTop);
            $sidebar.css("top", $topPosition);
        }
    }

    socialFixed();
    $(window).resize(function () {
        socialFixed();
    });
    
});