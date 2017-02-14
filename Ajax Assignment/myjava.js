

setTimeout(function() {
    $("#head2").animate({left: '100%'},5000);
    $("#head4").animate({right: '100%'},5000);
}, 1200);

$('.alert').hide();
//function to add a book detail div on addnow click
$("#inputlg").click(function(){
	var comment = 	document.getElementById('title').value;
	if(comment==""  ){
    $('.alert').fadeIn();
	}
	else{
        $('.alert').hide();
	    $.ajax({  
		      type: "GET",  
		      url: "https://api.github.com/users/"+comment,
		      //async: false,
		      success: function(value) {  

		          $('#a').attr("src",value.avatar_url);
		          $('#name').html("Name : "+value.name);
		          $('#company').html("Company : "+value.company);
		          $('#location').html("Location : "+value.location);
		          $('#cat').html("Created At : "+value.created_at);
		          $('#email').html("Email : "+value.email);
		          $('#url').html("Url : "+value.url);

		      }
	      });
	}
});





