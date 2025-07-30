// src/components/HideNextToast.js
'use client';

import { useEffect } from 'react';

export default function HideNextToast() {
  useEffect(() => {
    const removeToast = () => {
      const toastEl = document.querySelector('.nextjs-toast');
      if (toastEl) toastEl.remove();
    };

    // Remove immediately if it's already mounted
    removeToast();

    // Watch for it to be injected again
    const observer = new MutationObserver(() => {
      removeToast();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
