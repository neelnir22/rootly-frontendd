import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi2";

import { useState } from "react";

export function ManageLinksOption() {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex flex-col justify-center items-center w-full text-bold">
        <CollapsibleTrigger className="hover:bg-gray-300 flex items-center">
          My Links
          <span>
            {open ? (
              <HiOutlineChevronUp />
            ) : (
              <HiOutlineChevronDown className="flex items-center" />
            )}
          </span>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <a href="/admin">Links</a>
        </CollapsibleContent>
        <CollapsibleContent>
          <a href="/admin/all-short-link">Short Links</a>
        </CollapsibleContent>

        <CollapsibleContent>
          <a href="/">Insigths</a>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
