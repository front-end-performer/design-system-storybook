import React, { PropsWithChildren } from "react";
import { TokenPresenter } from "@/app/components";
import type { TokenValue } from "../Tokens/type";

type DefaultType = PropsWithChildren<{
  tokens: TokenValue[];
  category: string;
}>;

export const Table: React.FC<DefaultType> = ({ tokens, category }) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table
        className="min-w-full bg-white border border-gray-200"
        style={{ margin: 0 }}
      >
        <thead className="bg-blue-600 text-white">
          <tr className="bg-neutral-300 text-white">
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Value
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Preview
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {tokens.map((token, index: number) => (
            <tr
              key={token.name}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {token.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {token.value}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                <TokenPresenter token={token.value} category={category} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
