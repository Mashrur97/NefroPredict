import React, { useState } from "react";
import doctors from "../../public/doctors.json"; 

const DoctorSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = doctors.filter((doc) =>
      doc.address.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSearched(true);
  };

  return (
    <section className="p-6 bg-black text-white pt-20">
      <div className="flex justify-center">
        <img className="lg:w-1/3" src="kidney.gif" alt="" srcset="" />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400 drop-shadow-[0_0_10px_#60a5fa]">
       Find Kidney Specialists by Area (Only inside Dhaka)
      </h1>

        <form className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter location (e.g., Shahbag, Dhanmondi)"
          className="bg-gray-800 text-white px-4 py-2 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} class="relative rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative">Search</span>
        </button>
      </form>

      {!searched && <></>}

      {searched && results.length === 0 && (
        <p className="text-red-400 text-center text-2xl mt-5">
          No doctors found for that address.
        </p>
      )}

      {searched && results.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {results.map((doc, idx) => (
            <div
              key={idx}
              className="bg-blue-800/20 border border-blue-500/20 p-4 rounded-xl shadow hover:shadow-blue-400/30"
            >
              <img
                src={doc.photo}
                alt={doc.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-blue-400"
              />
              <h3 className="text-xl font-semibold text-blue-200 text-center">
                {doc.name}
              </h3>
              <p className="text-sm text-white/80 mt-1 text-center">
                {doc.specialty}
              </p>
              <p className="text-sm text-white/70 mt-1 text-center">
                {doc.workplace}
              </p>
              <p className="text-sm text-white/60 mt-1 text-center">
                Chamber addrtess: {doc.address}
              </p>
              {doc.number && (
                <p className="mt-1 text-blue-300 text-center">
                  📞 {doc.number}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DoctorSearch;
