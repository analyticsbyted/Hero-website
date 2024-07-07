import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="pp-title">Privacy Policy</h1>
      <div className="content">
        <p>
          At Hero Compliance Design, we take your privacy seriously. This policy
          outlines how we collect, use, and protect your personal information.
        </p>
        <br />
        <p><strong>Information Collection:</strong> We may collect personal information such as name, email address, and IP address when users interact with our website or services.</p>
        <br />
        <p><strong>Data Usage:</strong> The information we collect may be used to provide and improve our services, personalize user experience, and send periodic emails.</p>
        <br />
        <p><strong>Data Sharing:</strong> We do not sell, trade, or otherwise transfer users' personal information to third parties unless we provide users with advance notice.</p>
        <br />
        <p><strong>Data Security:</strong> We implement security measures to maintain the safety of users' personal information, including encryption and secure socket layer technology.</p>
        <br />
        <p><strong>Cookies:</strong> We may use cookies to enhance user experience and track user interactions. Users can control cookie preferences through their browser settings.</p>
        <br />
        <p><strong>Third-party Links:</strong> Our website may contain links to third-party websites. We have no responsibility or liability for the content and activities of these linked sites.</p>
        <br />
        <p><strong>Policy Changes:</strong> We reserve the right to update or modify our privacy policy at any time. Users will be notified of any changes on our Privacy Policy page.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
