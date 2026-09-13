"use client";

import { useState } from "react";
import { campusCommunities, communityCategories, type CommunityCategory } from "@/lib/campus-communities";
import styles from "./campus-roadmap.module.css";

export function CampusCommunities() {
  const [category, setCategory] = useState<CommunityCategory>("遊戲");
  return <div className={styles.communityExplorer}>
    <div role="group" aria-label="社群分類" className={styles.categoryButtons}>
      {communityCategories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="community-cards" onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <ul id="community-cards" aria-label={`${category}社群`} className={styles.communityCards}>
      {campusCommunities.filter(item => item.category === category).map(item => <CommunityCard key={item.slug} community={item} />)}
    </ul>
  </div>;
}

function CommunityCard({ community }: { community: typeof campusCommunities[number] }) {
  const [state, setState] = useState<"idle" | "pending" | "success" | "failed">("idle");
  const tag = `@${community.slug}`;
  async function copyTag() {
    setState("pending");
    try {
      await navigator.clipboard.writeText(tag);
      setState("success");
    } catch {
      setState("failed");
    }
  }
  return <li className={styles.communityCard}>
    <span className={styles.communityIcon} aria-hidden="true">{community.icon}</span>
    <h3>{community.name}</h3>
    <p className={styles.communityTag}>{tag}</p>
    <p className={styles.communityPurpose}>{community.purpose}</p>
    <button type="button" onClick={copyTag} disabled={state === "pending"} aria-label={`複製標籤 ${tag}`}>複製標籤</button>
    <p role="status" aria-live="polite" aria-atomic="true" className={styles.copyStatus}>{state === "success" ? `已複製 ${tag}` : state === "failed" ? "請長按複製" : ""}</p>
    {state === "failed" ? <input className={styles.copyFallback} aria-label={`手動複製 ${tag}`} readOnly value={tag} onFocus={event => event.currentTarget.select()} /> : null}
  </li>;
}
