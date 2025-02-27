import React from 'react';

const SpendenPage = () => {
  return (
    <div className="spenden-container">
      <h1>Spenden</h1>
      <p>
        Unterstützen Sie unsere Plattform für barrierefreie Events und Locations!
        Ihre Spende hilft uns, die Zugänglichkeit für alle Menschen zu verbessern.
      </p>

      <h2>Warum spenden?</h2>
      <p>Mit Ihrer Unterstützung können wir:</p>
      <ul>
        <li>Mehr barrierefreie Events erfassen</li>
        <li>Die Website weiter verbessern</li>
        <li>Neue Funktionen für bessere Inklusion entwickeln</li>
      </ul>

      <h2>Spendenmöglichkeiten</h2>
      <p>Sie können uns auf verschiedene Weise unterstützen:</p>
      <ul>
        <li>Banküberweisung</li>
        <li>PayPal</li>
        <li>Patreon</li>
      </ul>

      <h2>Bankverbindung</h2>
      <p>Kontoinhaber: Barrierefreie Events &amp; Locations</p>
      <p>IBAN: DE12 3456 7890 1234 5678 90</p>
      <p>BIC: XYZABC12</p>

      <h2>PayPal</h2>
      <p>Spenden Sie bequem über PayPal:</p>
      <button
        className="paypal-button"
        onClick={() => window.location.href = "https://www.paypal.com/donate?hosted_button_id=DEIN_BUTTON_ID"}
      >
        Jetzt mit PayPal spenden
      </button>
    </div>
  );
};

export default SpendenPage;

