(function(){
  document.querySelectorAll(".contact-form").forEach(function(form){
    if(\!form.querySelector("[name=\"_honey\"]")){
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
      var data={};fd.forEach(function(v,k){if(k\!=="_honey")data[k]=v});
      var utm=new URLSearchParams(window.location.search);
      var ref=document.referrer||"direct";
      var ts=new Date().toLocaleString("en-GB",{timeZone:"Europe/Zurich"});
      var text="<b>New Enquiry \u2014 lawsupport.ch</b>\n\n"
        +"<b>Name:</b> "+(data.name||"-")+"\n"
        +"<b>Email:</b> "+(data.email||"-")+"\n"
        +"<b>WhatsApp:</b> "+(data.whatsapp||"-")+"\n"
        +"<b>Message:</b> "+(data.message||"-")+"\n\n"
        +"<b>Page:</b> "+window.location.pathname+"\n"
        +"<b>Referrer:</b> "+ref+"\n"
        +"<b>UTM:</b> "+(utm.get("utm_source")||"-")+" / "+(utm.get("utm_medium")||"-")+" / "+(utm.get("utm_campaign")||"-")+"\n"
        +"<b>Time:</b> "+ts;
      var tg=fetch("https://api.telegram.org/bot8668223825:AAEDqT96yCnKn-wwVTVRDgL_YRmasYgqknM/sendMessage",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({chat_id:"165281748",text:text,parse_mode:"HTML"})
      });
      var em=fetch("https://formsubmit.co/ajax/info@goldblum.ch",{
        method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({name:data.name,email:data.email,whatsapp:data.whatsapp||"",message:data.message||"",_subject:"New Enquiry \u2014 lawsupport.ch",page:window.location.pathname,referrer:ref})
      });
      Promise.all([tg,em]).then(function(r){
        if(r[0].ok){window.location="/thank-you/"}
        else{btn.textContent="Error \u2014 please try again";btn.disabled=false}
      }).catch(function(){btn.textContent="Error \u2014 please try again";btn.disabled=false});
    });
  });
})();
