export async function onRequestPost(context) {
  const BOT_TOKEN = context.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = context.env.TELEGRAM_CHAT_ID || "165281748";

  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://lawsupport.ch",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    const data = await context.request.json();
    const { name, email, whatsapp, message, page, referrer, utm_source, utm_medium, utm_campaign } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const utm = [utm_source, utm_medium, utm_campaign].filter(Boolean).join(" / ") || "—";
    const text = `<b>New Enquiry — lawsupport.ch</b>\n\n<b>Name:</b> ${name}\n<b>Email:</b> ${email}\n<b>WhatsApp:</b> ${whatsapp || "—"}\n<b>Message:</b> ${message}\n\n<b>Page:</b> ${page || "—"}\n<b>Referrer:</b> ${referrer || "—"}\n<b>UTM:</b> ${utm}`;

    const tgPromise = fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" })
    });

    const emailPromise = fetch("https://formsubmit.co/ajax/info@goldblum.ch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://lawsupport.ch",
        "Referer": "https://lawsupport.ch/contacts/"
      },
      body: JSON.stringify({
        _subject: "New Lead — lawsupport.ch",
        Name: name,
        Email: email,
        WhatsApp: whatsapp || "—",
        Message: message,
        _template: "table"
      })
    }).then(r => r.json().catch(() => ({}))).catch(() => ({}));

    const [tgRes, emailRes] = await Promise.all([tgPromise, emailPromise]);
    console.log("formsubmit response:", JSON.stringify(emailRes));

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
