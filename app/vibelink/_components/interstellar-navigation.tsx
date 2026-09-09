"use client";

import { useSyncExternalStore } from "react";
import styles from "./interstellar-navigation.module.css";

const missions = ["DISCOVER", "DOWNLOAD", "PROFILE", "ATOMIC NETWORK", "AI RADAR"];
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
            <path className={styles.routeGlow} d="M18 78 C18 66 70 82 70 61 S24 61 24 43 S74 46 74 27 S34 30 34 9" />
            <path className={styles.route} d="M18 78 C18 66 70 82 70 61 S24 61 24 43 S74 46 74 27 S34 30 34 9" />
          </svg>
          <svg className={styles.desktopRoute} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path className={styles.routeGlow} d="M10 65 C12 14 29 9 30 31 S40 90 51 63 S58 6 71 26 S95 20 90 61" />
            <path className={styles.route} d="M10 65 C12 14 29 9 30 31 S40 90 51 63 S58 6 71 26 S95 20 90 61" />
          </svg>
          <span className={styles.flightSignal} />
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
