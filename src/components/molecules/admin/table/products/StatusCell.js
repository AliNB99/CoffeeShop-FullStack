import { CheckCircleIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

const productStatusStyleMap = {
  available: {
    color: "green-500",
    icon: <CheckCircleIcon />,
  },
  unavailable: {
    color: "red-500",
    icon: <NoSymbolIcon />,
  },
};

function StatusCell({
  cell: {
    row: { original },
  },
}) {
  return (
    <div
      className={`text-${
        productStatusStyleMap[original.status].color
      } flex items-center justify-center`}
    >
      {productStatusStyleMap[original.status].icon}
    </div>
  );
}

export default StatusCell;
