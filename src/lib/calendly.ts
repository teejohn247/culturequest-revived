/**
 * Calendly integration utility
 * 
 * To use: Replace 'YOUR_CALENDLY_USERNAME' with your actual Calendly username
 * Example: 'https://calendly.com/your-username' or 'https://calendly.com/your-username/meeting-type'
 */

// Replace this with your Calendly URL
const CALENDLY_URL = 'https://calendly.com/teejohn247/30min';

/**
 * Opens Calendly popup widget
 * @param eventType - Optional specific event type (e.g., '30min', 'meeting')
 */
export const openCalendly = (eventType?: string) => {
  // Check if Calendly is loaded
  if (typeof (window as any).Calendly === 'undefined') {
    console.error('Calendly widget not loaded. Please check the script in index.html');
    return;
  }

  const url = eventType 
    ? `${CALENDLY_URL}/${eventType}` 
    : CALENDLY_URL;

  (window as any).Calendly.initPopupWidget({
    url: url,
  });
};

/**
 * Opens Calendly inline embed (for embedding in a page)
 * @param elementId - The ID of the element to embed Calendly in
 * @param eventType - Optional specific event type
 */
export const embedCalendly = (elementId: string, eventType?: string) => {
  if (typeof (window as any).Calendly === 'undefined') {
    console.error('Calendly widget not loaded. Please check the script in index.html');
    return;
  }

  const url = eventType 
    ? `${CALENDLY_URL}/${eventType}` 
    : CALENDLY_URL;

  (window as any).Calendly.initInlineWidget({
    url: url,
    parentElement: document.getElementById(elementId),
  });
};

