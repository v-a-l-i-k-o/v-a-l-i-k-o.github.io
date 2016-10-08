/*********************************************************************
 * #### jQuery Awesome Sosmed Share Button / AyoShare.js v13 ####
 * Coded by Ican Bachors 2014.
 * http://ibacor.com/labs/jquery-awesome-sosmed-share-button/
 * Updates will be posted to this site.
 *********************************************************************/

$.fn.ayoshare = function(k, p, r) {
    $(this).each(function(i, aa) {
        var b = encodeURIComponent($(this).data('ayoshare')),
            a = ($(document).attr('title') != null) ? $(document).attr('title') : '',
            desk = ($('meta[name="description"]').attr('content') != null) ? $('meta[name="description"]').attr('content') : '',
            img = ($('meta[property="og:image"]').attr('content') != null) ? $('meta[property="og:image"]').attr('content') : '',
            html = '';
        var c = ($(this).attr('id') != null) ? '#' + $(this).attr('id') + ' #ayoshare' + i : '.' + $(this).attr('class') + ' #ayoshare' + i;
        if (k == true) {
            html += '<p><a href="http://www.facebook.com/sharer/sharer.php?u=' + b + '" onclick="javascript:void window.open(\'http://www.facebook.com/sharer/sharer.php?u=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-facebook" title="Facebook"><i class="fa fa-facebook"></i> <span class="ayo_count_fb"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
            ayo_facebook(b, c)
        }
        if (p == true) {
            html += '<p><a href="http://vk.com/share.php?url=' + b + '" onclick="javascript:void window.open(\'http://vk.com/share.php?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-vk" title="VK"><i class="fa fa-vk"></i> <span class="ayo_count_vk"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
            ayo_vk(b, c)
        }
        if (r == true) {
            html += '<p><a href="https://twitter.com/share?text=' + a + '+-+&url=' + b + '" onclick="javascript:void window.open(\'https://twitter.com/share?text=' + a + '+-+&url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-twitter" title="Twitter"><i class="fa fa-twitter"></i> <span class="ayo_count_tw"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
            ayo_twitter(b, c)
        }
        $(this).html('<div class="ayoshare" id="ayoshare' + i + '">' + html + '</div>')
    });


    function ayo_facebook(c, d) {
        $.ajax({
            url: 'https://graph.facebook.com/v2.7/?id=' + c + '&access_token=443213172472393|l2IEt1tuyYta_278fR5NAg8V1jI',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a.share.share_count);
                $(d + ' .ayo_count_fb').html(b)
            },
            error: function() {
                $(d + ' .ayo_count_fb').html(0)
            }
        })
    }


    function ayo_vk(f, g) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"http://vk.com/share.php?act=count&index=1&url=" + f + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            },
            success: function(a) {
                var b = $(a).find("content").text();
                var c = b.split(",");
                var d = c[1].split(")");
                var e = ayo_num(d[0]);
                $(g + ' .ayo_count_vk').html(e)
            },
            error: function() {
                $(g + ' .ayo_count_vk').html(0)
            }
        })
    }


    function ayo_twitter(d, c) {
        $.ajax({
            url: 'https://opensharecount.com/count.json?url=' + d,
            crossDomain: true,
            dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a.count);
                $(c + ' .ayo_count_tw').html(b)
            },
            error: function() {
                $(c + ' .ayo_count_tw').html(0)
            }
        })
    }

    function ayo_num(a) {
        var b = parseInt(a, 10);
        if (b === null) {
            return 0
        }
        if (b >= 1000000000) {
            return (b / 1000000000).toFixed(1).replace(/\.0$/, "") + "G"
        }
        if (b >= 1000000) {
            return (b / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
        }
        if (b >= 1000) {
            return (b / 1000).toFixed(1).replace(/\.0$/, "") + "K"
        }
        return b
    }
};
