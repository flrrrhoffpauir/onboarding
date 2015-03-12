$(function($) {

	$(window).load(function() {

		//*
		/** remove all of the sg styles */
		$("body").find("link").remove();
		$("body").find("style").remove();
		//*/

		/** show the page and remove some random script */
		$("html").addClass("done");
		$("html").children("script").remove();

		/** disable submit button until the user answers the first question */
		$("input[type=submit]").addClass("pointers-no");

		/** remove sg-hide classes */
		$(".sg-hide").removeClass("sg-hide");


		/** change the default wording of drop downs */
		function updateSelectListText() {
			$(".sg-question-options select").each(function() {

				// get label and question title for select list
				var question_title = $(this).parent().prev();
				var label = question_title.find("label");

				// remove "this field is required" text
				if(label.has($("strong"))) {
					$("strong", label).remove();
				}

				// if the parent is not another form element, remove the title
				if(!question_title.parent().hasClass("sg-type-group")) {
					question_title.remove();
				}

				// always remove the label
				label.remove();

				// set the option text
				var label_text = $.trim(label.text());
				$("option:nth-child(1)", this).text(label_text);
			});
		}
		updateSelectListText();


		/** toggle the g-personal-info-theirs div from showing based on
			the answer to q-determine-user, show q-personal-info-yours */
		function initFirstQuestion() {
			var form_has_changed = false;

			$(".q-determine-user :radio").change(function() {
				var val = $(this).val();
				var elm_theirs = $(".q-personal-info-theirs");
				var elm_yours = $(".q-personal-info-yours");

				// remove show-by-default classes
				$(".show-by-default").removeClass("show-by-default");

				// myself
				if(val == "10061" && !elm_yours.hasClass("pointers-no")) {
					if(!elm_theirs.hasClass("do-display"))
						elm_theirs.addClass("do-display");
					elm_theirs.show().slideUp(function() {
						elm_theirs.removeClass("do-display");
					});
				}
				// on behalf of
				else if(val == "10062") {
					if(!elm_theirs.find($(".sg-question")).hasClass("do-display"))
						elm_theirs.find($(".sg-question")).addClass("do-display");
					elm_theirs.hide().slideDown(function() {
						// 
					});
				}

				// fade in q-person-info-yours and allow pointer events
				if(elm_yours.hasClass("pointers-no")) {
					elm_yours.removeClass("pointers-no").addClass("pointers-yes");
				}

				if(!form_has_changed) {
					$(".pointers-no").removeClass("pointers-no").addClass("pointers-yes");
					form_has_changed = true;
				}
			});
			
			// trigger the change listener if there are errors when the form is submitted
			if($(".sg-error-message").hasClass("sg-error-display")) {
				$(".q-determine-user :radio:checked").trigger("change");
			}
			
		}
		initFirstQuestion();
		

		/** add skip buttons next to section titles that don't have required fields */
		function addSkipButtons() {
			var skip_button = '<button class="button-skip" type="button">Skip</button>';
			$("h1", ".q-is-skippable").append(skip_button);
		}
		addSkipButtons();


		/** change title of q-essay, hide textarea, and make it show on click of title */
		function initEssayToggle() {
			var i = 0;

			$(".q-essay").each(function() {
				var toggle_class = "toggle-q-essay";
				var target_essay = $(".q-essay-" + i);
				var label_text = $(".sg-question-title label", this).text();
				var anchor_tag = '<a href="javascript:void(0);" class="' + toggle_class + '">' + label_text + '</a>';

				// hide textarea
				$(".sg-question-options", this).hide();

				// wrap label in anchor tag
				$(".sg-question-title label", this).html(anchor_tag);

				// toggle visibility of textarea
				$("." + toggle_class, this).click(function() {
					$(".sg-question-options", target_essay).slideToggle();
				});

				i++;
			});
		}
		initEssayToggle();


		/** results page functionality */
		function initResultsPage() {
			// add class to body if we are on the results page
			// otherwise exit function
			if($(".sg-body").hasClass("page-results")) {
				$("body").addClass("page-results");
			} else {
				return;
			}

			// display first name near personal navigator
			var fn = $("span[data-fn]").parent().parent().find("div").text();
			$("span[data-fn-here]").text(fn);					

			// hide all question group titles, so we just have questions and answers
			$(".question-response-group").each(function() {
				if($(this).prev($("question-title"))) {
					$(this).prev().remove();
				}
			});

			// if an unanswered question is in a question group, we need to hide it
			$(".question-answers").each(function() {
				if($(this).text() === "" && $(this).parent($("question-response"))) {
					$(this).parent().remove();
				}
			});

			// replace question-title text with data-result-title attribute
			$(".question-response span").each(function() {
				var new_title = $(this).attr("data-result-title");
				if(typeof new_title !== typeof undefined && new_title !== false) {
					$(this).text(new_title);	
				}
			});
			
			// remove last question from the response-box because it is the privacy policy
			$(".response-box > .question-response:last-child").remove();


			// add dots to make it look more like a receipt
			/*
			$(".question-response").each(function() {
				formatWithDots($(".question-title", this), $(".question-answers div", this));
			});
			//*/
		}
		initResultsPage();


		/** for fun */
		/** ------------------------------------------------------ */
		function formatWithDots(e1, e2) {
			var total = 58;
			var count = e1.text().length + e2.text().length;
			var num_dots = total - count;
			var string_dots = generateDots(num_dots);
			e1.append(string_dots);
		}

		function generateDots(num) {
			var dots = "";
			for(var i = 0; i < num; i++) {
				dots += ".";
			}

			return dots;
		}
		/** ------------------------------------------------------ */
		
		
	});
});