"use client";

import Link from "next/link";

import { SessionFragment } from "@/portal/api";
import { formatDate } from "@/utils/date";

interface SessionListProps {
  sessions: SessionFragment[];
  path: string;
}

export default function SessionList({ sessions, path }: SessionListProps) {
  return (
    <div className="w-full bg-white rounded-md mb-6">
      <div className="flex pb-3 font-bold px-6 py-4">
        <div className="grow">Sessão</div>
        <div>Data</div>
      </div>
      <div>
        {sessions.map((session) => (
          <Link
            href={`${path}/${session.id}`}
            key={session.id}
            className="flex border-t border-gray-200 dark:border-gray-700 py-4 px-6 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <div className="grow">{session.name}</div>
            <div>{formatDate(session.date || "", "LL, h:mm a")}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
