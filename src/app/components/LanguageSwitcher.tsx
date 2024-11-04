// LanguageSwitcher.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage("en")} className="mr-2">
        English
      </button>
      <button onClick={() => switchLanguage("ar")}>العربية</button>
    </div>
  );
};

export default LanguageSwitcher;
