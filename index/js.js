let arr = [[322.5,455],[456,588],[589,722],[722.5,784],[785,874],[875,987],[988.5,1124],[1125.5,1218],[1219,1281],[1281.5,1674],[1675.5,2175],[2176,2550]];
let st = [['S1','G1'],['S2','G2'],['S3','G3'],['S4','G4'],['S5','G5'],['S6','G6'],['S7','G7'],['S8','G8'],['S9','G9'],['S10','G10'],['S11','G11'],['S12','G12']];
jQuery(window).scroll(function () {
    for(let i = 0; i < arr.length; i++) {
        let S = '#' + st[i][0];
        var logo = jQuery(S);
		if (jQuery(this).scrollTop() >= arr[i][0] && jQuery(this).scrollTop() <= arr[i][1]) { //スクロールが500pxを越えたら
			logo.addClass(st[i][1]);
		} else { //スクロールが500pxを越えなければ
			logo.removeClass(st[i][1]);
        }
    }   
   
    var logo = jQuery('.side');
    if(jQuery(this).scrollTop() > 150){
        logo.addClass('addside');
    } else {
        logo.removeClass('addside');
    }
});
$(window).on('resize', function(){
    var windowSize = $(window).width();
    
    var logo = jQuery('.center');
    
    if (windowSize < 1300) {
        logo.addClass('addcenter');
        $('aside').hide();
    } else {
        logo.removeClass("addcenter");
        $('aside').show();
    }
  });
  
