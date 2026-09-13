"use client";

import { useSyncExternalStore } from "react";
import styles from "./interstellar-navigation.module.css";

const missions = ["DISCOVER", "DOWNLOAD", "PROFILE", "ATOMIC NETWORK", "AI RADAR", "FIND YOUR PEOPLE"];
const stars = [[8, 10], [22, 21], [84, 8], [94, 31], [9, 43], [45, 37], [59, 8], [88, 86], [40, 73], [9, 93], [56, 53], [91, 57]];

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}
const readHash = () => window.location.hash;
const serverHash = () => "";

export function InterstellarNavigation({ tag, code, titles }: { tag: string; code: string; titles: string[] }) {
  const hash = useSyncExternalStore(subscribe, readHash, serverHash);

  return (
    <nav className={styles.navigation} aria-label="星際 RoadMap 關卡導航" aria-describedby="planet-instructions">
      <div className={styles.chart}>
        <div className={styles.cosmos} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.radarArc} />
          {stars.map(([left, top], index) => <i key={index} className={styles.star} style={{ left: `${left}%`, top: `${top}%` }} />)}
          <svg className={styles.mobileRoute} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path className={styles.routeGlow} d="M20 77 C20 65 72 87 72 65 C72 53 24 65 24 50 C24 36 74 51 74 36 C74 21 27 35 27 21 C27 7 72 24 72 8" />
            <path className={styles.route} d="M20 77 C20 65 72 87 72 65 C72 53 24 65 24 50 C24 36 74 51 74 36 C74 21 27 35 27 21 C27 7 72 24 72 8" />
          </svg>
          <svg className={styles.desktopRoute} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path className={styles.routeGlow} d="M9 63 C9 40 25 51 25 29 C25 7 42 85 42 63 C42 41 58 51 58 29 C58 7 75 85 75 63 C75 41 91 51 91 29" />
            <path className={styles.route} d="M9 63 C9 40 25 51 25 29 C25 7 42 85 42 63 C42 41 58 51 58 29 C58 7 75 85 75 63 C75 41 91 51 91 29" />
          </svg>
          <span className={styles.flightSignal} aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              {/* Nose points along +X so offset-rotate follows the route tangent. */}
              <path d="M2 10.5 6 12 2 13.5Z" fill="#c77aea" opacity=".55" />
              <path d="M8 9 6 4 14 8M8 15 6 20 14 16" fill="#a860d1" />
              <path d="M6 9.5 14 8 22 12 14 16 6 14.5Z" fill="#c77aea" />
              <path d="M8 10.5 14 9 19 12" stroke="#f2dfff" strokeWidth="1" strokeLinecap="round" />
              <path d="M6 10.5V13.5" stroke="#e2bbf5" strokeWidth="1.5" />
            </svg>
          </span>
        </div>
        {missions.map((mission, index) => {
          const href = `#step-${index + 1}`;
          return (
            <a key={mission} href={href} className={`${styles.planetLink} ${styles[`planet${index + 1}`]}`} aria-label={`0${index + 1} ${mission}：${titles[index]}`} aria-current={hash === href ? "step" : undefined}
              onKeyDown={event => {
                if (event.key === " ") {
                  event.preventDefault();
                  event.currentTarget.click();
                }
              }}>
              <span className={styles.atmosphere} aria-hidden="true" />
              <span className={styles.surface} aria-hidden="true" />
              <span className={styles.ring} aria-hidden="true" />
              <span className={styles.moon} aria-hidden="true" />
              <span className={styles.number}>0{index + 1}</span>
              <span className={styles.mission}>{mission}</span>
              {hash === href ? <span className={styles.current}>CURRENT MISSION</span> : null}
            </a>
          );
        })}
        <div className={styles.beacon}>
          <span className={styles.beaconLight} aria-hidden="true" />
          <span className={styles.beaconLabel}>{code} CAMPUS NETWORK</span>
          <strong>{tag}</strong>
          <span className={styles.destination}>DESTINATION SIGNAL</span>
        </div>
      </div>
      <p id="planet-instructions" className={styles.legend}><span aria-hidden="true">✦</span> SELECT A PLANET TO EXPLORE</p>
    </nav>
  );
}
