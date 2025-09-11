import React from "react";
import { formatDate } from "../utils/datePicker";
import { EyeIcon } from "lucide-react";
import { StartupTypeCard } from "@/types/startup";
import Link from "next/link";

const StartupCard = ({
  post: {
    _createdAt,
    views,
    _id,
    title,
    author: { _id: authorId, name },
  },
}: {
  post: StartupTypeCard;
}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startp/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
