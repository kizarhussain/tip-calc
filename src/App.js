export default function App() {
  return (
    <div className="container mx-auto mt-32 h-[33rem] w-3/4 items-center justify-center gap-16 rounded-lg bg-teal-50 shadow-xl sm:space-y-10 lg:flex">
      <TipCalc />
      <Output />
      <Reset />
    </div>
  );
}

function TipCalc() {
  return (
    <div className="sm:px-10 sm:pt-3 md:px-3">
      <label className="mb-2 inline-block text-lg text-slate-400">Bill</label>
      <input
        className="mb-8 w-full rounded-md border border-slate-300 bg-slate-100 py-3 shadow-sm focus:outline-teal-300"
        type="text"
      />

      <label className="mb-5 inline-block text-lg text-slate-400">
        Select Tip %
      </label>
      <div className="grid-row-2 grid sm:grid-cols-2 sm:gap-y-4 md:grid-cols-3 lg:gap-x-2">
        <button className="h-12 w-44 rounded bg-teal-800 text-xl font-semibold text-white hover:bg-teal-100 hover:text-teal-950 focus:outline-teal-300">
          5%
        </button>
        <button className="h-12 w-44 rounded bg-teal-800 text-xl font-semibold text-white hover:bg-teal-100 hover:text-teal-950 focus:outline-teal-300">
          10%
        </button>
        <button className="h-12 w-44 rounded bg-teal-800 text-xl font-semibold text-white hover:bg-teal-100 hover:text-teal-950 focus:outline-teal-300">
          15%
        </button>
        <button className="h-12 w-44 rounded bg-teal-800 text-xl font-semibold text-white hover:bg-teal-300 focus:outline-teal-300">
          25%
        </button>
        <button className="h-12 w-44 rounded bg-teal-800 text-xl font-semibold text-white hover:bg-teal-100 hover:text-teal-950 focus:outline-teal-300">
          50%
        </button>
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
        className="w-full rounded-md border border-slate-300 bg-slate-100 py-3 shadow-sm focus:outline-teal-300"
      />
    </div>
  );
}

function Output() {
  return (
    <div class="rounded-lg bg-teal-800 sm:flex sm:flex-col sm:items-center sm:justify-center sm:px-2 sm:py-8 lg:px-11 lg:py-14">
      <div className="flex space-x-32 pb-16">
        <span className="text-lg text-white">
          Tip Amount
          <p className="text-sm text-gray-400"> / person</p>
        </span>
        <h3 className="text-4xl font-medium text-teal-300">₹4.27</h3>
      </div>

      <div className="flex space-x-40">
        <span className="text-lg text-white">
          Total
          <p className="text-sm text-gray-400"> / person</p>
        </span>
        <h3 className="text-4xl font-medium text-teal-300">₹32.79</h3>
      </div>
      <button className="ml-2 mt-36 h-11 w-72 rounded-md bg-teal-300 px-1 py-1 tracking-wider text-black hover:bg-teal-100 hover:text-teal-950 focus:outline-teal-300">
        RESET
      </button>
    </div>
  );
}

function Reset() {
  return <>{/* <button>Reset</button> */}</>;
}
