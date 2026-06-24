export default function ResumePage() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-neutral-950 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 bg-neutral-900 border-b border-neutral-800 shrink-0">
        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          Plabon Shekh — Resume
        </span>
        <a
          href="/resume.pdf"
          download="Plabon_Shekh_Product_Manager"
          className="text-xs font-semibold text-white border border-neutral-700 px-4 py-1.5 rounded-full hover:bg-white hover:text-neutral-900 transition-all"
        >
          Download PDF
        </a>
      </div>
      <iframe
        src="/resume.pdf"
        className="flex-1 w-full border-none"
        title="Plabon Shekh — Product Manager Resume"
      />
    </div>
  );
}
