import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

function QuestionAuthForm({ link, title, labelLink }) {
  return (
    <div className="flex items-center justify-between pt-4 pb-5">
      <div className="flex items-center justify-center gap-1 text-sm">
        <span className="text-zinc-500 dark:text-zinc-200">{title}</span>
        <Link
          className="text-blue-400 hover:underline transition-all"
          href={link}
        >
          {labelLink}
        </Link>
      </div>
      <Tooltip content="صفحه اصلی">
        <Link className="text-orange-400" href="/">
          <ArrowLeftIcon />
        </Link>
      </Tooltip>
    </div>
  );
}

export default QuestionAuthForm;
