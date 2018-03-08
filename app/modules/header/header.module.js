angular.module("headerModule", [])
	.directive("headerComponent", [function () {
		return {
			restrict: "E",
			templateUrl: "modules/header/header.template.html",
			controller: "headerCtrl"
		}
	}])
	.controller("headerCtrl", ["$scope", function ($scope) {
		( function( window ) {
		'use strict';
		function classReg( className ) {
		  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}
		var hasClass, addClass, removeClass;
		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    if(elem['classList']) {
				elem.classList.add( c );
			}
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  	hasClass = function( elem, c ) {
		    	return classReg( c ).test( elem.className );
		  	};
		  	addClass = function( elem, c ) {
		    	if ( !hasClass( elem, c ) ) {
		      	elem.className = elem.className + ' ' + c;
		    	}
		  	};
		  	removeClass = function( elem, c ) {
		    	elem.className = elem.className.replace( classReg( c ), ' ' );
		  	};
		}
		function toggleClass( elem, c ) {
			var fn = hasClass( elem, c ) ? removeClass : addClass;
			fn( elem, c );
		}
		var classie = {
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass,
			// short names
			has: hasClass,
			add: addClass,
			remove: removeClass,
			toggle: toggleClass
		};
		if ( typeof define === 'function' && define.amd ) {
		  	define( classie );
		} else {
		  	window.classie = classie;
		}
		})( window );

		function init() {
		    window.addEventListener('scroll', function(e){
		        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		            shrinkOn = 100,
		            header = document.querySelector("header");
		        if (distanceY > shrinkOn) {
		            if(header != null) {
						classie.add(header,"smaller");
					}
		        } else {
		            if(header != null) {
						if (classie.has(header,"smaller")) {
							classie.remove(header,"smaller");
						}
					}
		        }
		    });
		}
		window.onload = init();
	}])
