'use strict';

var UICtrl = function () {
	var UISelectors = {
		navbar: '.navbar',
		menuToggler: '.js-menu-toggler'
	};

	return {
		menuToggler: function menuToggler() {
			console.log('toggler clicked');
			var navbar = document.querySelector(UISelectors.navbar);

			if (navbar.classList.contains('open')) {
				navbar.classList.remove('open');
			} else {
				navbar.classList.add('open');
			}
		},

		getUISelectors: function getUISelectors() {
			return UISelectors;
		}
	};
}();

var UISelectors = UICtrl.getUISelectors();

document.querySelector(UISelectors.menuToggler).addEventListener('click', UICtrl.menuToggler);