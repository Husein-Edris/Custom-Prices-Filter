jQuery(document).ready(function ($) {
	function handlePriceOptions(selectorId, defaultOption) {
		var dropdownElement = $('#' + selectorId);

		if (dropdownElement.length > 0) {
			$('.hideOnPageLoad').hide();

			var selectedValue = dropdownElement.val() || defaultOption;
			$('#' + selectedValue).show();

			// Handle change event on the dropdown
			dropdownElement.change(function () {
				// Hide all content divs
				$('.hideOnPageLoad').hide();

				var selectedValue = $(this).val();
				$('#' + selectedValue).show();
			});
		}
	}

	handlePriceOptions('priceoptionen');
});
