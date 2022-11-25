var consoles = prompt("이름을 입력하세요")                
if(consoles != null){
	if(consoles){         
        alert(consoles,"님 안녕하세요.")
    }else if(consoles===""){
        alert("무명님 안녕하세요.")
    }

                     
}else{
    alert("안녕히가세요.")
	}

var a=alert("Y=3,X=1에 가시면 깃허브로 바로가실수 있어요")
var b=alert("Y=3,X=2에 가시면 구글로 바로가실수 있어요")
var c=alert("Y=3,X=3에 가시면 유튜브로 바로가실수 있어요")
var d=alert("Y=2,X=3에 가시면 뒤로 가실수 있어요")


if (get_x()===1&&get_y()===3) {
	window.location.href=""
} else if (get_x()===2&&get_y()===3) {
	
} else if (get_x()===3&&get_y()===3) {
	
} else if (get_x()===3&&get_y()===2) {
		
} 
