import React from "react";
import { TokenPresenter } from "@/app/components";
import type { TokenValue } from "../Tokens/type";

export type DataProps = {
  data: TokenValue;
  category: string;
};

export const Table = ({ data, category }: DataProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-neutral-300 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Value</th>
            <th className="p-3 text-left">Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([name, value]) => (
            <tr key={name} className="odd:bg-gray-100 even:bg-gray-50">
              <td className="p-3 border-t border-gray-300">{name}</td>
              <td className="p-3 border-t border-gray-300">{value}</td>
              <td className="p-3 border-t border-gray-300">
                <TokenPresenter token={value} category={category} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
