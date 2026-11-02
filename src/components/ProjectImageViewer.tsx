"use client";

import { useEffect, useRef, useState } from "react";
import { Expand, Maximize2, Minus, Plus, X } from "lucide-react";

export default function ProjectImageViewer({ src, width, height, title }: {
  src: string; width: number; height: number; title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const scrollArea = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function show() {
    setZoom(1);
    dialog.current?.showModal();
    scrollArea.current?.scrollTo(0, 0);
    setOpen(true);
  }

  return (
    <>
      <button type="button" onClick={show} aria-label={`放大查看${title}`} aria-haspopup="dialog"
        className="group relative block w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 text-left shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <img src={src} width={width} height={height} alt={`${title}完整方案`} className="block h-auto w-full" />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition group-hover:bg-white">
          <Expand size={14} aria-hidden="true" />放大查看
        </span>
      </button>

      <dialog ref={dialog} onClose={() => setOpen(false)}
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        aria-label={`${title}大图预览`}
        className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%-1rem)] max-w-7xl overflow-hidden rounded-2xl border-0 bg-gray-950 p-0 text-white shadow-2xl backdrop:bg-black/80 sm:w-[calc(100%-3rem)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <h2 className="text-sm font-medium">方案大图</h2>
          <div className="flex items-center gap-1">
            <button type="button" aria-label="缩小" disabled={zoom <= 1} onClick={() => setZoom(value => Math.max(1, value - 0.5))} className="rounded-lg p-2 hover:bg-white/10 disabled:opacity-30 focus-visible:outline-white"><Minus size={18} /></button>
            <span className="w-12 text-center text-xs tabular-nums" aria-live="polite">{zoom * 100}%</span>
            <button type="button" aria-label="放大" disabled={zoom >= 4} onClick={() => setZoom(value => Math.min(4, value + 0.5))} className="rounded-lg p-2 hover:bg-white/10 disabled:opacity-30 focus-visible:outline-white"><Plus size={18} /></button>
            <button type="button" aria-label="适应宽度" onClick={() => { setZoom(1); scrollArea.current?.scrollTo(0, 0); }} className="rounded-lg p-2 hover:bg-white/10 focus-visible:outline-white"><Maximize2 size={18} /></button>
            <button type="button" aria-label="关闭大图" autoFocus onClick={() => dialog.current?.close()} className="ml-2 rounded-lg p-2 hover:bg-white/10 focus-visible:outline-white"><X size={20} /></button>
          </div>
        </div>
        <div ref={scrollArea} className="max-h-[calc(94dvh-7rem)] overflow-auto overscroll-contain">
          <img src={src} width={width} height={height} alt={`${title}完整方案大图`} className="block h-auto max-w-none" style={{ width: `${zoom * 100}%` }} />
        </div>
        <p className="px-4 py-3 text-xs text-gray-400">使用 + / − 缩放，放大后可滚动查看；按 Esc 关闭。</p>
      </dialog>
    </>
  );
}
