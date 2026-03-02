import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Mingo",
};

export default function TermsOfUse() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: March 2, 2026</p>

      <div className="mt-8 space-y-8 text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        <section>
          <p>
            Welcome to Mingo: Music Bingo (&quot;the App&quot;), operated by Cool Studio
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By downloading, installing, or using
            the App, you agree to be bound by these Terms of Use. If you do not agree to these terms,
            do not use the App.
          </p>
        </section>

        <section>
          <h2>1. Eligibility</h2>
          <p>
            You must be at least 13 years of age to use this App. By using the App, you represent and
            warrant that you meet this age requirement.
          </p>
        </section>

        <section>
          <h2>2. Account</h2>
          <p>
            You may create an account using Sign in with Apple, email and password, or continue as a
            guest. You are responsible for maintaining the confidentiality of your account credentials
            and for all activity that occurs under your account. You agree to provide accurate
            information when creating your account.
          </p>
        </section>

        <section>
          <h2>3. Acceptable Use</h2>
          <p>When using the App, you agree not to:</p>
          <ul>
            <li>Use offensive, abusive, or inappropriate usernames.</li>
            <li>Attempt to cheat, exploit bugs, or manipulate game outcomes.</li>
            <li>Interfere with other users&apos; enjoyment of the App.</li>
            <li>Reverse engineer, decompile, or disassemble the App.</li>
            <li>Use the App for any unlawful purpose.</li>
          </ul>
        </section>

        <section>
          <h2>4. Subscriptions and Payments</h2>
          <p>
            The App offers an optional premium subscription (&quot;Mingo Pro&quot;) available as a
            monthly or yearly auto-renewable subscription.
          </p>
          <ul>
            <li>
              Payment is charged to your Apple ID account at confirmation of purchase.
            </li>
            <li>
              Your subscription automatically renews for the same duration and price unless cancelled
              at least 24 hours before the end of the current billing period.
            </li>
            <li>
              You can manage and cancel your subscription at any time through your Apple ID account
              settings in the App Store. Cancellation takes effect at the end of the current billing
              period.
            </li>
            <li>
              No refunds will be provided for the unused portion of any subscription term. Refund
              requests are handled by Apple in accordance with their refund policies.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content in the App, including but not limited to graphics, designs, text, and software,
            is the property of Cool Studio or its licensors and is protected by intellectual property
            laws. Song previews are provided by Apple&apos;s iTunes catalog and remain the property of
            their respective rights holders.
          </p>
        </section>

        <section>
          <h2>6. User Content</h2>
          <p>
            Your chosen display name is visible to other players in game rooms and on leaderboards. We
            reserve the right to remove or modify usernames that violate our acceptable use policy
            without prior notice.
          </p>
        </section>

        <section>
          <h2>7. Account Deletion</h2>
          <p>
            You may delete your account at any time from the Account section within the App. Deleting
            your account will permanently remove your profile, game statistics, and leaderboard data.
            Active subscriptions should be cancelled through the App Store before deleting your account.
          </p>
        </section>

        <section>
          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
            kind, either express or implied. We do not guarantee that the App will be uninterrupted,
            error-free, or free of harmful components.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Cool Studio shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of or related
            to your use of the App.
          </p>
        </section>

        <section>
          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Continued use of the App after changes
            are posted constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of Sweden,
            without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <p className="mt-2">
            <a href="mailto:support@coolstudio.se" className="text-green-dark underline">
              support@coolstudio.se
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
