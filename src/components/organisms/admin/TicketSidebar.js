"use client";

import { ticketMessage } from "@/constants/dashboardItem";
import { showContext } from "@/context/ShowContextProvider";
import CardTicket from "@/molecules/admin/CardTicket";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";

function TicketSidebar() {
  const { showElement, onShowElement } = useContext(showContext);
  return (
    <aside
      className={`fixed ${
        showElement.ticketList ? "left-0" : "-left-80"
      } top-0 bottom-0 p-4 bg-white dark:bg-zinc-700 w-80 overflow-y-hidden z-30 transition-all`}
    >
      <div className="flex items-center justify-between pb-5 mb-2 border-b border-gray-200 dark:border-b-white/20">
        <button
          onClick={() => onShowElement({ element: "ticketList" })}
          className="bg-zinc-100 dark:bg-zinc-600/50 rounded-full p-1 transition-all"
        >
          <XMarkIcon className="text-zinc-600 dark:text-white" />
        </button>
        <h4 className="font-medium">تیکت ها</h4>
      </div>
      <div className="space-y-3">
        {ticketMessage.map((i, index) => (
          <CardTicket
            key={index}
            title={i.title}
            message={i.message}
            category={i.category}
          />
        ))}
      </div>
    </aside>
  );
}

export default TicketSidebar;
