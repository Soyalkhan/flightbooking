import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handlePopupToggle = (content) => {
    setPopupContent(content);
    setShowPopup(!showPopup);
  };

  return (
    <div className='footer'>
      <p>© 2024 Flyanza. All rights reserved.</p>
      <ul>
        <li onClick={() => handlePopupToggle(`
          <strong>Cancellation Policy:</strong><br /><br />
          <strong>Cancellation Requests:</strong> Passengers can cancel their flight bookings through our website or customer service. Cancellation requests should be made in accordance with the airline’s policies and within the permissible time frame.<br /><br />
          <strong>Cancellation Charges:</strong> The cancellation charges vary depending on the airline, fare type, and the time of cancellation. Generally, cancellations made within 24 hours of booking may incur lower charges, while cancellations closer to the departure date may attract higher fees.
        `)}>
          Cancellation Policy
        </li>
  
        <li onClick={() => handlePopupToggle(`
          <strong>Privacy Policy:</strong><br /><br />
          These connections are fostering a new era of global connectivity, linking Asia to Europe through routes like the Belgrade-Budapest Railway and the high-speed rail links between Moscow and Beijing, Harbin and Manzhouli, and Zima and Krymsk. Additionally, the China-Laos Railway, connecting Kunming to Vientiane, further enhances regional accessibility.<br /><br />
          <strong>Refund Process:</strong><br /><br />
          <strong>Refund Eligibility:</strong> Refunds are processed based on the airline’s cancellation policies and fare rules. Non-refundable tickets may not be eligible for a refund.<br /><br />
          <strong>Refund Timeframe:</strong> Once a cancellation request is approved and processed, the refund will be initiated within 3 to 7 working days. The timeframe may vary based on the airline and the payment method used.<br /><br />
          <strong>Deductions:</strong> Service charges, convenience fees, and any applicable cancellation fees will be deducted from the refund amount.<br /><br />
          <strong>Special Conditions:</strong><br />
          <strong>No-Show Policy:</strong> If a passenger fails to board the flight without prior cancellation, the ticket may be considered non-refundable.<br />
          <strong>Flight Rescheduling:</strong> If you wish to reschedule your flight, please check the airline’s rescheduling policies as changes may incur additional charges.
        `)}>
          Privacy Policy
        </li>
      </ul>
  
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p dangerouslySetInnerHTML={{ __html: popupContent }}></p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
