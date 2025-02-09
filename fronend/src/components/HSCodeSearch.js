import React, { useState } from "react";

const HSCodeSearch = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Mock HS Code data
  const hscodes = [
    { code: "23040030", description: "Soybean meal, hipro" },
    { code: "10019000", description: "Wheat and meslin" },
    { code: "12010090", description: "Soya beans, whether or not broken" },
    { code: "15071000", description: "Crude soybean oil" },
    { code: "17019900", description: "Cane or beet sugar, raw" },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter HS Codes based on search term
    if (term) {
      const filtered = hscodes.filter(
        (item) =>
          item.code.includes(term) ||
          item.description.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  // Handle selection of an HS Code
  const handleSelect = (code) => {
    setSearchTerm(code);
    setResults([]);
    onSelect(code); // Pass the selected HS Code to the parent component
  };

  return (
    <div className="hs-code-search">
      <label htmlFor="hsCode">HS Code:</label>
      <input
        type="text"
        id="hsCode"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for HS Code"
        required
      />

      {/* Display search results */}
      {results.length > 0 && (
        <ul className="hs-code-results">
          {results.map((item) => (
            <li key={item.code} onClick={() => handleSelect(item.code)}>
              <strong>{item.code}</strong> - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HSCodeSearch;