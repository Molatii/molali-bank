//PABALLO MOLATI

//slider

var slides = document.querySelectorAll('.slider');
		var btns = document.querySelectorAll('.btn');
		let currentSlider = 1;
		////////manual
		
		var manualNav = function(manual){
		
										slides.forEach((slider) =>{
										        
										 slider.classList.remove('active');
										 
										 btns.forEach((btn) =>{
										 
										     btn.classList.remove('active');
										 
										    });
										});
		
		                                  slides[manual].classList.add('active');
										  btns[manual].classList.add('active');
										  	
		                                 }
		
		btns.forEach((btn, i) => {
		                            btn.addEventListener("click", () => {
									manualNav(i);
									currentSlide = i;
								});
								});
								
		//////now slider changes by autoplay						
		
		var repeat = function(activeClass){
		
		 let active = document.getElementsByClassName('active');
		 let i = 1;
		 
		 var repeater = () => {
		                        setTimeout(function(){ 
								
								 [...active].forEach((activeSlide) => {

									activeSlide.classList.remove('active');
								 
								 });
								 
								 slides[i].classList.add('active');
								 btns[i].classList.add('active');
								 i++;
								  
								  if(slides.length == i){
															i = 0;
														
														}
								  if(i >= slides.length){
															return;
														
														}											
														
								  repeater();								   
								   
								   
								}, 10000);
		                       
		                       }
		                       repeater();
		}
		
		
		repeat();
		
		
//end of slider	












//after openihg an account
function showmessage(){


var myText="You Can Now Register for online banking.";
alert(myText);
}


//////////validate for log in

function log()
{
	var  Password = document.getElementById("Password");
	var  User_name = document.getElementById("User_name");
	
	if(Password.value.trim() =="" || User_name.value =="" )
     { alert("ACCESS DENIED!!..fill all fields");
	   return false;
	 
	 }
     else
	 {alert("ACCESS CRANTED.....");
	 
	  true;
	 }
	
	 
}

////////////make sure Client Provides their Email when sending feedback
function feedback()
{
	var  Email = document.getElementById("Email");
	
	
	if(Email.value.trim() =="")
     { alert("Please Enter Your Email. We need it In order to get back to you.");
	   return false;
	 
	 }
}




//take loan button alert
function showAlert(){


var myText="Please Note that PHP is  not used, therefore we take it as if you have already logged in for online banking. your loan Request is send, it will be processed with 24hrs";
alert(myText);
}



////validate for all Loan forms
function loans()
{
	var  Account_no = document.getElementById("Account_no");
	var  Amount = document.getElementById("Amount");
	var  Years = document.getElementById("Years");
	var  Name = document.getElementById("Name");
	var  Surname = document.getElementById("Surname");

	
	
	if(Account_no.value.trim() =="" || Amount.value.trim() =="" || Years.value.trim() =="" || Name.value.trim() =="" || Surname.value.trim() =="")
     { alert("Please Fill all Fields...!");
	   return false;
	 
	 }
}


////validate for open account
function regis()
{
	var  birth = document.getElementById("birth");
	var  village = document.getElementById("village");
	var  Phone = document.getElementById("Phone");
	var  Id = document.getElementById("Id");
	
	
	
	if(birth.value.trim() =="" || village.value.trim() =="" || Phone.value.trim() =="" || Id.value.trim() =="")
     { alert("Please Fill all Fields...!");
	   return false;
	 
	 }
}

function check()
{
  	var  Password = document.getElementById("Password");
    var  Confirm = document.getElementById("Confirm");
	
	if(Password.value.trim() == Confirm.value.trim())
     { 
	   return true;
	 
	 }
     else
	 {alert("Password does not match... TRY AGAIN.");
	 
	  false;
	 }
}


////////////////donate card and amount
function mydonation()
{
  	var  card = document.getElementById("card");
    var  Amount = document.getElementById("Amount");
	
	if(card.value.trim() =="" || Amount.value.trim() =="")
    	 {alert("Fill All Fields..");
	 
	  false;
	 }
}

















