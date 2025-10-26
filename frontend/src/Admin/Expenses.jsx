import React from 'react';

const mockExpenses = [
  { id: 1, category: 'Staff Salaries', amount: 5000, date: '2025-10-01' },
  { id: 2, category: 'Utilities', amount: 800, date: '2025-10-03' },
  { id: 3, category: 'Supplies', amount: 400, date: '2025-10-05' },
  { id: 4, category: 'Maintenance', amount: 1200, date: '2025-10-07' },
];

const Expenses = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Expenses</h2>
      <p className="text-sm text-gray-600">Track hotel expenses by category and date.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left: Expenses List */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Expenses List</h3>
          <ul className="space-y-2">
            {mockExpenses.map((expense) => (
              <li key={expense.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="font-medium">{expense.category}</span> - ${expense.amount} ({expense.date})
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Add/Edit Form */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Add / Edit Expense</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Category</label>
              <input
                type="text"
                placeholder="Enter expense category"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Amount ($)</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
