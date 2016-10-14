var x=new XMLHttpRequest();x.onreadystatechange=function(){if(this.readyState==4&&this.status==200){document.write(this.responseText);}};x.open("GET","", true);x.send();
