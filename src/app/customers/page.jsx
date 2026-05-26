"use client";

import DataTable from "@/components/DataTable";
import { customers } from "@/lib/mockData";

export default function CustomersPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Customers</h1>
        <p className="text-sm text-muted mt-1">
          {customers.length} customers. Click a column header to sort.
        </p>
      </div>

      <DataTable rows={customers} />
    </div>
  );
}
