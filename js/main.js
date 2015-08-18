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

        //timediff
        var comienza = $('#comienza').val(),
            finaliza = $('#finaliza').val();
        timediff(comienza,finaliza);            



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
                case "08:00":
                    var rowposition = 0, //see if in a future version i can get the row position via loop
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();//traerlo de una variav

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "09:00":
                    var rowposition = 1,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "10:00":
                    var rowposition = 2,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val(); 

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;
              

                case "11:00":
                    var rowposition = 3,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "12:00":
                    var rowposition = 4,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "13:00":
                    var rowposition = 5,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "14:00":
                    var rowposition = 6,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "15:00":
                    var rowposition = 7,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "16:00":
                    var rowposition = 8,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "17:00":
                    var rowposition = 9,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "18:00":
                    var rowposition = 10,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "19:00":
                    var rowposition = 11,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
                        "width": "100%",
                        "background-color":$('.color-selected').data('color')
                    });
                    break;


                case "20:00":
                    var rowposition = 12,
                        pxhour = 50,//1h in the sched table = 50px height
                        pxsinglemin = pxhour/60,
                        timemin = $('#timediff-m').val();

                    var timeposition = rowposition*pxhour+timemin*pxsinglemin;
                    var cellheight = $('#timediff-h').val()*pxhour+($('#timediff-m').val()*pxsinglemin);
                   $("."+timestamp).css({
                        "top":timeposition,
                        "height": cellheight,
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

function timediff(inicio,fin){
    var starts = $('#comienza').val(),
        ends = $('#finaliza').val(),    
        hours = ends.split(':')[0] - starts.split(':')[0],
        minutes = ends.split(':')[1] - ends.split(':')[1];
    
    minutes = minutes.toString().length<2?'0'+minutes:minutes;
    if(minutes<0){ 
        hours--;
        minutes = 60 + minutes;
    }
    hours = hours.toString().length<2?'0'+hours:hours;
    $('#timediff-h').val(hours);//*60 because i need mins
    $('#timediff-m').val(minutes);
    $('#timediff-inmins').val(hours*60+minutes);    
}
