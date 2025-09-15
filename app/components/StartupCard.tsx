import React from "react";
import { formatDate } from "../utils/datePicker";
import { EyeIcon } from "lucide-react";
import { StartupTypeCard } from "@/types/startup";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({
  post: {
    _createdAt,
    views,
    _id,
    title,
    description,
    imageSmall,
    imageMedium,
    category,
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
          <p className="text-16-medium line-clamp-1">
            <Link href={`/user/${authorId}`}>{name}</Link>
          </p>
          <h3 className="text-26-semibold line-clamp-1">
            <Link href={`/startp/${_id}`}>{title}</Link>
          </h3>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="/touch_1280.jpg"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        {/* <Image src="/touch_1280.jpg" alt="placeholder" className="startup-card_img"/> */}
        <img src={imageSmall} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default StartupCard;
