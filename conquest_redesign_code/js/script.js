// $( function(){

//     var $menu_button = $( ".mega_nav_container" ),
//         $nav         = $( ".mega_nav_dropdown" ),
//         $lev1_nav    = $( ".mega_nav_dropdown > li" ),
//         $lev2_nav    = $( ".mega_subcategories" ),

//         breakpoint = 679,

//         isMobile = function(){

//             return $( window ).width() < breakpoint;
//         };


//     $nav.hide();
//     $lev2_nav.hide();

//     $menu_button.on( "mouseenter", function( e ){

//         if( isMobile() === false ){
//             $nav.show();
//         }
//     } );

//     $menu_button.on( "mouseleave", function( e ){

//         if( isMobile() === false ){
//             $nav.hide();
//         }
//     } );

//     $lev1_nav.on( "mouseenter", function( e ){

//         if( isMobile() === false ){
//             $( this ).addClass( "active" ).find( ".mega_subcategories" ).show();
//         }
//     } );

//     $lev1_nav.on( "mouseleave", function( e ){

//         if( isMobile() === false ){
//             $( this ).removeClass( "active" ).find( ".mega_subcategories" ).hide();
//         }
//     } );

//     $menu_button.on( "click", function( e ){

//         if( isMobile() ){ $nav.toggle(); }

//         e.preventDefault();
//     } );















//     var $cat = $( ".category_heading" );

//     $cat.on( "mouseenter", function( e ){

//         $( this ).addClass( "active_cat" );
//     } );


//     $cat.on( "mouseleave", function( e ){

//         $( this ).removeClass( "active_cat" );
//     } );
// } );
