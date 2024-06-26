import { useState } from 'react';

function Button({ children }) {
  return (
    <button className="ml-2 mt-36 h-11 w-72 rounded-md bg-teal-300 px-1 py-1 tracking-wider text-black hover:bg-teal-100 hover:text-teal-950 focus:outline-teal-300">
      {children}
    </button>
  );
}

export default function App() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(null);
  const [persons, setPersons] = useState('');

  function handleReset() {
    setBill('');
    setTipPercent(null);
    setPersons('');
  }

  return (
    <div className="container mx-auto mt-32 h-[33rem] w-3/4 items-center justify-center gap-16 rounded-lg bg-teal-50 shadow-xl sm:space-y-10 lg:flex">
      <TipCalc
        bill={bill}
        onSetBill={setBill}
        tipPercent={tipPercent}
        onSetTipPercent={setTipPercent}
        persons={persons}
        onSetPersons={setPersons}
      />
      <Output
        bill={bill}
        tipPercent={tipPercent}
        persons={persons}
        onReset={handleReset}
      />
      <Reset />
    </div>
  );
}

function TipCalc({
  bill,
  onSetBill,
  tipPercent,
  onSetTipPercent,
  persons,
  onSetPersons,
}) {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div className="sm:px-10 sm:pt-3 md:px-3">
      <label className="mb-2 inline-block text-lg text-slate-400">Bill</label>
      <input
        className="mb-8 w-full rounded-md border border-slate-300 bg-slate-100 py-3 shadow-sm focus:outline-teal-300"
        type="text"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />

      <label className="mb-5 inline-block text-lg text-slate-400">
        Select Tip %
      </label>
      <div className="grid-row-2 grid sm:grid-cols-2 sm:gap-y-4 md:grid-cols-3 lg:gap-x-2">
        {tipPercentages.map((percentage) => (
          <button
            className={`h-12 w-44 rounded text-xl font-semibold text-white ${
              tipPercent === percentage
                ? 'bg-teal-100 text-teal-950'
                : 'bg-teal-800 hover:bg-teal-100 hover:text-teal-950'
            } focus:outline-teal-300`}
            key={percentage}
            onClick={() => onSetTipPercent(percentage)}
          >
            {percentage}%
          </button>
        ))}
        <input
          className="mb-8 h-12 w-44 rounded-md border border-slate-300 bg-slate-100 p-5 text-xl placeholder:text-center focus:outline-teal-300"
          type="text"
          placeholder="Custom"
        />
      </div>

      <label className="mb-2 mt-4 inline-block text-lg text-slate-400">
        Number of People
      </label>
      <input
        type="text"
        value={persons}
        className="w-full rounded-md border border-slate-300 bg-slate-100 py-3 shadow-sm focus:outline-teal-300"
        onChange={(e) => onSetPersons(+e.target.value)}
      />
    </div>
  );
}

function Output({ bill, tipPercent, persons, onReset }) {
  const tipAmountPerPerson = (bill * tipPercent) / 100 / persons;
  const totalAmountPerPerson = bill / persons + tipAmountPerPerson; // including tipAmount

  if (typeof persons !== 'number' || persons <= 0) persons = 1;

  return (
    <div className="rounded-lg bg-teal-800 sm:flex sm:flex-col sm:items-center sm:justify-center sm:px-2 sm:py-8 lg:px-11 lg:py-14">
      <div className="flex space-x-32 pb-16">
        <span className="text-lg text-white">
          Tip Amount
          <p className="text-sm text-gray-400"> / person</p>
        </span>
        <h3 className="text-4xl font-medium text-teal-300">
          {isNaN(tipAmountPerPerson) || !isFinite(tipAmountPerPerson)
            ? '₹00.00'
            : `₹${tipAmountPerPerson.toFixed(2)}`}
        </h3>
      </div>

      <div className="flex space-x-40">
        <span className="text-lg text-white">
          Total
          <p className="text-sm text-gray-400"> / person</p>
        </span>
        <h3 className="text-4xl font-medium text-teal-300">
          {isNaN(totalAmountPerPerson) || !isFinite(totalAmountPerPerson)
            ? '₹00.00'
            : `₹${totalAmountPerPerson.toFixed(2)}`}
        </h3>
      </div>
      <Button>RESET</Button>
    </div>
  );
}

function Reset() {
  return <></>;
}
