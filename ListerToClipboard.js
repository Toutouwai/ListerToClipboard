(function($) {

	$(document).ready(function() {

		// Copy a string to the clipboard
		function copyToClipboard(string) {
			var $temp = $('<input type="text" value="' + string + '">');
			$('body').append($temp);
			$temp.select();
			document.execCommand('copy');
			$temp.remove();
		}

		// Update the selected pages count
		function updateSelectedCount() {
			var selected_count = ltc_selected.length;
			$('#ltc-selection-count').text(selected_count);
			$('#ltc-selection').toggleClass('has-selection', Boolean(selected_count));
			if(selected_count) {
				$('#ltc-selector-string').text('id=' + ltc_selected.join('|'));
			} else {
				$('#ltc-selector-string').text($('#ltc-original-selector').val());
			}
		}

		// An array to store any selected pages
		var ltc_selected = [];

		// A cell in the first column of Lister results clicked
		$(document).on('click', 'tr[data-pid] > td:first-child', function(event) {
			// Only if <td> itself was clicked
			if(event.target !== this) return;
			var page_id = $(this).parent().data('pid');
			var index = ltc_selected.indexOf(page_id);
			if(index === -1) {
				$(this).addClass('ltc-selected');
				ltc_selected.push(page_id);
			} else {
				$(this).removeClass('ltc-selected');
				ltc_selected.splice(index, 1);
			}
			updateSelectedCount();
		});

		// Clear selection button clicked
		$(document).on('click', '#ltc-selection-clear', function() {
			ltc_selected = [];
			$('td.ltc-selected').removeClass('ltc-selected');
			updateSelectedCount();
		});

		// Copy selector button clicked
		$(document).on('click', '#ltc-selector-copy', function() {
			copyToClipboard($('#ltc-selector-string').text());
			var $icon = $(this).find('i');
			$icon.removeClass('fa-files-o').addClass('fa-check');
			setTimeout(function() {
				$icon.removeClass('fa-check').addClass('fa-files-o');
			}, 1000);
		});

		// AJAX complete, i.e. results reloaded
		$(document).ajaxComplete(function() {
			updateSelectedCount();
		});

	});

}(jQuery));
