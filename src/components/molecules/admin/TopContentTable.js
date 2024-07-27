"use client";

import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import {
  ArrowPathIcon,
  ChevronDownIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { columnsUserTable, statusOptions } from "@/constants/dashboard";
import {
  useChangeSomeUser,
  useDeleteSomeUser,
} from "src/hooks/useQuery/mutations";
import toast from "react-hot-toast";
import CustomModal from "../common/Modal";
import { useEffect, useState } from "react";
import SearchTable from "@/atoms/SearchTable";
import { capitalize } from "@/utils/helper/helper";
import { useQueryClient } from "@tanstack/react-query";

function TopContentTable({
  setPage,
  statusFilter,
  selectedKeys,
  setSelectedKeys,
  filteredItems,
  isPendingUsers,
  visibleColumns,
  isFetchingUser,
  searchValue,
  setSearchValue,
  setStatusFilter,
  setVisibleColumns,
  onRowsPerPageChange,
  rowsPerPage,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const queryClient = useQueryClient();
  const {
    isError: isErrorDelete,
    isPending: isPendingDelete,
    mutateAsync: mutateAsyncDelete,
  } = useDeleteSomeUser(queryClient);

  const {
    isError: isErrorStatus,
    isPending: isPendingStatus,
    mutateAsync: mutateAsyncStatus,
  } = useChangeSomeUser(queryClient);

  const [ids, setIds] = useState([]);

  useEffect(() => {
    setIds([]);
    for (const id of selectedKeys) {
      setIds((ids) => [...ids, id]);
    }
  }, [selectedKeys]);

  const deleteSelectedUsersHandler = async () => {
    const res = await mutateAsyncDelete({ ids, selectedKeys });
    if (res.data.error || isErrorDelete) {
      return toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
      setSelectedKeys(new Set([]));
    }
  };

  const changeStatusSelectedUsersHandler = async () => {
    const res = await mutateAsyncStatus({ ids, selectedKeys });
    if (res.data.error || isErrorStatus) {
      return toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-7">
      <div className="flex justify-between gap-3 items-end">
        <SearchTable
          isPendingUser={isPendingUsers}
          isFetchingUser={isFetchingUser}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setPage={setPage}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
                variant="flat"
              >
                وضعیت
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}
            >
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {capitalize(status.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
                variant="flat"
              >
                ستون ها
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}
            >
              {columnsUserTable.map((column) => (
                <DropdownItem key={column.uid} className="capitalize">
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative w-[50%] flex gap-4 items-center">
          {!!selectedKeys.size || selectedKeys === "all" ? (
            <div className="flex gap-2 items-center">
              <Button
                className=" text-red-500"
                onClick={() => onOpen()}
                isLoading={isPendingDelete}
                isIconOnly
                variant="flat"
              >
                <TrashIcon />
              </Button>
              <Button
                className=" text-blue-400"
                onClick={changeStatusSelectedUsersHandler}
                isLoading={isPendingStatus}
                isIconOnly
                variant="flat"
              >
                <ArrowPathIcon />
              </Button>
            </div>
          ) : null}
          <span className="text-xs md:text-sm font-bold text-default-400">
            {selectedKeys === "all"
              ? "همه موارد انتخاب شد"
              : `${selectedKeys.size} از ${filteredItems.length} انتخاب شده`}
          </span>
        </div>
        <label className="flex items-center text-default-400 text-xs md:text-sm font-bold">
          ردیف در هر صفحه:
          <select
            className="bg-transparent outline-none text-default-400 text-xs md:text-sm font-bold"
            onChange={onRowsPerPageChange}
            defaultValue={rowsPerPage}
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>
      <CustomModal
        title="حذف کاربر"
        warningMessage={`آیا میخواهید کاربران را حذف کنید؟ در صورت موافقت تمام اطلاعات کاربران حذف خواهد شد`}
        isOpen={isOpen}
        isPending={isPendingDelete}
        onOpenChange={onOpenChange}
        clickHandler={deleteSelectedUsersHandler}
      />
    </div>
  );
}

export default TopContentTable;
