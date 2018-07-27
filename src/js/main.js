


const UICtrl = (function () {
	const UISelectors = {
		navbar: '.navbar',
		menuToggler: '.js-menu-toggler'
	}

	return {
		menuToggler: function () {
			console.log('toggler clicked');
			const navbar = document.querySelector(UISelectors.navbar);

			if (navbar.classList.contains('open')) {
				navbar.classList.remove('open');
			} else {
				navbar.classList.add('open');
			}
		},

		getUISelectors: function () {
			return UISelectors;
		}
	}
}());

const UISelectors = UICtrl.getUISelectors();

document.querySelector(UISelectors.menuToggler).addEventListener('click', UICtrl.menuToggler);
