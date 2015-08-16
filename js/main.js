(function(){

    //popup
    //$("body").append('<div class="sched-popup-overlay"></div><div class="sched-popup"><a href="#" class="sched-popup-close"><i class="sched-icon sched-icon-times"></i></a><div class="sched-popup-media"></div><div class="sched-popup-title">Demo Actividad</div><div class="sched-popup-description"></div></div>');

    //select day
    $('ul.day-picker li').on('click', function(){
        $(this).toggleClass('day-selected');
        
        var diasemana = [];
        $('.day-picker li.day-selected').each( function() {
             diasemana.push($(this).data('day')); 
             $('#dia').val(diasemana);//save selected days into hidden field to be called from json
        });

    });
    
    //select activity color
    $('ul.color-picker li').on('click', function(){
        $('.color-selected').removeClass('color-selected');
        $(this).addClass('color-selected');
        $('#color').val($(this).data('color'));//save selected color into hidden field to be called from json
    });

    //serialize Form to JSON
    $('form').submit(function (e) {
        e.preventDefault();

        var data = $(this).serializeFormJSON();
        console.log(data);
        $('#jsonresp').html($.param(data));

    });

}(jQuery));


(function ($) {
    $.fn.serializeFormJSON = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);


