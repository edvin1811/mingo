import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mingo",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: October 1, 2026</p>

      <div className="mt-8 space-y-8 text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        <section>
          <p>
            Cool Studio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates Mingo: Music Bingo, a
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
              leaderboards and in game rooms. Other signed-in players can find you by typing your exact
              username, to send you a friend request.
            </li>
            <li>
              <strong>Email address</strong> &mdash; collected only if you sign up with email or if your
              Apple ID shares it during Sign in with Apple. Used solely for account authentication.
            </li>
          </ul>

          <p className="mt-3 font-medium">Avatar and Public Profile</p>
          <ul>
            <li>
              <strong>Avatar</strong> &mdash; the character you build from the App&apos;s own parts (skin
              tone, hair, eyes, hats, outfits). It is not a photo and contains no image of you.
            </li>
            <li>
              <strong>Public profile</strong> &mdash; your username, avatar and whether you have Mingo Pro.
              Other signed-in players can see it in game rooms, on leaderboards and in friend lists.
            </li>
          </ul>

          <p className="mt-3 font-medium">Friends and Invites</p>
          <ul>
            <li>
              <strong>Friend list</strong> &mdash; the players you and they have both agreed to be friends
              with. Only the two of you can see that friendship.
            </li>
            <li>
              <strong>Friend requests</strong> &mdash; who sent a request to whom, with the sender&apos;s
              username and avatar. Only the sender and the recipient can see a request.
            </li>
            <li>
              <strong>Game invites</strong> &mdash; when you invite a friend into a game: who sent it, who
              it is for, the room code and the quiz name. Invites can only be sent between friends, and are
              deleted once answered or after 30 minutes.
            </li>
          </ul>

          <p className="mt-3 font-medium">Guests</p>
          <ul>
            <li>
              You can play without an account. Guests get an anonymous account so games work, and choose a
              username that other players see in game rooms. Guests do not appear on leaderboards and
              cannot have an avatar, friends or invites.
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
            <li>
              To show your username, avatar and Pro status to other players in game rooms, on leaderboards
              and in friend lists.
            </li>
            <li>To let you add friends, answer friend requests and invite friends into games.</li>
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
              <strong>Apple App Store</strong> &mdash; subscriptions are bought and managed through the App
              Store. Apple handles payment; we never receive your payment details. See{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Privacy Policy
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
            We retain your account data (username, email, game statistics, avatar, friends) for as long as
            your account is active. You can delete your account at any time in the App under Account &rarr;
            Settings &rarr; Delete account. This permanently deletes your account, profile, avatar, game
            statistics, leaderboard entries, friends, friend requests and game invites. You can also ask us
            to delete it at the email address below.
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
            <li>Remove a friend, or decline a friend request, at any time.</li>
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
