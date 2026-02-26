export default function Home() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center px-6 py-24">
      <div className="text-center max-w-lg">
        {/* App icon placeholder */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[28px] bg-green text-5xl shadow-lg">
          🎵
        </div>

        <h1 className="text-4xl font-bold tracking-tight">Music Bingo</h1>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Listen to songs, guess the title, and compete with friends in
          real-time. Fill your bingo card first to win!
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-gray-100 px-4 py-2">Multiplayer</span>
            <span className="rounded-full bg-gray-100 px-4 py-2">Global Leaderboard</span>
            <span className="rounded-full bg-gray-100 px-4 py-2">100+ Songs</span>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-400">Available on the App Store</p>
      </div>
    </main>
  );
}
