import React from "react";
import "./TermsService.css";

const TermsService = () => {
    return (
        <div className="terms-container">
            <h1>Terms of Service</h1>

            <section className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the services provided by Hero Compliance Design, LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
                </p>
            </section>

            <section className="terms-section">
                <h2>2. Description of Services</h2>
                <p>
                    We provide a range of financial consulting services, including but not limited to:
                    <ul>
                        <li>Strategic planning</li>
                        <li>Risk management</li>
                        <li>Regulatory compliance</li>
                        <li>Investment advisory</li>
                        <li>Financial analysis</li>
                    </ul>
                    The specific services provided will be outlined in a separate agreement between you and the Company.
                </p>
            </section>

            <section className="terms-section">
                <h2>3. User Responsibilities</h2>
                <p>
                    You are responsible for providing accurate and complete information to us. You agree to use our services in compliance with all applicable laws and regulations. You will not use our services for any illegal or unauthorized purpose.
                </p>
            </section>

            <section className="terms-section">
                <h2>4. Confidentiality and Data Protection</h2>
                <p>
                    We are committed to protecting the confidentiality of your personal and financial information. We will collect, use, and disclose your information only in accordance with our Privacy Policy.
                </p>
                <p>
                    You agree to keep confidential any proprietary information or trade secrets of the Company that you may learn in the course of using our services. This includes, but is not limited to, financial models, strategies, and client data.
                </p>
            </section>

            {/* Add more sections as needed (e.g., Fees, Termination, Governing Law, Dispute Resolution) */}

            <section className="terms-section">
                <h2>5. Disclaimer of Liability</h2>
                <p>
                    Our services are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our services or the information, content, materials, or products included on this website.
                </p>
            </section>

            <section className="terms-section">
                <h2>6. Changes to Terms</h2>
                <p>
                    We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.
                </p>
            </section>
        </div>
    );
};

export default TermsService;
