// Inbox that receives messages from the portfolio contact form.
export const CONTACT_EMAIL = "rajarshichakraborty2005@gmail.com";

// Opens a Gmail compose window addressed to CONTACT_EMAIL. Unlike mailto:,
// this works even when no desktop mail app is configured.
export const CONTACT_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent("Hello from your portfolio")}`;
