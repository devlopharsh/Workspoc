'use client';
import { useEffect } from 'react';

export default function HideNextToast() {
  useEffect(() => {
    const toastEl = document.querySelector('nextjs-toast');
    if (toastEl) {
      toastEl.style.display = 'none';
    }
  }, []);

  return null;
}
