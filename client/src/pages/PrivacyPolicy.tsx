/*
 * Privacy Policy Page
 * Compliant with Australian Privacy Act 1988 (APPs) and New Zealand Privacy Act 2020 (IPPs)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#666] mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none text-[#1A1A1A]">
              
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  1. Introduction
                </h2>
                <p>
                  Big Little Business Pty Ltd (ABN: [To be added]) ("we", "us", "our") is committed to protecting the privacy of individuals who interact with our services. This Privacy Policy explains how we collect, hold, use, and disclose personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), as well as the New Zealand Privacy Act 2020 and the Information Privacy Principles (IPPs).
                </p>
                <p>
                  This policy applies to all personal information collected through our websites, platforms (GrantMaestro, Wellness App, and GrantThrive), and any other interactions you may have with us.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  2. Who We Are
                </h2>
                <p>
                  Big Little Business provides software-as-a-service (SaaS) solutions designed for local government councils, philanthropic organisations, and not-for-profit entities across Australia and New Zealand. Our platforms include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>GrantMaestro</strong> — Grant management and administration platform</li>
                  <li><strong>Wellness App</strong> — Staff wellbeing monitoring and engagement tool</li>
                  <li><strong>GrantThrive</strong> — Community impact and grant application platform</li>
                </ul>
                <p className="mt-4">
                  <strong>Contact Details:</strong><br />
                  Email: <a href="mailto:privacy@biglittlebusiness.com" className="text-gold hover:underline">privacy@biglittlebusiness.com</a><br />
                  Address: Melbourne, Australia
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  3. What Personal Information We Collect
                </h2>
                <p>
                  The types of personal information we may collect depend on how you interact with us and which of our platforms you use. This may include:
                </p>
                
                <h3 className="font-display text-xl font-semibold text-[#0D0D0D] mt-6 mb-3">
                  Contact and Identity Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, job title, and organisation name</li>
                  <li>Email address, phone number, and postal address</li>
                  <li>Account login credentials (username and encrypted password)</li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-[#0D0D0D] mt-6 mb-3">
                  Platform Usage Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Grant application data and supporting documents (GrantMaestro, GrantThrive)</li>
                  <li>Staff wellbeing survey responses (Wellness App) — collected in aggregate or with consent</li>
                  <li>Usage logs, feature interactions, and system activity</li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-[#0D0D0D] mt-6 mb-3">
                  Technical Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address, browser type, device information</li>
                  <li>Cookies and similar tracking technologies (see Section 9)</li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-[#0D0D0D] mt-6 mb-3">
                  Sensitive Information
                </h3>
                <p>
                  We generally do not collect sensitive information (such as health information, racial or ethnic origin, or political opinions) unless it is reasonably necessary for our functions and you have provided consent. Where our Wellness App collects wellbeing-related data, this is done with explicit consent and handled with additional safeguards.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  4. How We Collect Personal Information
                </h2>
                <p>
                  We collect personal information through lawful and fair means, primarily:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Directly from you</strong> — when you register for an account, submit a demo request, complete forms, or contact us</li>
                  <li><strong>Through our platforms</strong> — when you use GrantMaestro, Wellness App, or GrantThrive</li>
                  <li><strong>From third parties</strong> — such as your employer (if they have subscribed to our services on your behalf) or publicly available sources</li>
                  <li><strong>Automatically</strong> — through cookies and analytics tools when you visit our websites</li>
                </ul>
                <p className="mt-4">
                  Where practicable, we will collect personal information directly from you. If we collect information from a third party, we will take reasonable steps to ensure you are aware of this collection.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  5. Why We Collect, Hold, Use and Disclose Personal Information
                </h2>
                <p>
                  We collect and use personal information for purposes that are directly related to our functions and activities, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and improving our SaaS platforms and services</li>
                  <li>Processing demo requests and responding to enquiries</li>
                  <li>Managing user accounts and providing customer support</li>
                  <li>Sending service-related communications and updates</li>
                  <li>Analysing usage patterns to improve our products</li>
                  <li>Complying with legal obligations and regulatory requirements</li>
                  <li>Protecting our rights and preventing fraud or misuse</li>
                </ul>
                <p className="mt-4">
                  We will not use or disclose personal information for a purpose other than the primary purpose of collection unless you have consented, or the secondary purpose is related to the primary purpose and you would reasonably expect such use or disclosure.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  6. How We Store and Protect Personal Information
                </h2>
                <p>
                  We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our security measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                  <li>Secure cloud infrastructure hosted on reputable providers (AWS)</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Regular security assessments and monitoring</li>
                  <li>Staff training on privacy and data protection</li>
                </ul>
                <p className="mt-4">
                  We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. When personal information is no longer needed, we will take reasonable steps to destroy or de-identify it.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  7. Disclosure of Personal Information
                </h2>
                <p>
                  We may disclose personal information to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service providers</strong> — who assist us in operating our platforms (e.g., cloud hosting, email services, analytics)</li>
                  <li><strong>Your organisation</strong> — if you are using our platforms through an organisational subscription</li>
                  <li><strong>Professional advisers</strong> — such as lawyers, accountants, or auditors</li>
                  <li><strong>Regulatory authorities</strong> — where required by law or to comply with legal obligations</li>
                </ul>
                <p className="mt-4">
                  We do not sell personal information to third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  8. Overseas Disclosure
                </h2>
                <p>
                  Our platforms are hosted on cloud infrastructure that may involve data being stored or processed in countries outside Australia and New Zealand, including the United States (AWS data centres).
                </p>
                <p>
                  Before disclosing personal information to an overseas recipient, we take reasonable steps to ensure the recipient does not breach the Australian Privacy Principles or New Zealand Information Privacy Principles in relation to that information. Where we use overseas service providers, we ensure appropriate contractual protections are in place.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  9. Cookies and Tracking Technologies
                </h2>
                <p>
                  Our websites use cookies and similar technologies to enhance your experience, analyse usage, and improve our services. These may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential cookies</strong> — required for the website to function properly</li>
                  <li><strong>Analytics cookies</strong> — to understand how visitors interact with our websites</li>
                  <li><strong>Preference cookies</strong> — to remember your settings and preferences</li>
                </ul>
                <p className="mt-4">
                  You can manage cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our websites.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  10. Your Rights — Access and Correction
                </h2>
                <p>
                  Under the Australian Privacy Principles and New Zealand Information Privacy Principles, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access</strong> — request access to the personal information we hold about you</li>
                  <li><strong>Correction</strong> — request correction of any inaccurate, incomplete, or out-of-date information</li>
                </ul>
                <p className="mt-4">
                  To make an access or correction request, please contact us at <a href="mailto:privacy@biglittlebusiness.com" className="text-gold hover:underline">privacy@biglittlebusiness.com</a>. We will respond to your request within a reasonable timeframe (generally within 30 days). In some circumstances, we may refuse access or correction, and we will provide you with written reasons if this occurs.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  11. Anonymity and Pseudonymity
                </h2>
                <p>
                  Where practicable, you have the option to interact with us anonymously or using a pseudonym. However, if you choose not to provide certain personal information, we may not be able to provide you with our services or respond to your enquiries.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  12. Data Breach Notification
                </h2>
                <p>
                  In the event of a data breach that is likely to result in serious harm to individuals, we will comply with the Notifiable Data Breaches scheme under the Australian Privacy Act and the mandatory breach notification requirements under the New Zealand Privacy Act 2020. This includes notifying affected individuals and the relevant Privacy Commissioner as soon as practicable.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  13. Complaints
                </h2>
                <p>
                  If you believe we have breached your privacy or have a complaint about how we have handled your personal information, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Privacy Officer</strong><br />
                  Email: <a href="mailto:privacy@biglittlebusiness.com" className="text-gold hover:underline">privacy@biglittlebusiness.com</a>
                </p>
                <p className="mt-4">
                  We will investigate your complaint and respond within 30 days. If you are not satisfied with our response, you may lodge a complaint with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Australia:</strong> Office of the Australian Information Commissioner (OAIC) — <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.oaic.gov.au</a></li>
                  <li><strong>New Zealand:</strong> Office of the Privacy Commissioner — <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.privacy.org.nz</a></li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  14. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  15. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Big Little Business Pty Ltd</strong><br />
                  Email: <a href="mailto:privacy@biglittlebusiness.com" className="text-gold hover:underline">privacy@biglittlebusiness.com</a><br />
                  Website: <a href="https://www.biglittlebusiness.com" className="text-gold hover:underline">www.biglittlebusiness.com</a>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
