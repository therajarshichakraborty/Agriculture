// Inbox that receives messages from the portfolio contact form.
export const CONTACT_EMAIL = "rajarshichakraborty2005@gmail.com";

// Alternate inbox, listed on the contact page.
export const SECONDARY_EMAIL = "rajarshi29032005@gmail.com";

// Opens a Gmail compose window addressed to `to`. Unlike mailto:, this works
// even when no desktop mail app is configured.
export const composeUrl = (to: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent("Hello from your portfolio")}`;

export const CONTACT_COMPOSE_URL = composeUrl(CONTACT_EMAIL);
