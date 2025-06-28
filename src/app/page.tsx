export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-pink-500 to-amber-400">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
          내 썸 스타일 테스트
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          나는 과연 어떤 스타일일까?
        </p>
        <button className="mt-8 px-8 py-4 bg-pink-600 text-white font-bold rounded-full shadow-xl transition-transform duration-200 hover:bg-pink-700 active:scale-95">
          테스트 시작하기
        </button>
      </div>
    </main>
  );
}