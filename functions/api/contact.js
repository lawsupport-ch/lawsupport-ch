export async function onRequestPost(context) {
  const BOT_TOKEN = "8668223825:AAH1LdPXGIXMkNI-gkkG0WmCdFNrs_W90xc";
  const CHAT_ID = "165281748";

  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://lawsupport.ch",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    const data = await context.request.json();
    const { name, email, whatsapp, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const text = `🔔 New Lead — lawsupport.ch\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 WhatsApp: ${whatsapp || "—"}\n💬 Message: ${message}`;

    const tgPromise = fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });

    const emailPromise = fetch("https://formsubmit.co/ajax/info@goldblum.ch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://lawsupport.ch",
        "Referer": "https://lawsupport.ch/contacts/",
        "User-Agent": "Mozilla/5.0"
      },
      body: JSON.stringify({
        _subject: "New Lead — lawsupport.ch",
        Name: name,
        Email: email,
        WhatsApp: whatsapp || "—",
        Message: message,
        _template: "table"
      })
    }).catch(() => {});

    const [tgRes] = await Promise.all([tgPromise, emailPromise]);

    if (!tgRes.ok) {
      return new Response(JSON.stringify({ error: "Telegram error" }), {
        status: 502,
        headers: corsHeaders
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: corsHeaders
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "https://lawsupport.ch",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
