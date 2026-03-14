import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-2">
          📸 Photo Gallery
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Browse, search, and favourite your photos
        </p>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
