"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const roles = ["Full Stack web developer", "UI/ UX designer", "AI/ML enthusiast"];
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerMotionPreference() {
  return false;
}

export default function RoleTypewriter() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const role = roles[roleIndex];
    const isComplete = characterCount === role.length;
    const isEmpty = characterCount === 0;
    const delay = isDeleting ? 45 : isComplete ? 1400 : 85;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      } else {
        setCharacterCount((currentCount) => currentCount + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, prefersReducedMotion, roleIndex]);

  const visibleRole = prefersReducedMotion
    ? roles[0]
    : roles[roleIndex].slice(0, characterCount);

  return (
    <span className="role-typewriter" aria-hidden="true">
      <span className="role-typewriter-text">{visibleRole}</span>
      <span className="role-typewriter-cursor" hidden={prefersReducedMotion} />
    </span>
  );
}