import { InvestmentFragment } from "@/portal/api";
import { toMonthName } from "@/utils/date";
import { formatMoney } from "@/utils/money";

import Button from "./UI/button";

interface InvestmentListProps {
  investments: InvestmentFragment[];
}

export const InvestmentList = ({ investments }: InvestmentListProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
      {investments.map((investment) => (
        <div
          key={investment.id}
          className="bg-white dark:dark:bg-gray-800 rounded-lg block shadow-sm p-6"
        >
          <h5 className="font-semibold">
            {toMonthName(investment.month)} de {investment.year}
          </h5>
          <p className="mb-4">Total: {formatMoney(investment.total)}</p>
          <Button>Detalhes</Button>
        </div>
      ))}
    </div>
  );
};
