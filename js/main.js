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

            var timestamp = Math.floor(Date.now() / 1000);
            //switch day: create appointment in col
            switch($('#dia').val()) {
                case "lunes":
                    coldia = $('.sched-cols').find("[data-column-dia='lunes'] .sched-colwr-content");
                    item = "<a class='sched-activity cita-lunes "+timestamp+"' href='javascript:void(0)' data-onclick='popup' data-event-id='"+timestamp+"'>"
                        +"<div class='sched-activity-inner'>"
                            +"<div class='sched-activity-inner-bar'></div>"
                            +"<div class='sched-activity-title'>"+$('#titulo').val()+"</div>"
                            +"<div class='sched-activity-subtitle'>"+$('#comienza').val()+"-"+$('#finaliza').val()+"</div>"
                            +"<div class='sched-activity-description' data-full='"+$('#descripcion').val()+"'></div>"
                        +"</div>"
                    +"</a>";
                    $(item).appendTo(coldia);
                    break;
            }

            //switch time: position & height of the appointment
            switch($('#comienza').val()) {
                case "15:30":
                    $("."+timestamp).css({
                        "top":"375px",
                        "height": "124px",
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;                
            }


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


