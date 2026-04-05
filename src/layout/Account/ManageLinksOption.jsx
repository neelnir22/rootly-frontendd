import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi2";

import { useState } from "react";
import { useNavigate } from "react-router";

export function ManageLinksOption() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex justify-center items-center hover:bg-gray-200 w-35">
        <CollapsibleTrigger>My Links</CollapsibleTrigger>
        {open ? (
          <HiOutlineChevronUp />
        ) : (
          <HiOutlineChevronDown className="flex items-center" />
        )}
      </div>
      <CollapsibleContent>
        <a href="/admin">Links</a>
      </CollapsibleContent>
      <CollapsibleContent>
        <a href="/admin/all-short-link">Short Links</a>
      </CollapsibleContent>

      <CollapsibleContent>
        <a href="/">Insigths</a>
      </CollapsibleContent>
    </Collapsible>
  );
}
