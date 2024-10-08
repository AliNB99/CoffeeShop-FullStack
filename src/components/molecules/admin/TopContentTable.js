"use client";

import ModalShowInfoCommentCustom from "./ModalShowInfoCommentCustom";
import ModalDeleteCustom from "../common/ModalDeleteCustom";
import { useQueryClient } from "@tanstack/react-query";
import { capitalize } from "@/utils/helper/helper";
import SearchTable from "@/atoms/SearchTable";
import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import {
  ArrowPathIcon,
  Bars3BottomRightIcon,
  ChevronDownIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  useChangeSomeData,
  useDeleteSomeData,
} from "src/hooks/useQuery/mutations";
import Link from "next/link";
import { typeTitleMap } from "@/constants/dashboardItem";

function TopContentTable({
  setPage,
  selectedKeys,
  setSelectedKeys,
  filteredItems,
  isPending,
  isFetching,
  visibleColumns,
  searchValue,
  setSearchValue,
  setVisibleColumns,
  onRowsPerPageChange,
  rowsPerPage,
  columnsTable,
  type,
  role,
}) {
  const [ids, setIds] = useState([]);
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onOpenChange: onOpenChangeDeleteModal,
  } = useDisclosure();

  const {
    isOpen: isOpenShowInfo,
    onOpen: onOpenShowInfo,
    onOpenChange: onOpenChangeShowInfo,
  } = useDisclosure();

  const queryClient = useQueryClient();

  const { isPending: isPendingDelete, mutateAsync: mutateAsyncDelete } =
    useDeleteSomeData({ queryClient, route: type });

  const { isPending: isPendingStatus, mutateAsync: mutateAsyncStatus } =
    useChangeSomeData({ queryClient, route: type });

  useEffect(() => {
    setIds([]);
    for (const id of selectedKeys) {
      setIds((ids) => [...ids, id]);
    }
  }, [selectedKeys]);

  const deleteSelectedDataHandler = async () => {
    await mutateAsyncDelete({ ids, selectedKeys });
    setSelectedKeys(new Set([]));
  };

  const changeStatusSelectedDataHandler = async (item) => {
    await mutateAsyncStatus({
      ids,
      selectedKeys,
      action: "changeStatus",
      statusValue: item.status,
    });
  };

  return (
    <div className="flex flex-col gap-4 mt-7">
      <div
        className={`flex ${
          type === "products" && "flex-col-reverse"
        } md:flex-row justify-between gap-3 items-end`}
      >
        <SearchTable
          isFetching={isFetching}
          isPending={isPending}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setPage={setPage}
        />
        <div
          className={`${
            type === "products" ? "w-full" : "w-fit md:w-full"
          } flex items-center justify-end gap-2`}
        >
          {type === "products" && (
            <Button className="w-full md:w-fit" color="primary" variant="flat">
              <Link
                className="flex items-center justify-center gap-2"
                href="/admin/products-list/add-product"
              >
                <PlusIcon />
                <span>محصول جدید</span>
              </Link>
            </Button>
          )}
          <Dropdown>
            <DropdownTrigger className="flex">
              <Button
                className={`${type === "products" && "w-full"} md:w-fit `}
                endContent={<ChevronDownIcon className="text-small" />}
                variant="flat"
              >
                <Bars3BottomRightIcon />
                <span className={`${type === "users" && "hidden md:inline"}`}>
                  ستون ها
                </span>
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
              {columnsTable.map((column) => (
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
              {type === "users" && role !== "OWNER" ? null : (
                <Tooltip className=" text-red-500" content="حذف کاربران">
                  <Button
                    className=" text-red-500"
                    onClick={() => onOpenDeleteModal()}
                    isLoading={isPendingDelete}
                    isIconOnly
                    variant="flat"
                  >
                    <TrashIcon />
                  </Button>
                </Tooltip>
              )}
              <Tooltip content="تغییر وضعیت کاربران">
                <Button
                  className=" text-zinc-500 dark:text-zinc-300"
                  onClick={
                    type === "comments"
                      ? onOpenShowInfo
                      : changeStatusSelectedDataHandler
                  }
                  isLoading={isPendingStatus}
                  isIconOnly
                  variant="flat"
                >
                  <ArrowPathIcon />
                </Button>
              </Tooltip>
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
            className="bg-transparent outline-none text-default-400 text-xs md:text-sm font-bold cursor-pointer"
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
      <ModalDeleteCustom
        title={`حذف ${typeTitleMap[type]}`}
        warningMessage={`آیا میخواهید ${typeTitleMap[type]} را حذف کنید؟ در صورت موافقت تمام اطلاعات ${typeTitleMap[type]} حذف خواهد شد`}
        isOpen={isOpenDeleteModal}
        isPending={isPendingDelete}
        onOpenChange={onOpenChangeDeleteModal}
        clickHandler={deleteSelectedDataHandler}
      />
      <ModalShowInfoCommentCustom
        title="تغییر وضعیت نمایش"
        isOpen={isOpenShowInfo}
        isPending={isPendingStatus}
        onOpenChange={onOpenChangeShowInfo}
        clickHandler={changeStatusSelectedDataHandler}
      />
    </div>
  );
}

export default TopContentTable;
