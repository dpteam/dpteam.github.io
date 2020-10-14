!function ($, window, document, _undefined) {
    "use strict";

    XF.THHolidaysMuhi = XF.Element.newHandler({
        $options: null,

        init: function () {
            var options = {
                muhi: 5
            };

            try {
                var configOptions = $.parseJSON($('.js-thHolidaysMuhiOptions').first().html()) || {};
                for (let key in configOptions) {
                    options[key] = parseFloat(configOptions[key]);
                }
            }
            catch (e) {
                console.error(e);
            }

            this.$options = options;

            for (var i = 0; i < options.muhi; i++) {
                this.initMooha();
            }
        },

        initMooha: function () {
            var n = 0,
                i = document.createElement('img'),
                z = document.createElement('div'),
                zs = z.style,
                a = window.innerWidth * Math.random(), b = window.innerHeight * Math.random();
            zs.position = "fixed";
            zs.left = 0;
            zs.top = 0;
            zs.opacity = 0;
            z.appendChild(i);
            i.src = 'data:image/gif;base64,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';
            $('.js-thHolidaysMoohaContainer').append(z);

            function random(o, m) {
                return Math.max(Math.min(o + (Math.random() - .5) * 400, m - 50), 50);
            }

            function animate() {
                var x = random(a, window.innerWidth), y = random(b, window.innerHeight),
                    d = 5 * Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));
                zs.opacity = n;
                n = 1;
                zs.transition = zs.webkitTransition = d / 1000 + 's linear';
                zs.transform = zs.webkitTransform = 'translate(' + x + 'px,' + y + 'px)';
                i.style.transform = i.style.webkitTransform = (a > x) ? '' : 'scaleX(-1)';
                a = x;
                b = y;
                setTimeout(animate, d);
            }

            setTimeout(animate, Math.random() * 3000);
        }
    });

    XF.Element.register('th-holidays-muhi', 'XF.THHolidaysMuhi');
}(jQuery, window, document);
