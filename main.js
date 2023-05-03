var save = document.querySelector(".save");
	
	save.addEventListener("click",saveBtn);
	
	function saveBtn(e){
		let show = e.target.parentNode.querySelector(".saved");
		//console.log(show);
		if(show.classList.contains("saved")){
			show.style.display="inline-block";
			let parentDiv = e.target.parentNode.parentNode.querySelector(".saved-notify");
			parentDiv.style.display="flex";
			//console.log(parentDiv);
			
			setTimeout(function(){
			let parentDiv = e.target.parentNode.parentNode.querySelector(".saved-notify");
			parentDiv.style.display="none";
			
			},3000);
			
		}
	}
	
	
	
	
var saved = document.querySelector(".saved");

	saved.addEventListener("click",savedBtn);
	
	function savedBtn(e){
	let leave = e.target.parentNode.querySelector(".saved");
		//console.log(leave);	
		leave.style.display="none";
			
	}