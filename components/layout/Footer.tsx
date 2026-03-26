import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
          {personalInfo.name}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            LinkedIn ↗
          </Link>
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Email ↗
          </Link>
        </div>
        <p className="text-xs text-neutral-300 dark:text-neutral-700">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
