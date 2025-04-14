// import React, { useState } from "react";
// import "./App.css"; // If you're using Tailwind, ensure Tailwind is configured

// const glossaryData = {
//   Physics: [
//     { tamil: "ஓட்டம்", english: "Velocity", definition: "The speed of something in a given direction." },
//     { tamil: "சுத்திகரிப்பு", english: "Purification", definition: "The process of removing impurities." },
//     { tamil: "ஊக்கம்", english: "Momentum", definition: "The quantity of motion an object has." },
//     { tamil: "திரைவு", english: "Acceleration", definition: "The rate of change of velocity of an object." },
//     { tamil: "அதிர்வெண்", english: "Frequency", definition: "The number of occurrences of a repeating event per unit time." }
//   ],
//   Chemistry: [
//     { tamil: "அணு", english: "Atom", definition: "The basic unit of a chemical element." },
//     { tamil: "அமைப்பு", english: "Compound", definition: "A substance made of two or more different elements." },
//     { tamil: "இயக்கவியல்", english: "Kinetics", definition: "The study of the rate of chemical reactions." },
//     { tamil: "படிகம்", english: "Crystal", definition: "A solid material whose atoms are arranged in a highly ordered structure." },
//     { tamil: "திறனாய்வு", english: "Analysis", definition: "The process of identifying the components of a chemical compound." }
//   ],
//   Biology: [
//     { tamil: "கஜ்ஜை", english: "Cell", definition: "The smallest structural unit of an organism." },
//     { tamil: "மரபணு", english: "Gene", definition: "A unit of heredity which is transferred from a parent to offspring." },
//     { tamil: "இனப்பெருக்கம்", english: "Reproduction", definition: "The process of producing offspring." },
//     { tamil: "மண்டலம்", english: "Organ", definition: "A part of an organism that is typically self-contained and has a specific function." },
//     { tamil: "மூலக்கூறு", english: "Molecule", definition: "A group of atoms bonded together." }
//   ],
//   Mathematics: [
//     { tamil: "கோணம்", english: "Angle", definition: "The space between two intersecting lines at the point where they meet." },
//     { tamil: "மடங்கு", english: "Multiple", definition: "The product of a number and an integer." },
//     { tamil: "விகிதம்", english: "Ratio", definition: "A relationship between two numbers showing how many times the first value contains the second." },
//     { tamil: "விகிதாசாரம்", english: "Proportion", definition: "An equation that states that two ratios are equal." },
//     { tamil: "வரிசை", english: "Sequence", definition: "An ordered list of numbers that follow a particular pattern." }
//   ]
// };

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredGlossary = glossaryData.filter((term) => {
//     const matchesCategory =
//       selectedCategory === "All" || term.category === selectedCategory;
//     const matchesSearch =
//       term.tamil_term.includes(searchTerm) ||
//       term.english_term.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="p-4 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Tamil Scientific Glossary
//       </h1>

//       <input
//         type="text"
//         placeholder="Search by Tamil or English term..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full mb-6 p-2 border border-gray-300 rounded-md"
//       />

//       <div className="flex gap-2 mb-6 flex-wrap justify-center">
//         {["All", "Physics", "Chemistry", "Biology", "Mathematics"].map(
//           (cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full border ${
//                 selectedCategory === cat
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-blue-600 border-blue-600"
//               }`}
//             >
//               {cat}
//             </button>
//           )
//         )}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredGlossary.map((item, index) => (
//           <div
//             key={index}
//             className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold mb-2">
//               {item.tamil_term} / {item.english_term}
//             </h2>
//             <p className="text-gray-800 mb-1">
//               <strong>Tamil:</strong> {item.definition_tamil}
//             </p>
//             <p className="text-gray-600">
//               <strong>English:</strong> {item.definition_english}
//             </p>
//             <div className="text-sm text-blue-500 mt-2">
//               Category: {item.category}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
