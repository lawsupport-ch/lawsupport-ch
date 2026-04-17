(function(){
  document.querySelectorAll(".contact-form").forEach(function(form){
    if(!form.querySelector("[name=\"_honey\"]")){
      var hp=document.createElement("input");
      hp.type="text";hp.name="_honey";hp.style.display="none";
      form.appendChild(hp);
    }
    form.addEventListener("submit",function(e){
      if(form.querySelector("[name=\"_honey\"]").value){e.preventDefault();return}
      var btn=form.querySelector("button[type=\"submit\"]");
      btn.textContent="Sending...";btn.disabled=true;
      var fd=new FormData(form);
      var data={};fd.forEach(function(v,k){if(k!=="_honey")data[k]=v});
      // Fire Telegram notification (non-blocking)
      fetch("/api/contact",{
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
      }).catch(function(){});
      // Let the form submit natively to FormSubmit.co (set via form action)
    });
  });
})();
