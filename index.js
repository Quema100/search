var consoles = prompt("이름을 입력하세요")                
if(consoles != null){
	if(consoles){         
		var links = prompt(consoles+"님 유튜브,깃허브,구글중에 검색할곳을 입력하세요")
        if (links != null) {
             if(links === "" ){

                 alert("입력 받은 값이 없거나 이상합니다")
        
 
             }if (links==="유튜브"){
                  var link1 = prompt(consoles+"님 유튜브에 검색할 내용을 입력하세요")
		          window.open( "https://www.youtube.com/results?search_query="+link1)
                    
             }else if (links === "깃허브"){
	              var link3 = prompt(consoles+"님 깃허브에 검색할 내용을 입력하세요")
                   window.open( "https://github.com/search?q="+link3)
             }else if (links === "구글"){
	              var link2 = prompt(consoles+"님 구글에 검색할 내용을 입력하세요")
                   window.open( "https://www.google.co.kr/search?q="+link2)
             }else if(links){
                  alert("입력 받은 값이 없거나 이상합니다")
                           
                 }
       }else{
          alert('취소되었습니다.')
            }
		
    }else if(consoles===""){
		    var links = prompt("무명님 유튜브,깃허브,구글중에 검색할곳을 입력하세요")
            if (links != null) {
                 if(links === "" ){

                     alert("입력 받은 값이 없거나 이상합니다")
        
 
                 }if (links==="유튜브"){
                      var link1 = prompt("무명님 유튜브에 검색할 내용을 입력하세요")
		               window.open( "https://www.youtube.com/results?search_query="+link1)
                    
                 }else if (links === "깃허브"){
	                  var link3 = prompt("무명님 깃허브에 검색할 내용을 입력하세요")
                       window.open( "https://github.com/search?q="+link3)
                 }else if (links === "구글"){
	                  var link2 = prompt("무명님 구글에 검색할 내용을 입력하세요")
                       window.open( "https://www.google.co.kr/search?q="+link2)
                 }else if(links){
                      alert("입력 받은 값이 없거나 이상합니다")
                           
                     }
           }else{
              alert('취소되었습니다.')
               }

    }

                     
}else{
    alert("안녕히가세요.")
	}
