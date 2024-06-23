"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { visuallyHidden } from "@mui/utils";
import { headCellProductTable } from "@/constants/dashboard";
import Image from "next/image";
import { LogoType, NoData } from "@/utils/svg";
import Link from "next/link";
import { sp } from "@/utils/helper/replaceNumber";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="sticky top-0 bg-indigo-100/60 dark:bg-zinc-700 z-10">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCellProductTable.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar({
  numSelected,
  deleteProductHandler,
  changeStatusHandler,
  showProductHandler,
  editProductHandler,
}) {
  const [loading, setLoading] = useState({
    changeStatus: false,
    deleteProduct: false,
  });
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} انتخاب شده
        </Typography>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title="ثبت محصول جدید">
            <IconButton>
              <Link href="/admin/add-product">
                <PlusIcon />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="جستجو">
            <div className="flex items-center gap-3">
              <IconButton onClick={() => setShowSearch((show) => !show)}>
                <MagnifyingGlassIcon />
              </IconButton>
              {showSearch && (
                <input className="border-2 focus:border-indigo-200 outline-none dark:border-zinc-700 dark:bg-inherit w-56 md:w-96 px-3 h-9 shadow-normal rounded-md transition-shadow" />
              )}
            </div>
          </Tooltip>
        </Box>
      )}

      {numSelected === 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Tooltip title="دیدن محصول">
            <IconButton onClick={showProductHandler}>
              <EyeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="تعییر وضعیت">
            <IconButton onClick={(e) => changeStatusHandler(e, setLoading)}>
              {loading.changeStatus ? (
                <CircularProgress size={20} />
              ) : (
                <ArrowsRightLeftIcon />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="ویرایش">
            <IconButton onClick={editProductHandler}>
              <PencilSquareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <IconButton onClick={(e) => deleteProductHandler(e, setLoading)}>
              {loading.deleteProduct ? (
                <CircularProgress size={20} />
              ) : (
                <TrashIcon />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {numSelected > 1 && (
        <Tooltip title="حذف">
          <IconButton onClick={(e) => deleteProductHandler(e, setLoading)}>
            {loading.deleteProduct ? (
              <CircularProgress size={20} />
            ) : (
              <TrashIcon />
            )}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function DataTable({ products }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const router = useRouter();

  const showProductHandler = (e) => {
    e.stopPropagation();
    router.push(`/products/${selected[0]}`);
  };

  const editProductHandler = (e) => {
    e.stopPropagation();
    router.push(`/admin/edit-product/${selected[0]}`);
  };

  const changeStatusHandler = async (e, setLoading) => {
    e.stopPropagation();
    setLoading((prev) => ({ ...prev, changeStatus: true }));
    const res = await fetch(`/api/admin/products/${selected[0]}`, {
      method: "PATCH",
    });
    const data = await res.json();
    setLoading((prev) => ({ ...prev, changeStatus: false }));
    if (data.error) {
      return toast.error(data.error);
    } else {
      router.refresh();
      return toast.success(data.message);
    }
  };

  const deleteProductHandler = async (e) => {
    e.stopPropagation();
    const res = await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selected),
    });
    const data = await res.json();
    if (data.error) {
      return toast.error(data.error);
    } else {
      router.refresh();
      return toast.success(data.message);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = products.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const visibleRows = stableSort(products, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          maxHeight: "100vh",
        }}
      >
        <EnhancedTableToolbar
          numSelected={selected.length}
          showProductHandler={showProductHandler}
          editProductHandler={editProductHandler}
          deleteProductHandler={deleteProductHandler}
          changeStatusHandler={changeStatusHandler}
        />
        <TableContainer
          sx={{
            width: "100%",
            maxHeight: 500,
          }}
        >
          <Table aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={products.length}
            />
            <TableBody>
              {visibleRows.length ? (
                visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      key={row._id}
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                      className={
                        index % 2 ? "bg-orange-50/40 dark:bg-zinc-800/50" : ""
                      }
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          className="z-0"
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontWeight: "bold", minWidth: 200 }}
                      >
                        {row.title}
                      </TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">{sp(row.price)}</TableCell>
                      <TableCell align="center">{row.discount}</TableCell>
                      <TableCell align="center">
                        {row.available ? (
                          <CheckCircleIcon className="text-green-400" />
                        ) : (
                          <NoSymbolIcon className="text-red-400" />
                        )}
                      </TableCell>
                      <TableCell>
                        {row.images.length ? (
                          <Image
                            src={row.images[0]}
                            width={50}
                            height={50}
                            alt="first image product"
                          />
                        ) : (
                          <LogoType className="w-10 h-10" />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={8}>
                    <div className="w-full flex flex-col items-center justify-center p-4">
                      <h1 className="font-bold text-2xl text-orange-300">
                        محصولی ثبت نشده است.
                      </h1>
                      <NoData className="w-96 h-72" />
                    </div>
                  </TableCell>
                </TableRow>
              )}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage={"تعداد محصول در هر صفحه"}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
