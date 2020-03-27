/*! @licence ScrollEvent v.1.0.0

    Copyright 2020 bitnulleins

    Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://.../
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.ScrollEvent = factory());
}(this, function () { 'use strict';

    let defaults = {
        delay: 0,
        repetition: 1,
        fullyInView: false
    };

    function visible(target, callback) {
        if (!callback || typeof callback !== 'function') return;

        let visibleCounter = 0;
        let fullyInView = this.defaults.fullyInView || defaults.fullyInView;
        let delay = this.defaults.delay || defaults.delay;
        let repetition = this.defaults.repetition || defaults.repetition;

        window.addEventListener('scroll', function (event) {
            let rect = target.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;

            let isVisible =
                    (fullyInView)
                    ? (elemTop >= 0) && (elemBottom <= window.innerHeight)
                    : elemTop < window.innerHeight && elemBottom >= 0;
            
            if (isVisible && visibleCounter < repetition) {
                visibleCounter++;
                setTimeout(callback, delay);
            }
        }, false);
    }

    function logger(message) {
		var details = [], len = arguments.length - 1;
		while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

		if (this.constructor.debug && console) {
			var report = "%cScrollEvent: " + message;
			details.forEach(function (detail) { return (report += "\n — " + detail); });
			console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
		}
    }

    function tealight(target, context) {
        if ( context === void 0 ) { context = document; }
  
        if (target instanceof Array) { return target.filter(isDomNode); }
        if (isDomNode(target)) { return [target]; }
        if (isDomNodeList(target)) { return Array.prototype.slice.call(target); }
        if (typeof target === "string") {
          try {
            var query = context.querySelectorAll(target);
            return Array.prototype.slice.call(query);
          } catch (err) {
            return [];
          }
        }
        return [];
    }
  
    function isObject(x) {
          return (
              x !== null &&
              x instanceof Object &&
              (x.constructor === Object ||
                  Object.prototype.toString.call(x) === '[object Object]')
          )
    }

    function each(collection, callback) {
		if (isObject(collection)) {
			var keys = Object.keys(collection);
			return keys.forEach(function (key) { return callback(collection[key], key, collection); })
		}
		if (collection instanceof Array) {
			return collection.forEach(function (item, i) { return callback(item, i, collection); })
		}
		throw new TypeError('Expected either an array or object literal.')
	}

    function deepAssign(target) {
		var sources = [], len = arguments.length - 1;
		while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

		if (isObject(target)) {
			each(sources, function (source) {
				each(source, function (data, key) {
					if (isObject(data)) {
						if (!target[key] || !isObject(target[key])) {
							target[key] = {};
						}
						deepAssign(target[key], data);
					} else {
						target[key] = data;
					}
				});
			});
			return target
		} else {
			throw new TypeError('Target must be an object literal.')
		}
	}
    
    let instance, config;

    function ScrollEvent(options) {
        if ( options === void 0 ) options = {};

        let invokedWithoutNew =
			typeof this === 'undefined' ||
			Object.getPrototypeOf(this) !== ScrollEvent.prototype;

		if (invokedWithoutNew) {
			return new ScrollEvent(options)
        }

        let buffer;
		try {
			buffer = deepAssign({}, defaults, options);
		} catch (e) {
			logger.call(this, 'Invalid configuration.', e.message);
        }

        try {
			var container = tealight(buffer.container)[0];
			if (!container) {
				throw new Error('Invalid container.')
			}
		} catch (e) {
            logger.call(this, e.message);
        }

        config = buffer;

        Object.defineProperty(this, 'defaults', { get: function () { return config; } });
        Object.defineProperty(this, 'visible', { get: function () { return visible; } });
        
        return instance ? instance : (instance = this)
    }

	return ScrollEvent;

}));