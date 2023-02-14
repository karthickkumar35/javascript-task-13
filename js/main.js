let form = document.querySelector("form");
let name = document.getElementById("name");
let post = document.getElementById("post");
form.addEventListener("submit",function(e){
	e.preventDefault();
	readpost();
});
let data = {};
function readpost(){
	data['text']=name.value;
	createpost();
}
function createpost(){
	post.innerHTML =`<div class="rightin">
	<p class="col-lg-6">${data.text}</p>
	<span class="option">
		<iconify-icon onclick="edit(this)" icon="material-symbols:edit-square-outline-rounded"></iconify-icon>
		<iconify-icon onclick="dlt(this)" icon="mdi:delete"></iconify-icon>
	</span>
	</div>`
	name.value = " ";
}
function edit(e){
	name.value=e.parentElement.previousElementSibling.innerHTML;
	e.parentElement.parentElement.remove();
}
function dlt(e){
	e.parentElement.parentElement.remove();
}