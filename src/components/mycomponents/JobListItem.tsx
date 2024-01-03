import React from "react";

export type JobListItem = {
  id: string;
  title: string;
  company: string;
  date: string;
  badgeLetters: string;
  relevanceScore: number;
  daysAgo: number;
};

export type JobListItemProps = {
  job: JobListItem;
};

export default function JobListItem({ JobListItem }: JobListItemProps) {
  return (
    <div>
      <section>
        <li>
          <p>{JobListItem.badge}</p>
          <h3>{JobListItem.title}</h3>
          <p>{JobListItem.company}</p>
        </li>
      </section>
    </div>
  );
}
