import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Music Bingo",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: February 26, 2026</p>

      <div className="mt-8 space-y-8 text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        <section>
          <p>
            Cool Studio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Music Bingo
            mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use,
            and protect your information when you use our App.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>

          <p className="mt-3 font-medium">Account Information</p>
          <ul>
            <li>
              <strong>Display name</strong> &mdash; a username you choose, visible to other players on
              leaderboards and in game rooms.
            </li>
            <li>
              <strong>Email address</strong> &mdash; collected only if you sign up with email or if your
              Apple ID shares it during Sign in with Apple. Used solely for account authentication.
            </li>
          </ul>

          <p className="mt-3 font-medium">Gameplay Data</p>
          <ul>
            <li>Game statistics: games played, wins, correct answers, and win streaks.</li>
            <li>Leaderboard rankings (global and by country).</li>
          </ul>

          <p className="mt-3 font-medium">Device Information</p>
          <ul>
            <li>
              <strong>Vendor identifier (IDFV)</strong> &mdash; an app-scoped device identifier provided
              by Apple. This is not an advertising identifier and cannot be used to track you across
              other apps.
            </li>
            <li>
              <strong>Country code</strong> &mdash; derived from your device&apos;s locale setting (e.g.
              &quot;US&quot;, &quot;SE&quot;). We do not access your GPS location.
            </li>
          </ul>

          <p className="mt-3 font-medium">Subscription Information</p>
          <ul>
            <li>
              Whether you have an active premium subscription and its expiration date, used to provide
              premium features within the App.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Information We Do Not Collect</h2>
          <ul>
            <li>We do not collect advertising identifiers (IDFA).</li>
            <li>We do not use analytics or behavioral tracking.</li>
            <li>We do not serve advertisements.</li>
            <li>We do not access your music library, contacts, photos, or GPS location.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To authenticate your account and let you sign in across sessions.</li>
            <li>To display your chosen username to other players in game rooms and on leaderboards.</li>
            <li>To track and display your game statistics and leaderboard rankings.</li>
            <li>To manage your premium subscription status.</li>
          </ul>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Firebase (Google)</strong> &mdash; for user authentication (Firebase Auth) and
              cloud database storage (Firebase Firestore). Firebase Analytics and advertising features
              are disabled. See{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                className="text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Superwall</strong> &mdash; for managing in-app subscription paywalls. Your
              Firebase user ID is shared with Superwall to manage subscription state. See{" "}
              <a
                href="https://superwall.com/privacy"
                className="text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Superwall Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Apple iTunes Lookup API</strong> &mdash; used to fetch song preview URLs. No
              personal data is sent in these requests.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Data Storage and Security</h2>
          <p>
            Your data is stored securely in Firebase Firestore, hosted by Google. We use industry-standard
            security measures including encrypted connections (TLS) and Firebase Security Rules to protect
            your data. Game room data is ephemeral and automatically deleted when the host leaves or after
            4 hours of inactivity.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your account data (username, email, game statistics) for as long as your account is
            active. If you wish to delete your account and associated data, please contact us at the email
            address below.
          </p>
        </section>

        <section>
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            The App is not directed at children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you believe we have inadvertently collected such
            information, please contact us so we can promptly delete it.
          </p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent at any time by deleting your account.</li>
          </ul>
        </section>

        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data rights,
            please contact us at:
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
