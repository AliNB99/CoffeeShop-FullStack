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
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import {
  columnsProductsTable,
  CategoryColorMap,
  categoryTitle,
} from "@/constants/dashboard";
import { useGetData } from "src/hooks/useQuery/queries";
import { useChangeData, useDeleteData } from "src/hooks/useQuery/mutations";
import { useQueryClient } from "@tanstack/react-query";
import ModalDeleteCustom from "@/molecules/common/ModalDeleteCustom";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import TopContentTable from "@/molecules/admin/TopContentTable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Logo } from "@/utils/svg";
import CustomImage from "@/atoms/CustomImage";
import { sp } from "@/utils/helper/replaceNumber";
import Link from "next/link";

const INITIAL_VISIBLE_COLUMNS = [
  "title",
  "category",
  "images",
  "id",
  "quantity",
  "status",
  "actions",
];

function ProductsTable() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [deleteId, setDeleteId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(
    parseInt(searchParams.get("rowsPerPage")) || 5
  );
  const [searchValue, setSearchValue] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({});
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [titleProduct, setTitleProduct] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const query = new URLSearchParams(searchParams.toString());
  const hasSearchFilter = Boolean(searchValue);

  const { replace } = useRouter();
  const pathName = usePathname();
  const queryClient = useQueryClient();

  // get all products
  const {
    data,
    isPending: isPendingProducts,
    isFetching: isFetchingProducts,
    isError: isErrorProducts,
  } = useGetData({ route: "products", page, rowsPerPage, searchValue });

  useEffect(() => {
    query.set("rowsPerPage", rowsPerPage);
    pages > 1 ? query.set("page", page) : query.delete("page", page);

    const queries = query.toString();
    replace(`${pathName}?${queries}`);
  }, [data?.data.products, page, rowsPerPage]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["products"] });
  }, [searchValue, rowsPerPage]);

  // mutation
  const {
    isError: isErrorDeleteProduct,
    isPending: isPendingDeleteProduct,
    mutateAsync: mutateAsyncDeleteProduct,
  } = useDeleteData({ queryClient, route: "products" });
  const {
    variables: variablesChangeProduct,
    isPending: isPendingChangeProduct,
    isError: isErrorChangeProduct,
    mutateAsync: mutateAsyncChangeProduct,
  } = useChangeData({ queryClient, route: "products" });

  const deleteProductHandler = async (id) => {
    const res = await mutateAsyncDeleteProduct(id);
    if (res.data.error || isErrorDeleteProduct) {
      toast.error("محصول حذف نشد.مجدد تلاش کنید.");
    } else {
      toast.success(res.data.message);
      setSelectedKeys(new Set([]));
    }
  };

  const changeProductHandler = async ({ id, action }) => {
    const res = await mutateAsyncChangeProduct({
      id,
      action,
      route: "products",
    });
    if (res.data.error || isErrorChangeProduct) {
      toast.error("وضعیت کاربر تغییر نکرد. مجدد تلاش کنید.");
    } else {
      toast.success(res.data.message);
    }
  };

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columnsProductsTable;

    return columnsProductsTable.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    return data?.data.products ? [...data?.data.products] : [];
  }, [data?.data.products, page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const pages = useMemo(() => {
    if (searchParams.get("search")) {
      return Math.ceil(data?.data.products / rowsPerPage);
    } else if (data?.data.totalCountProducts) {
      return Math.ceil(data?.data.totalCountProducts / rowsPerPage);
    } else {
      return 0;
    }
  }, [data?.data.products, rowsPerPage, searchValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback(
    (product, columnKey, index) => {
      const cellValue = product[columnKey];
      const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

      switch (columnKey) {
        case "images":
          return (
            <div className="flex items-center justify-center">
              {product.images.length ? (
                <div className="w-24 h-20 flex items-center justify-center">
                  <CustomImage
                    src={product.images[0]}
                    width={60}
                    height={60}
                    alt="products image"
                  />
                </div>
              ) : (
                <Logo className="opacity-30 w-full h-full md:max-h-10 md:max-w-10" />
              )}
            </div>
          );
        case "title":
          return (
            <Tooltip content={product.title}>
              <h1 className="max-w-44 whitespace-nowrap overflow-hidden text-ellipsis">
                {product.title}
              </h1>
            </Tooltip>
          );
        case "category":
          return (
            <Chip
              className="capitalize px-2"
              color={CategoryColorMap[product.category]}
              size="sm"
              variant="flat"
            >
              {categoryTitle[cellValue]}
            </Chip>
          );
        case "price":
          return <p>{sp(product.price)}</p>;
        case "status":
          return (
            <div className="px-3 flex items-center justify-center">
              {product.status === "available" ? (
                <Tooltip className="text-green-500" content="نمایش محصول">
                  <CheckCircleIcon className="text-green-500" />
                </Tooltip>
              ) : (
                <Tooltip className="text-red-500" content="عدم نمایش محصول">
                  <NoSymbolIcon className="text-red-500" />
                </Tooltip>
              )}
            </div>
          );
        case "discount":
          return <p>%{product.discount}</p>;
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isLoading={
                    variablesChangeProduct?.id === product._id &&
                    isPendingChangeProduct
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
                  key="details product"
                  description="نمایش تمام اطلاعات محصول"
                  startContent={<EyeIcon className={iconClasses} />}
                >
                  <Link
                    className="absolute left-0 top-0 block w-full h-full"
                    href={`/products/${product._id}`}
                  />
                  نمایش جزئیات
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    changeProductHandler({
                      id: product._id,
                      action: "changeStatus",
                    })
                  }
                  key="change status"
                  description="مدیریت وضعیت نمایش محصول"
                  startContent={<ArrowPathIcon className={iconClasses} />}
                >
                  تغییر وضعیت
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  showDivider
                  description="ویرایش و تغییر اطلاعات محصول"
                  startContent={<PencilSquareIcon className={iconClasses} />}
                >
                  <Link
                    className="absolute left-0 top-0 block w-full h-full"
                    href={`products-list/edit-product/${product._id}`}
                  />
                  ویرایش محصول
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    onOpen();
                    setDeleteId(product._id);
                    setTitleProduct(product.title);
                  }}
                  key="delete"
                  className="text-red-500"
                  description="حذف محصول و اطلاعات مربوطه"
                  color="inherit"
                  startContent={
                    <TrashIcon className="text-xl pointer-events-none flex-shrink-0 text-red-500" />
                  }
                >
                  حذف محصول
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
    [page, isPendingChangeProduct, data?.data.products]
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
        type="products"
        isPending={isPendingProducts}
        isFetching={isFetchingProducts}
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
        columnsTable={columnsProductsTable}
      />
    );
  }, [
    searchValue,
    visibleColumns,
    data?.data.products,
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
          تعداد محصولات سایت : {data?.data.totalCountProducts}
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
                column.uid === "title" || column.uid === "id"
                  ? "start"
                  : "center"
              }
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          isLoading={isPendingProducts || isFetchingProducts}
          loadingContent={<Spinner />}
          emptyContent={"محصولی یافت نشد!!!"}
          items={data?.data.products ?? []}
        >
          {!isErrorProducts
            ? data?.data.products.map((item, index) => (
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
        title="حذف محصول"
        warningMessage={`آیا میخواهید ${titleProduct} را حذف کنید؟ در صورت موافقت تمام اطلاعات مربوط به این محصول حذف خواهد شد`}
        isOpen={isOpen}
        isPending={isPendingDeleteProduct}
        onOpenChange={onOpenChange}
        clickHandler={() => deleteProductHandler(deleteId)}
      />
    </>
  );
}

export default ProductsTable;
