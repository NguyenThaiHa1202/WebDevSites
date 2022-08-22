// JavaScript Document
/*Adaptive Card Switching*/
function del_popup() {
    var deli = document.getElementById("deli").checked;
    var addq = document.getElementById("addq");
    var dadd = document.getElementById("dadd");
    var same = document.getElementById("same");
    if (deli) {
        addq.style.display = "inline";
        dadd.style.display = "inline";
        same.style.display = "inline";
    }
    else {
        addq.style.display = "none";
        dadd.style.display = "none";
        same.style.display = "none";
    }
}
function card_popup1() {
    var card_popup = document.getElementById("card_popup");
    var credit = document.getElementById("credit").checked;
    if (credit) {
        card_popup.style.display = "block";
    }
    else
    {
        card_popup.style.display = "none";
    }
}
function card_num_popup() {
    var visa = document.getElementById("visa").checked;
    var master = document.getElementById("master").checked;
    var aexpress = document.getElementById("aexpress").checked;
    var vsnum = document.getElementById("vsnum");
    var mtnum = document.getElementById("mtnum");
    var aenum = document.getElementById("aenum");
    if (visa) {
        vsnum.style.display = "inline";
        mtnum.style.display = "none";
        aenum.style.display = "none";
    }
    if (master) {
        vsnum.style.display = "none";
        mtnum.style.display = "inline";
        aenum.style.display = "none";
    }
    if (aexpress) {
        vsnum.style.display = "none";
        mtnum.style.display = "none";
        aenum.style.display = "inline";
    }
}
/*Adaptive Card Switching*/

/*Error Checks*/
function validate(){
/*Setting Values for Blank Field check*/
var pcode=document.getElementById("pcode").value;
var visa=document.getElementById("visa").checked;
var master=document.getElementById("master").checked;
var aexpress=document.getElementById("aexpress").checked;
var errMsg = "";
var result=true;
var deli=document.getElementById("deli").checked;
var pickup=document.getElementById("pickup").checked;
var dadd=document.getElementById("dadd").value;
var badd=document.getElementById("badd").value;
var pattern = /^[0-9]/; 
if((!deli)&&(!pickup)){
	errMsg+="Please choose your reception method.\n";
}
if(pickup){
	if(badd==""){
		errMsg+="Please insert your billing address.\n";
	}
} else if(deli){
	if(badd==""){
		errMsg+="Please insert your billing address.\n";
	if(dadd==""){
		errMsg+="PLease insert your delivery address.\n";
	}
	}
}
/*Blank Field Check*/ 

/*Postcode Length Check*/
if(pcode==""){
	errMsg+="Please enter your postcode.\n";
}else{
if(pcode.length!=4){
	errMsg+="Post code must have 4 digit\n";
}}
/*Postcode Length Check*/

/*Payment Method Check*/
	var vsnum=document.getElementById("vsnum").value;
	var mtnum=document.getElementById("mtnum").value;
	var aenum=document.getElementById("aenum").value;
	var cash=document.getElementById("cash").checked;
	var credit=document.getElementById("credit").checked;
if(!cash&&!credit) {
		errMsg+="Please choose a payment method\n";
	}
	else{
	if(credit){
	if(visa){
		if(vsnum==""){
			errMsg+="Please insert your Visa number.\n";
		}else{
		if(vsnum.length!=16){
			errMsg+="Your Visa number must have 16 digits.\n";
		}
		if(!vsnum.match(pattern)){
			errMsg+="Your Visa number must only consist of numbers.\n";
		}}
	}else
	if(master){
		if(mtnum==""){
			errMsg+="Please insert your MasterCard number.\n";
		}else{
		if(mtnum.length!=16){
			errMsg+="Your MasterCard number must have 16 digits.\n";
		}
		if(!mtnum.match(pattern)){
			errMsg+="Your MasterCard number must only consist of numbers.\n";
		}}
	}else
	if(aexpress){
		if(aenum==""){
			errMsg+="Please insert your Visa number.\n";
		}else{
		if(aenum.length!=15){
			errMsg+="Your American Express number must have 15 digit.\n";
		}
		if(!aenum.match(pattern)){
			errMsg+="Your American Express number must only consist of numbers.\n";
        }}}
/*Payment Method Check*/
}
}
/*final error check*/
if(errMsg!=""){
	alert(errMsg);
	result=false;
}
	return result;	
}
/*final error check*/

/*Onload Check Functions*/
function init() {
    var card_popup = document.getElementById("card_popup");
    var addq = document.getElementById("addq");
    var dadd = document.getElementById("dadd");
    var same = document.getElementById("same");
    var deli = document.getElementById("deli");
    var pickup = document.getElementById("pickup");
    var badd = document.getElementById("badd");
    var credit = document.getElementById("credit");
    var cash = document.getElementById("cash");
	var order=document.getElementById("order");
	order.onsubmit=validate;
    card_popup.style.display = "none";
    addq.style.display = "none";
    dadd.style.display = "none";
    same.style.display = "none";
    credit.onclick = card_popup1;
    cash.onclick = card_popup1;
    deli.onclick = del_popup;
    pickup.onclick = del_popup;
    same.addEventListener('click', function () {
        if (dadd.value == "") {
            alert("Please fill in deliver address first.");
        } else {
            badd.value = dadd.value;
        }
    });
    var visa = document.getElementById("visa");
    var master = document.getElementById("master");
    var aexpress = document.getElementById("aexpress");
    var vsnum = document.getElementById("vsnum");
    var mtnum = document.getElementById("mtnum");
    var aenum = document.getElementById("aenum");
    vsnum.style.display = "none";
    mtnum.style.display = "none";
    aenum.style.display = "none";
    visa.onclick = card_num_popup;
    master.onclick = card_num_popup;
    aexpress.onclick = card_num_popup;
}
window.onload = init;
/*Onload Check Functions*/