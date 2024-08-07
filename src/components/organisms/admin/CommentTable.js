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
  Pagination,
  Spinner,
  useDisclosure,
  Chip,
  User,
} from "@nextui-org/react";
import { EyeIcon, TrashIcon, UserIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import {
  columnsCommentsTable,
  statusCommentColorMap,
  statusCommentTitle,
} from "@/constants/dashboard";
import { useGetData } from "src/hooks/useQuery/queries";
import { useChangeData, useDeleteData } from "src/hooks/useQuery/mutations";
import { useQueryClient } from "@tanstack/react-query";
import ModalDeleteCustom from "@/molecules/common/ModalDeleteCustom";
import { EllipsisHorizontalIcon, StarIcon } from "@heroicons/react/24/solid";
import TopContentTable from "@/molecules/admin/TopContentTable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ModalShowInfoCommentCustom from "@/molecules/admin/ModalShowInfoCommentCustom";

const INITIAL_VISIBLE_COLUMNS = ["id", "status", "actions", "userInfo", "rate"];

function CommentsTable() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [commentId, setCommentId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(
    parseInt(searchParams.get("rowsPerPage")) || 5
  );
  const [searchValue, setSearchValue] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({});
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [commentInfoModal, setCommentInfoModal] = useState({});

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

  const query = new URLSearchParams(searchParams.toString());
  const hasSearchFilter = Boolean(searchValue);

  const { replace } = useRouter();
  const pathName = usePathname();
  const queryClient = useQueryClient();

  // get all products
  const {
    data,
    isPending: isPendingComment,
    isFetching: isFetchingComment,
    isError: isErrorComment,
  } = useGetData({ route: "comments", page, rowsPerPage, searchValue });

  useEffect(() => {
    query.set("rowsPerPage", rowsPerPage);
    pages > 1 ? query.set("page", page) : query.delete("page", page);

    const queries = query.toString();
    replace(`${pathName}?${queries}`);
  }, [data?.data.comments, page, rowsPerPage]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["comments"] });
  }, [searchValue, rowsPerPage]);

  // mutation
  const {
    isError: isErrorDeleteComment,
    isPending: isPendingDeleteComment,
    mutateAsync: mutateAsyncDeleteComment,
  } = useDeleteData({ queryClient, route: "comments" });
  const {
    variables: variablesChangeComment,
    isPending: isPendingChangeComment,
    isError: isErrorChangeComment,
    mutateAsync: mutateAsyncChangeComment,
  } = useChangeData({ queryClient, route: "comments" });

  const deleteCommentHandler = async (id) => {
    const res = await mutateAsyncDeleteComment(id);
    if (res.data.error || isErrorDeleteComment) {
      toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
      setSelectedKeys(new Set([]));
    }
  };

  const changeCommentHandler = async ({ status, action }) => {
    const res = await mutateAsyncChangeComment({
      status,
      action,
      id: commentId,
    });
    if (res.data.error || isErrorChangeComment) {
      toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
      console.log(res.data);
    }
  };

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columnsCommentsTable;

    return columnsCommentsTable.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    return data?.data.comments ? [...data?.data.comments] : [];
  }, [data?.data.comments, page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const pages = useMemo(() => {
    if (searchParams.get("search")) {
      return Math.ceil(data?.data.comments / rowsPerPage);
    } else if (data?.data.totalCountProducts) {
      return Math.ceil(data?.data.totalCountProducts / rowsPerPage);
    } else {
      return 0;
    }
  }, [data?.data.comments, rowsPerPage, searchValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback(
    (comment, columnKey, index) => {
      const cellValue = comment[columnKey];
      const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

      switch (columnKey) {
        case "description":
          return (
            <p className="max-w-44 whitespace-nowrap overflow-hidden text-ellipsis">
              {comment.description}
            </p>
          );
        case "status":
          return (
            <Chip
              className="capitalize px-2"
              color={statusCommentColorMap[comment.status]}
              size="sm"
              variant="flat"
            >
              {statusCommentTitle[cellValue]}
            </Chip>
          );
        case "userInfo":
          return (
            <User
              avatarProps={{
                src: comment.userInfo.avatar,
                radius: "full",
                fallback: <UserIcon className="opacity-50" />,
                showFallback: true,
              }}
              description={comment.userInfo.email}
              name={`${comment.userInfo.firstName} ${comment.userInfo.lastName}`}
            />
          );
        case "rate":
          return (
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              <span className="text-xl">{comment.rate}</span>
              <StarIcon className="w-3 h-3" />
            </div>
          );
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isLoading={
                    variablesChangeComment?.id === comment._id &&
                    isPendingChangeComment
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
                  onClick={() => {
                    onOpenShowInfo();
                    setCommentInfoModal({
                      description: comment.description,
                      productInfo: comment.productInfo,
                    });
                    setCommentId(comment._id);
                  }}
                  key="details comment"
                  showDivider
                  description="مشاهده دیدگاه و تغییر وضعیت نمایش"
                  startContent={<EyeIcon className={iconClasses} />}
                >
                  نمایش جزئیات
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    onOpenDeleteModal();
                    setCommentId(comment._id);
                  }}
                  key="delete"
                  className="text-red-500"
                  description="حذف دیدگاه و اطلاعات مربوطه"
                  color="inherit"
                  startContent={
                    <TrashIcon className="text-xl pointer-events-none flex-shrink-0 text-red-500" />
                  }
                >
                  حذف دیدگاه
                </DropdownItem>
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
    [page, isPendingChangeComment, data?.data.comments]
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
        type="comments"
        isPending={isPendingComment}
        isFetching={isFetchingComment}
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
        columnsTable={columnsCommentsTable}
      />
    );
  }, [
    searchValue,
    visibleColumns,
    data?.data.comments,
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
          تعداد کاربران سایت : {data?.data.totalCountProducts}
        </span>
      </div>
    );
  }, [rowsPerPage, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        aria-label="users table"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[410px]",
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
              align={
                column.uid === "userInfo" ||
                column.uid === "id" ||
                column.uid === "description"
                  ? "start"
                  : "center"
              }
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          isLoading={isPendingComment || isFetchingComment}
          loadingContent={<Spinner />}
          emptyContent={"دیدگاهی یافت نشد!!!"}
          items={data?.data.comments ?? []}
        >
          {!isErrorComment
            ? data?.data.comments.map((item, index) => (
                <TableRow className="h-20" key={item._id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey, index)}</TableCell>
                  )}
                </TableRow>
              ))
            : toast.error("مشکلی در دریافت اطلاعات بوجود آمده")}
        </TableBody>
      </Table>

      <ModalDeleteCustom
        title="حذف کاربر"
        isOpen={isOpenDeleteModal}
        isPending={isPendingDeleteComment}
        warningMessage={`آیا از حذف این دیدگاه اطمینان دارید؟؟`}
        onOpenChange={onOpenChangeDeleteModal}
        clickHandler={() => deleteCommentHandler(commentId)}
      />
      <ModalShowInfoCommentCustom
        title="جزئیات دیدگاه"
        isOpen={isOpenShowInfo}
        isPending={isPendingChangeComment}
        commentInfo={commentInfoModal}
        onOpenChange={onOpenChangeShowInfo}
        clickHandler={changeCommentHandler}
      />
    </>
  );
}

export default CommentsTable;
