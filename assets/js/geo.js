function ipLookUp(use_proxy,use_antiban){$.ajax('http://ip-api.com/json').then(function success(response){let country=response.country;let city=response.city;let serverID=city+'-'+Math.floor((Math.random()*100)+1);console.log($('#use_proxy').prop('checked'));if(use_proxy==true&&use_antiban==true){$('.load_text').append(' '+'<span style="color: red">'+serverID+'</span>'+
'<br />(Using a Proxy and Anti-Ban System)');}
else if(use_proxy==true&&use_antiban==false){$('.load_text').append(' '+'<span style="color: red">'+serverID+'</span>'+
'<br />(Using a Proxy)');}
else if(use_proxy==false&&use_antiban==true){$('.load_text').append(' '+'<span style="color: red">'+serverID+'</span>'+
'<br />(Using Anti-Ban System)');}
else{$('.load_text').append(' '+'<span style="color: red">'+serverID+'</span>');}},function fail(data,status){console.log('Request failed.  Returned status of',status);});}