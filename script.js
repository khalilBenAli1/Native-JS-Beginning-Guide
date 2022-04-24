var firstName = document.getElementById('firstNameInput');
var lastName = document.getElementById('lastNameInput');
var date = document.getElementById('dateInput');
var saveButton = document.getElementById('save');
var fistnameText = document.getElementById('FN');
var lastnameText = document.getElementById('LN');
var birthdayText = document.getElementById('B');
var ageText =document.getElementById('age');
var FNV ;
	var LNV;
	var BV;

function edit(){



	firstName.disabled = false;
	lastName.disabled = false;
	date.disabled = false;
	saveButton.disabled = false;
	
	firstName.value=FNV;
		lastName.value=LNV;
		date.value=BV


}
function save(){
	
	fistnameText.innerHTML ="First Name :" + firstName.value;
	lastnameText.innerHTML="Last Name :" + lastName.value;
	birthdayText.innerHTML="Birthday :" + date.value;
	ageText.innerHTML="age:"+ageCalculation();
	console.log(date);
	if (firstName.value!==null)
		{
			FNV =firstName.value;

		};
		if (lastName.value!==null)
		{
			LNV =lastName.value;
		};
		if (date.value!==null)
		{
			BV=date.value;
		};
		firstName.value=FNV;
		lastName.value=LNV;
		date.value=BV;

	
	firstName.value="";
	lastName.value="";
	date.value="";



	
	
	firstName.disabled=true;
	lastName.disabled=true;
	date.disabled=true ;
	saveButton.disabled=true ;


}
function ageCalculation()
{
	let date1=new Date(date.value);
	let date2=new Date();
	age=date2.getFullYear()-date1.getFullYear();
	if(date2.getMonth()-date1.getMonth()<0)
	{
		age--;
	}
	return age;

}