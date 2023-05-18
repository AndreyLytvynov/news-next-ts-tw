import { FC } from "react";

import Image from "next/image";

import { IAuthorNewsProps } from "@/components/elements/AuthorNews/types";

const AuthorNews: FC<IAuthorNewsProps> = ({ author }) => {
  return (
    <div className="flex">
      <div className="rounded-3xl overflow-hidden w-12">
        <Image
          src={author.photo?.url || ""}
          alt={author?.photo?.title || ""}
          width={60}
          height={60}
        />
      </div>
      <div className="ml-2">
        <p className="text-slate-500">{author?.name || ""}</p>
        <p className="text-slate-500">{author?.post || ""}</p>
      </div>
    </div>
  );
};

export default AuthorNews;
