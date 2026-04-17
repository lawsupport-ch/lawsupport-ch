(function(){
  document.querySelectorAll(".contact-form").forEach(function(form){
    if(!form.querySelector("[name=\"_honey\"]")){
      var hp=document.createElement("input");
      hp.type="text";hp.name="_honey";hp.style.display="none";
      form.appendChild(hp);
    }
    form.addEventListener("submit",function(e){
      e.preventDefault();
      if(form.querySelector("[name=\"_honey\"]").value) return;
      var btn=form.querySelector("button[type=\"submit\"]");
      btn.textContent="Sending...";btn.disabled=true;
      var fd=new FormData(form);
      var data={};fd.forEach(function(v,k){if(k!=="_honey")data[k]=v});
      // Telegram notification
      var tg=fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name:data.name||"",
          email:data.email||"",
          whatsapp:data.whatsapp||"",
          message:data.message||"",
          page:window.location.pathname,
          referrer:document.referrer||"direct",
          utm_source:new URLSearchParams(window.location.search).get("utm_source")||"",
          utm_medium:new URLSearchParams(window.location.search).get("utm_medium")||"",
          utm_campaign:new URLSearchParams(window.location.search).get("utm_campaign")||""
        })
      }).catch(function(){return{ok:false}});
      // FormSubmit email (may fail due to their Cloudflare, non-critical)
      var em=fetch("https://formsubmit.co/ajax/info@goldblum.ch",{
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({name:data.name,email:data.email,whatsapp:data.whatsapp||"",message:data.message||"",_subject:"New Lead \u2014 lawsupport.ch",_template:"table"})
      }).catch(function(){return{ok:false}});
      Promise.all([tg,em]).then(function(r){
        if(r[0].ok||r[1].ok){window.location="/thank-you/"}
        else{btn.textContent="Error \u2014 try again";btn.disabled=false}
      });
    });
  });
})();
