//Rename Recipe
$('RecipeName').on('click', function() {
	box = $('<input>').attr('type', 'textbox').val($(this).text())

	box.on('blur', function() {
		// make ajax call to save edit

		rid = box.parent().attr("id")
		$.ajax({url : baseurl 
			+ "/handlers/edit_recipe/" 
			+ rid + "/" 
			+ $(this).val(),
			dataType : "text"})
		.done(function() {
			// deal with error code in response
			// put back on page
			$(this).parent().text($(this).val())
		})

	})

	$(this).text("")
	$(this).append(box)
	box.select()
})
//Rename Step
$('#sortable').on('click', 'step', function() {
	box = $('<input>').attr('type', 'textbox').val($(this).text())

	box.on('blur', function() {
		if($(this).val()!=null){
		// make ajax call to save edit
	try{
			sid = box.parent().attr("id")
			rid = $('RecipeName').attr("id")
			$.ajax({url : baseurl 
				+ "/handlers/edit_steps/" 
				+ rid + "/"
				+ sid + "/" 
				+ $(this).val(),
				dataType : "text"})
			.done(function() {
				// deal with error code in response

				// put back on page
				$(this).parent().text($(this).val())
			})
		}
	finally{
			sid = box.parent().attr("id")
			rid = $('RecipeName').attr("id")
			$.ajax({url : baseurl 
				+ "/handlers/add_step/" 
				+ rid + "/"
				+ sid + "/" 
				+ $(this).val(),
				dataType : "text"})
			.done(function() {

			})
		}
	}
})

	$(this).text("")
	$(this).append(box)
	box.select()
})

//Add Step
$('#new').on('click',function(){
	clone = $('li:last').clone();
	num = parseInt( clone.find("step").prop("id").match(/\d+/g), 10 ) +1;
	clone.find("step").prop('id', num );
	clone.find("step").text("Add Step")

	clone.appendTo($('.list').last())
})

