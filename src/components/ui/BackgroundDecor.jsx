export default function BackgroundDecor() {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#D4AF37] blur-[150px] rounded-full opacity-10"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-400 blur-[120px] rounded-full opacity-5"></div>
    </div>
  );
}
