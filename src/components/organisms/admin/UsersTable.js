"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Tooltip,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import {
  ArrowPathIcon,
  CheckCircleIcon,
  EyeIcon,
  NoSymbolIcon,
  TrashIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import {
  columnsUserTable,
  roleColorMap,
  roleTitle,
} from "@/constants/dashboard";
import { useUsersData } from "src/hooks/useQuery/queries";
import { useChangeUser, useDeleteUser } from "src/hooks/useQuery/mutations";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CustomModal from "@/molecules/common/Modal";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import TopContentTable from "@/molecules/admin/TopContentTable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import api from "src/configs/api";

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions", "id"];

export default function UsersTable({ role }) {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [idOwner, setIdOwner] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(
    parseInt(searchParams.get("rowsPerPage")) || 5
  );
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortDescriptor, setSortDescriptor] = useState({});
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const query = new URLSearchParams(searchParams.toString());
  const hasSearchFilter = Boolean(searchValue);

  const { replace } = useRouter();
  const pathName = usePathname();
  const queryClient = useQueryClient();

  // get all users
  const {
    data,
    isPending: isPendingUsers,
    isFetching: isFetchingUser,
    isError: isErrorUsers,
  } = useUsersData(page, rowsPerPage, searchValue);

  useEffect(() => {
    const result = data?.data.users.find((user) => user.role === "OWNER");
    setIdOwner(result?._id);

    query.set("rowsPerPage", rowsPerPage);
    pages > 1 ? query.set("page", page) : query.delete("page", page);

    const queries = query.toString();
    replace(`${pathName}?${queries}`);
    console.log(data?.data.users);
  }, [data?.data.users, page, rowsPerPage]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  }, [searchValue, rowsPerPage]);

  // delete users
  const {
    isError: isErrorDeleteUser,
    isPending: isPendingDeleteUser,
    mutateAsync: mutateAsyncDeleteUser,
  } = useDeleteUser(queryClient);

  const {
    variables: variablesChangeUser,
    isPending: isPendingChangeUser,
    isError: isErrorChangeUser,
    mutateAsync: mutateAsyncChangeUser,
  } = useChangeUser(queryClient);

  const deleteUserHandler = async (id) => {
    const res = await mutateAsyncDeleteUser(id);

    if (res.data.error || isErrorDeleteUser) {
      toast.error("کاربر حذف نشد.مجدد تلاش کنید.");
    } else {
      toast.success(res.data.message);
      setSelectedKeys(new Set([]));
    }
  };

  const changeUserHandler = async (id, action) => {
    const res = await mutateAsyncChangeUser({ id, action });
    console.log(res);
    if (res.data.error || isErrorChangeUser) {
      toast.error("وضعیت کاربر تغییر نکرد. مجدد تلاش کنید.");
    } else {
      toast.success(res.data.message);
    }
  };

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columnsUserTable;

    return columnsUserTable.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    return data?.data.users ? [...data?.data.users] : [];
  }, [data?.data.users, page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const pages = useMemo(() => {
    if (searchParams.get("search")) {
      return Math.ceil(data?.data.users / rowsPerPage);
    } else if (data?.data.totalCountUser) {
      return Math.ceil(data?.data.totalCountUser / rowsPerPage);
    } else {
      return 0;
    }
  }, [data?.data.users, rowsPerPage, searchValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback(
    (user, columnKey, index) => {
      const cellValue = user[columnKey];
      const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                src: user.avatar,
                radius: "full",
                fallback: <UserIcon className="opacity-50" />,
                showFallback: true,
              }}
              description={user.email}
              name={`${user.firstName} ${user.lastName}`}
            />
          );
        case "role":
          return (
            <Chip
              className="capitalize px-2"
              color={roleColorMap[user.role]}
              size="sm"
              variant="flat"
            >
              {roleTitle[cellValue]}
            </Chip>
          );
        case "status":
          return (
            <div className="px-3">
              {user.status === "authorized" ? (
                <Tooltip className="text-green-500" content="مجاز برای فعالیت">
                  <CheckCircleIcon className="text-green-500" />
                </Tooltip>
              ) : (
                <Tooltip className="text-red-500" content="بن شده">
                  <NoSymbolIcon className="text-red-500" />
                </Tooltip>
              )}
            </div>
          );
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isLoading={
                    variablesChangeUser?.id === user._id && isPendingChangeUser
                  }
                  isIconOnly
                  variant="light"
                >
                  <EllipsisHorizontalIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                <DropdownItem
                  key="show"
                  description="نمایش تمام اطلاعات کاربر"
                  startContent={<EyeIcon className={iconClasses} />}
                >
                  نمایش جزئیات
                </DropdownItem>

                {role === "OWNER" && user.role !== "OWNER" && (
                  <DropdownItem
                    onClick={() => changeUserHandler(user._id, "changeRole")}
                    key="copy"
                    description="تغییر سطح دسترسی به اطلاعات"
                    startContent={
                      <WrenchScrewdriverIcon className={iconClasses} />
                    }
                  >
                    تغییر نقش کاربر
                  </DropdownItem>
                )}

                {user.role !== "OWNER" && (
                  <DropdownItem
                    onClick={() => changeUserHandler(user._id, "changeStatus")}
                    key="new"
                    description="بن کردن کاربر"
                    startContent={<ArrowPathIcon className={iconClasses} />}
                  >
                    تغییر وضعیت
                  </DropdownItem>
                )}
                {user.role !== "OWNER" && (
                  <DropdownItem
                    onClick={() => {
                      onOpen();
                      setDeleteId(user._id);
                      setFullName({
                        firstName: user.firstName,
                        lastName: user.lastName,
                      });
                    }}
                    key="delete"
                    className="text-red-500"
                    description="حذف کاربر و اطلاعات مربوطه"
                    color="inherit"
                    startContent={
                      <TrashIcon className="text-xl pointer-events-none flex-shrink-0 text-red-500" />
                    }
                  >
                    حذف کاربر
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          );
        case "id":
          return (
            <p>
              {page > 1 ? rowsPerPage * (page - 1) + (index + 1) : index + 1}
            </p>
          );
        default:
          return cellValue;
      }
    },
    [page, isPendingChangeUser, data?.data.users]
  );

  const onSearchChange = (value) => {
    if (value) {
      setSearchValue(value);
      setPage(1);
    } else {
      setSearchValue("");
    }
  };

  const topContent = useMemo(() => {
    return (
      <TopContentTable
        isPendingUsers={isPendingUsers}
        isFetchingUser={isFetchingUser}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setPage={setPage}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        onRowsPerPageChange={onRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        filteredItems={filteredItems}
      />
    );
  }, [
    searchValue,
    visibleColumns,
    data?.data.users,
    onSearchChange,
    hasSearchFilter,
    selectedKeys,
    rowsPerPage,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div
        className={`flex flex-col md:flex-row items-center gap-4 ${
          pages > 1 ? "justify-between" : "justify-center"
        }`}
      >
        {pages > 1 ? (
          <Pagination
            className="z-10"
            classNames={{ next: "scale-x-[-1]", prev: "scale-x-[-1]" }}
            isCompact
            showControls
            showShadow
            loop
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
        ) : null}
        <span className="text-default-400 text-xs md:text-sm font-bold">
          تعداد کاربران سایت : {data?.data.totalCountUser}
        </span>
      </div>
    );
  }, [rowsPerPage, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        disabledKeys={[idOwner]}
        aria-label="users table"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[430px]",
        }}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          isLoading={isPendingUsers || isFetchingUser}
          loadingContent={<Spinner />}
          emptyContent={"کاربری یافت نشد!!!"}
          items={data?.data.users ?? []}
        >
          {!isErrorUsers
            ? data?.data.users.map((item, index) => (
                <TableRow key={item._id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey, index)}</TableCell>
                  )}
                </TableRow>
              ))
            : toast.error("مشکلی در دریافت اطلاعات بوجود آمده")}
        </TableBody>
      </Table>

      <CustomModal
        title="حذف کاربر"
        warningMessage={`آیا میخواهید ${fullName.firstName} ${fullName.lastName} را حذف کنید؟ در صورت موافقت تمام اطلاعات مربوط به این شخص حذف خواهد شد`}
        isOpen={isOpen}
        isPending={isPendingDeleteUser}
        onOpenChange={onOpenChange}
        clickHandler={() => deleteUserHandler(deleteId)}
      />
    </>
  );
}
