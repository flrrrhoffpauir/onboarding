$(function($) {
	
	function initModal() {

		/** variables */
		var overlay 	= $(".modal-overlay");
		var trigger 	= $(".modal-trigger");
		var show_class 	= "modal-show";

		/** Show modal window based on trigger's data-modal attr */
		trigger.each(function() {
			var modal = $("#" + $(this).attr("data-modal"));
			
			/** listeners */
			$(this).click(showModal);
			overlay.click(closeModal);
			$("i", modal).click(closeModal);

			/** handlers */
			function showModal() {
				if(!modal.hasClass(show_class))
					modal.addClass(show_class);
			};

			function closeModal() {
				if(modal.hasClass(show_class))
					modal.removeClass(show_class);
			};
		});
	};

	initModal();
});