export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 shadow-lg">
        🎓
      </div>
      <span className="text-white font-bold text-xl hidden sm:inline">Inspire Public School</span>
    </div>
  );
}
