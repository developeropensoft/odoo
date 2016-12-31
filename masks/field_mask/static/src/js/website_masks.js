odoo.define('assets.backend', function (require) {
    "use strict";


    var ajax = require('web.ajax');

    $(document).ready(function () {

var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};
 

        $('input.phone').mask(SPMaskBehavior, spOptions);
		$('span.phone').mask(SPMaskBehavior, spOptions);
		$('input.o_address_zip').mask('00000-000').find("input").attr("placeholder", "00000-000");

    });
});
