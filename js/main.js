(function(){

    //append dybanic popup ready to display clicked sched item details 
    //$("body").append('<div class="sched-popup-overlay"></div><div class="sched-popup"><a href="#" class="sched-popup-close"><i class="sched-icon sched-icon-times"></i></a><div class="sched-popup-media"></div><div class="sched-popup-title">Demo Actividad</div><div class="sched-popup-description"></div></div>');
    //$("body").append('<div class="sched-popup-overlay"></div><!-- popup sched wr --><div class="sched-popup sched-popup-has-image" id="sched-schedule-7-295205655-popup" style="left: 119.28125px; top: 720.78125px; display: none;"><!-- close button --><a href="#" class="sched-popup-close" style="color: rgb(255, 255, 255);"><i class="sched-icon sched-icon-times"></i></a><!-- /close button --><!-- picture --><div class="sched-popup-media" data-media-type="image"><img src="https://unsplash.imgix.net/photo-1420819453217-57b6badd9e19?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"></div><!-- /picture --><!-- title --><div class="sched-popup-title"><div>DJ Primary Attack</div></div><!-- /title --><!-- long description --><div class="sched-popup-description"><!-- head img --><div class="sched-event-image-load"><img src="https://unsplash.imgix.net/photo-1420819453217-57b6badd9e19?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"></div><!-- /head img --><!-- quick details --><div class="sched-meta"><div class="sched-meta-field"><div class="sched-meta-icon"><i class="sched-icon sched-icon-clock-o"></i></div><div class="sched-meta-right"><div class="sched-meta-name">Time On Stage</div><div class="sched-meta-value">1:00 pm - 3:30 pm</div></div></div><div class="sched-meta-field"><div class="sched-meta-icon"><i class="sched-icon sched-icon-map-marker"></i></div><div class="sched-meta-right"><div class="sched-meta-name">Location</div><div class="sched-meta-value">Mainstage I</div></div></div></div><!-- /quick details --><!-- text --><p class="sched-popup-description-text">Nullam ultrices blandit mauris, ut blandit felis facilisis sit amet. Nullam vel elementum sem. Nam porta velit at neque maximus porttitor. Suspendisse convallis nulla id nibh suscipit venenatis. Pellentesque eu neque ac orci vulputate fringilla. Suspendisse velit ante, convallis sed nulla ut, suscipit tristique erat. Donec dolor nisl, maximus ut velit nec, aliquet hendrerit tortor.</p><!-- text --></div><!-- /long description --></div><!-- popup sched wr -->');


    $("body").append('<div class="sched-popup-overlay"></div><!-- popup sched wr --><div class="sched-popup sched-popup-has-image" id="sched-schedule-7-295205655-popup" style="left: 119.28125px; top: 720.78125px; display: none;"><!-- close button --><a href="#" class="sched-popup-close" style="color: rgb(255, 255, 255);"><i class="sched-icon sched-icon-times"></i></a><!-- /close button --><!-- picture --><div class="sched-popup-media" data-media-type="image"><img src="uploads/ny_demo.jpg"></div><!-- /picture --><!-- title --><div class="sched-popup-title"><div>DJ Primary Attack</div></div><!-- /title --><!-- long description --><div class="sched-popup-description"><!-- head img <div class="sched-event-image-load"><img src="https://unsplash.imgix.net/photo-1420819453217-57b6badd9e19?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"></div> /head img --><!-- quick details --><div class="sched-meta"><div class="sched-meta-field"><div class="sched-meta-icon"><i class="sched-icon sched-icon-clock-o"></i></div><div class="sched-meta-right"><div class="sched-meta-name">Time On Stage</div><div class="sched-meta-value">1:00 pm - 3:30 pm</div></div></div><div class="sched-meta-field"><div class="sched-meta-icon"><i class="sched-icon sched-icon-map-marker"></i></div><div class="sched-meta-right"><div class="sched-meta-name">Location</div><div class="sched-meta-value">Mainstage I</div></div></div></div><!-- /quick details --><!-- text --><p class="sched-popup-description-text">Nullam ultrices blandit mauris, ut blandit felis facilisis sit amet. Nullam vel elementum sem. Nam porta velit at neque maximus porttitor. Suspendisse convallis nulla id nibh suscipit venenatis. Pellentesque eu neque ac orci vulputate fringilla. Suspendisse velit ante, convallis sed nulla ut, suscipit tristique erat. Donec dolor nisl, maximus ut velit nec, aliquet hendrerit tortor.</p><!-- text --></div><!-- /long description --></div><!-- popup sched wr -->');

    //single sched event click
    var overlay = $(".sched-popup-overlay");
    var clicked_eventid = $('#opened-schedid').val();
    var popup_top_offset = 100;
    var autoplay_videos = 1;

    $(document).on("click", ".sched-activity", openSched);
    function openSched(){
        var clicked_eventid = $(this).data('event-id');

        var popup = $('.sched-popup');
        
        var the_event = $('.'+clicked_eventid);
        
        var position = the_event.offset(),
            popup_width = 500,
            event_id = clicked_eventid,
            event_description = $(this).find('.sched-event-fulldescription[data-event-id='+event_id+']'),
            event_inner = the_event.find('.sched-event-inner'); 

        $('#opened-schedid').val(clicked_eventid);

        the_event.hide();//tambien dentro del bloque nuevo de código

        console.log("clicked_eventid: "+clicked_eventid)
        console.log("the_event: "+the_event);
        console.log("position: "+position);
        console.log("popup_width: "+popup_width);
        console.log("event_id: "+event_id);
        console.log("event_description: "+event_description);
        console.log("event_inner: "+event_inner);

        show_overlay();//tambien dentro del bloque nuevo de código


//nuevo noche

        resize_popup();
     
        popup.find('.sched-popup-title').html('<div>'+the_event.find('.sched-event-title').html()+'</div>').css({
            'font-size': '14px',
            'line-height': '18px',
            'padding': '14px 20px 0px 20px',
            'height': the_event.innerHeight()-14,
            'background-color': the_event.attr('data-color'),
            'text-align': the_event.find('.sched-event-inner').css('text-align')
        });

        popup.find('.sched-popup-close').css('color', event_inner.css('color'))



        //add dynamic content to sched opened item
        var this_title = $(this).data('title');

        popup.find('.sched-popup-title > div').html(this_title);


     
        popup.find('.sched-popup-edit-event').click(function(e) {
            e.preventDefault();
            sched_open_event_editor(the_event.attr('data-event-id'));
            close_event();
        });

        popup.css({
            'width': the_event.innerWidth()-1,
        });

        var document_width = $(document).width();
        popup.css(position).fadeIn(400, function() {

            //the_event.hide();
            popup.find('.sched-popup-title').animate({
                'font-size': 18,
                'line-height': 18,
                'padding': 30,
                'height': '18',
                'width': popup_width-60,
                'background-color': the_event.attr('data-color')
            }, {duration: 800});

            popup.animate({
                left: ($(document).width()-popup_width)/2,
                top: $(window).scrollTop()+popup_top_offset,
            }, 600, function() {
                popup.css('width', popup_width);

                popup.find('.sched-popup-description').slideDown(400);
                popup.addClass('sched-popup-done');
                popup.find('.sched-popup-title').css('width', '');

                popup.find('.sched-popup-media').slideDown(400, function() {
                    if(event_description.attr('data-media-type') == 'youtube') {
                        var autoplay = (autoplay_videos == 1) ? '?autoplay=1' : '';
                        popup.find('.sched-popup-media').html('<iframe width="560" height="315" src="//www.youtube.com/embed/'+$event_description.attr('data-media-link')+autoplay+'" frameborder="0" allowfullscreen></iframe>');
                        that.resize_popup();
                    }
                });
            });
            //show_overlay();
        });
// fin nuevo noche







        overlay.addClass('sched-popup-overlay-show');
        setTimeout(function() {
            overlay.removeClass('sched-popup-overlay-hide');
        }, 500);       
    }

    overlay.click(function(e) {
        e.preventDefault();
        close_event(clicked_eventid);
    });
    $(document).keyup(function(e) {
        if(e.keyCode == 27) {
            close_event(clicked_eventid);
        }
    });



    function resize_popup() {
        var popup_width = 500;
        var popup = $('.sched-popup');

        popup.css({
            'width': popup_width,
            'left': ($(window).width()-popup_width)/2,
        });
        var type = popup.find('.sched-popup-media').attr('data-media-type');
        if(type == 'youtube') {
            popup.find('.sched-popup-media').css({
                width: popup_width,
                height: popup_width/16*9
            });
            popup.find('.sched-popup-media iframe').attr('width', popup_width).attr('height', popup_width/16*9);
        }else {
            popup.find('.sched-popup-media').css({
                width: '100%',
                height: ''
            });
        }

    };


    function show_overlay(){
        overlay.addClass('sched-popup-overlay-show');
        overlay.stop().removeClass('sched-popup-overlay-hide').css('display', 'none').css('opacity', 1).fadeTo(500, .5);
    }


    function close_event(){
        overlay.removeClass('sched-popup-overlay-show');     
        overlay.addClass('sched-popup-overlay-hide');
        setTimeout(function() {
            overlay.removeClass('sched-popup-overlay-hide');
        }, 400); 

        var popup = $(".sched-popup");
        var clicked_eventid = $('#opened-schedid').val();
        
        var schedid = $("."+clicked_eventid);
        

        var position = schedid.css({
                'visibility': 'hidden',
                'display': 'block'
            }).offset();

        schedid.hide().css({
            'visibility': ''
        });        
        

        popup.removeClass('sched-popup-done');
        
        popup.find('.sched-popup-media').slideUp(200);

        popup.find('.sched-popup-description').slideUp(200, function() {
            popup.find('.sched-popup-title').stop().animate({
                'font-size': '14px',
                'line-height': '18px',
                'padding': '14px 20px 0px 20px',
                'height': schedid.innerHeight()-14,
                'width': schedid.innerWidth()-41,
            }, 400, function() {
                //return;
                popup.find('.sched-popup-media').html('');
                schedid.show();
                popup.fadeOut(600);
            });
            popup.css('width', '')
            popup.animate(position, 600);
        });
    
    }

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
                    
                    item = "<a class='sched-activity cita-lunes "+timestamp+"' href='javascript:void(0)' data-onclick='popup' data-event-id='"+timestamp+"' data-color='"+$('#color').val()+"' data-title='"+$('#titulo').val()+"'>"
                        +"<div class='sched-activity-inner'>"
                            +"<div class='sched-activity-inner-bar'></div>"
                            +"<div class='sched-activity-title' data-color='"+$('#color').val()+"'>"+$('#titulo').val()+"</div>"
                            +"<div class='sched-activity-subtitle'>"+$('#comienza').val()+"-"+$('#finaliza').val()+"</div>"
                            +"<div class='sched-activity-description' data-full='"+$('#descripcion').val()+"'></div>"
                        +"</div>"
                    +"</a>"
/*
                    //demo
                    +'<!-- jv popup sched wr --><div class="sched-popup sched-popup-has-image" id="'+timestamp+'" ><!-- close button --><a href="#" class="sched-popup-close"><i class="sched-icon sched-icon-times"></i></a><!-- /close button --><!-- picture --><div class="sched-popup-media" data-media-type="image"><img src="https://unsplash.imgix.net/photo-1420819453217-57b6badd9e19?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"></div><!-- /picture --><!-- title --><div class="sched-popup-title"><div>DJ Primary Attack</div></div><!-- /title --><!-- long description --><div class="sched-popup-description"><!-- head img <div class="sched-event-image-load"><img src="https://unsplash.imgix.net/photo-1420819453217-57b6badd9e19?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"></div> /head img --><!-- quick details --><div class="sched-meta"><div class="sched-meta-field"><div class="sched-meta-icon"><i class="sched-icon sched-icon-clock-o"></i></div><div class="sched-meta-right"><div class="sched-meta-name">Time On Stage</div><div class="sched-meta-value">1:00 pm - 3:30 pm</div></div></div><div class="sched-meta-field"><div class="sched-meta-icon"><i class="sched-icon sched-icon-map-marker"></i></div><div class="sched-meta-right"><div class="sched-meta-name">Location</div><div class="sched-meta-value">Mainstage I</div></div></div></div><!-- /quick details --><!-- text --><p class="sched-popup-description-text">Nullam ultrices blandit mauris, ut blandit felis facilisis sit amet. Nullam vel elementum sem. Nam porta velit at neque maximus porttitor. Suspendisse convallis nulla id nibh suscipit venenatis. Pellentesque eu neque ac orci vulputate fringilla. Suspendisse velit ante, convallis sed nulla ut, suscipit tristique erat. Donec dolor nisl, maximus ut velit nec, aliquet hendrerit tortor.</p><!-- text --></div><!-- /long description --></div><!-- popup sched wr -->'
*/
                    ;

                    $(item).appendTo(coldia);
                   
                    break;

                case "martes":
                    coldia = $('.sched-cols').find("[data-column-dia='martes'] .sched-colwr-content");
                    item = "<a class='sched-activity cita-martes "+timestamp+"' href='javascript:void(0)' data-onclick='popup' data-event-id='"+timestamp+"'>"
                        +"<div class='sched-activity-inner'>"
                            +"<div class='sched-activity-inner-bar'></div>"
                            +"<div class='sched-activity-title'>"+$('#titulo').val()+"</div>"
                            +"<div class='sched-activity-subtitle'>"+$('#comienza').val()+"-"+$('#finaliza').val()+"</div>"
                            +"<div class='sched-activity-description' data-full='"+$('#descripcion').val()+"'></div>"
                        +"</div>"
                    +"</a>";
                    $(item).appendTo(coldia);
                    break;

                case "miercoles":
                    coldia = $('.sched-cols').find("[data-column-dia='miercoles'] .sched-colwr-content");
                    item = "<a class='sched-activity cita-miercoles "+timestamp+"' href='javascript:void(0)' data-onclick='popup' data-event-id='"+timestamp+"'>"
                        +"<div class='sched-activity-inner'>"
                            +"<div class='sched-activity-inner-bar'></div>"
                            +"<div class='sched-activity-title'>"+$('#titulo').val()+"</div>"
                            +"<div class='sched-activity-subtitle'>"+$('#comienza').val()+"-"+$('#finaliza').val()+"</div>"
                            +"<div class='sched-activity-description' data-full='"+$('#descripcion').val()+"'></div>"
                        +"</div>"
                    +"</a>";
                    $(item).appendTo(coldia);
                    break;

                case "jueves":
                    coldia = $('.sched-cols').find("[data-column-dia='jueves'] .sched-colwr-content");
                    item = "<a class='sched-activity cita-jueves "+timestamp+"' href='javascript:void(0)' data-onclick='popup' data-event-id='"+timestamp+"'>"
                        +"<div class='sched-activity-inner'>"
                            +"<div class='sched-activity-inner-bar'></div>"
                            +"<div class='sched-activity-title'>"+$('#titulo').val()+"</div>"
                            +"<div class='sched-activity-subtitle'>"+$('#comienza').val()+"-"+$('#finaliza').val()+"</div>"
                            +"<div class='sched-activity-description' data-full='"+$('#descripcion').val()+"'></div>"
                        +"</div>"
                    +"</a>";
                    $(item).appendTo(coldia);
                    break;
                    
                case "viernes":
                    coldia = $('.sched-cols').find("[data-column-dia='viernes'] .sched-colwr-content");
                    item = "<a class='sched-activity cita-viernes "+timestamp+"' href='javascript:void(0)' data-onclick='popup' data-event-id='"+timestamp+"'>"
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
