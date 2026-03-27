export async function onRequestPost(context) {
  const BOT_TOKEN = "7631912691:AAEKWZ-kOJRbVrHHGk-fFGnVrMKp5UxpJt0";
  const CHAT_ID = "7754740807";

  try {
    const data = await context.request.json();
    const { name, email, whatsapp, message } = data;

    if (\!name || \!email || \!message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const text = `New contact from lawsupport.ch\n\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp || "—"}\nMessage: ${message}`;

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });

    if (\!res.ok) {
      return new Response(JSON.stringify({ error: "Telegram error" }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
