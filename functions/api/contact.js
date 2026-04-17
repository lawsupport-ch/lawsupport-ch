export async function onRequestPost(context) {
  const BOT_TOKEN = context.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = context.env.TELEGRAM_CHAT_ID || "165281748";
  const RESEND_API_KEY = context.env.RESEND_API_KEY;
  const MAIL_TO = context.env.MAIL_TO || "info@goldblum.ch";
  const MAIL_FROM = context.env.MAIL_FROM || "onboarding@resend.dev";

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

    const esc = (s) => String(s || "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
    const utm = [utm_source, utm_medium, utm_campaign].filter(Boolean).join(" / ") || "—";

    const tgText = `<b>New Enquiry — lawsupport.ch</b>\n\n<b>Name:</b> ${name}\n<b>Email:</b> ${email}\n<b>WhatsApp:</b> ${whatsapp || "—"}\n<b>Message:</b> ${message}\n\n<b>Page:</b> ${page || "—"}\n<b>Referrer:</b> ${referrer || "—"}\n<b>UTM:</b> ${utm}`;

    const emailHtml = `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#222;line-height:1.5">
      <h2 style="margin:0 0 16px">New Enquiry — lawsupport.ch</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>Name</b></td><td>${esc(name)}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>Email</b></td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>WhatsApp</b></td><td>${esc(whatsapp) || "—"}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>Message</b></td><td>${esc(message).replace(/\n/g, "<br>")}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>Page</b></td><td>${esc(page) || "—"}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>Referrer</b></td><td>${esc(referrer) || "—"}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;color:#666"><b>UTM</b></td><td>${esc(utm)}</td></tr>
      </table>
    </body></html>`;

    const tasks = [];

    if (BOT_TOKEN) {
      tasks.push(
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text: tgText, parse_mode: "HTML" })
        })
          .then((r) => ({ ch: "telegram", ok: r.ok, status: r.status }))
          .catch((e) => ({ ch: "telegram", ok: false, err: String(e) }))
      );
    }

    if (RESEND_API_KEY) {
      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: MAIL_FROM,
            to: MAIL_TO,
            reply_to: email,
            subject: `New Lead — lawsupport.ch — ${name}`,
            html: emailHtml
          })
        })
          .then(async (r) => ({ ch: "resend", ok: r.ok, status: r.status, body: r.ok ? null : await r.text() }))
          .catch((e) => ({ ch: "resend", ok: false, err: String(e) }))
      );
    }

    const results = await Promise.all(tasks);
    const anyOk = results.some((r) => r.ok);

    if (!anyOk) {
      return new Response(JSON.stringify({ error: "All channels failed", results }), {
        status: 502,
        headers: corsHeaders
      });
    }

    return new Response(JSON.stringify({ ok: true, channels: results.map((r) => ({ ch: r.ch, ok: r.ok })) }), {
      headers: corsHeaders
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error", detail: String(e) }), {
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
