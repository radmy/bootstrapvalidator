/*!
 * FormValidation (http://bootstrapvalidator.com)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation frameworks
 *
 * @version     v0.6.0-dev, built on 2014-11-27 4:12:29 PM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     http://bootstrapvalidator.com/license/
 */
// Support Zurb Foundation framework
(function($) {
    FormValidation.Framework.Foundation = function(element, options) {
        options = $.extend(true, {
            err: {
                clazz: 'error',
                parent: '^.*((small|large)-[0-9]+)\\s.*(columns).*$'
            },
            // Foundation doesn't support feedback icon as Bootstrap
            // Might be we have to adjust the CSS manually
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: 'fv-control-feedback'
            },
            row: {
                selector: '.row',
                valid: '',
                invalid: 'error',
                feedback: 'fv-has-feedback'
            }
        }, options);

        FormValidation.Base.apply(this, [element, options]);
    };

    FormValidation.Framework.Foundation.prototype = $.extend({}, FormValidation.Base.prototype, {
        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
            // TODO
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
            // TODO
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
            // TODO
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
            // TODO
        }
    });
}(jQuery));
