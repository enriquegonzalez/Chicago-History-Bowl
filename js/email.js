// anti-spam email
jQuery(document).ready(function(){
        jQuery('span#goaway').each(function(i) {
                var text = jQuery(this).text();
                var address = text.replace("x", "historybowl");
        jQuery(this).text(address);
        });
});