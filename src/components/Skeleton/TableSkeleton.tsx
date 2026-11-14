import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

interface TableSkeletonProps {
  linesCount?: number;
  coloumnCount?: number;
  action?: boolean;
}
const TableSkeleton: FC<TableSkeletonProps> = (props) => {
  const { linesCount, coloumnCount, action } = props;
  return (
    <>
      {Array.from({ length: linesCount ?? 5 }).map((_, index) => (
        <tr>
          {Array.from({ length: coloumnCount ?? 5 }).map((_, index) => (
            <td className="p-2">
              <Skeleton width={index === 0 ? 30 : 100} height="20px" />
            </td>
          ))}
          {action && (
            <td className="p-2">
              <Skeleton height="20px" width="15px" circle />
            </td>
          )}
        </tr>
      ))}
    </>
  );
};

export default TableSkeleton;
