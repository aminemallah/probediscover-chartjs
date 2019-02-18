'use strict';

var helpers = require('../helpers/helpers.core');

var defaults = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers.merge(this[scope] || (this[scope] = {}), values);
	}
};

defaults._set('global', {
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: 'white',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	defaultLineHeight: 1.2,
	showLines: true
});

module.exports = function() {

// Occupy the global variable of Chart, and create a simple base class
var Chart = function(item, config) {
    this.construct(item, config);
    return this;
};

Chart.Chart = Chart;

return Chart;
};`
