import React, { useState } from "react";

const glossaryData = {

  Physics: [
    { tamil: "ஓட்டம்", english: "Velocity", definition: "The speed of something in a given direction." },
    { tamil: "சுத்திகரிப்பு", english: "Purification", definition: "The process of removing impurities." },
    { tamil: "வேகம்", english: "Speed", definition: "The rate at which an object moves." },
    { tamil: "அதிர்வெண்", english: "Frequency", definition: "The number of occurrences of a repeating event per unit of time." },
    { tamil: "அதிர்வு", english: "Vibration", definition: "A rapid back-and-forth motion." },
    { tamil: "தூக்கம்", english: "Inertia", definition: "The resistance of any physical object to a change in its state of motion." },
    { tamil: "பரிமாணம்", english: "Dimension", definition: "A measurable extent of some kind, such as length, breadth, depth, or height." },
    { tamil: "அமைதி", english: "Equilibrium", definition: "A state in which opposing forces are balanced." },
    { tamil: "சக்தி", english: "Energy", definition: "The capacity to do work or produce change." },
    { tamil: "பரிமாற்றம்", english: "Transfer", definition: "The movement of energy or matter from one place to another." },
    { tamil: "மின்னோட்டம்", english: "Electric Current", definition: "The flow of electric charge through a conductor." },
    { tamil: "தாங்கிய இயக்கம்", english: "Uniform Motion", definition: "Motion at a constant speed in a straight line." },
    { tamil: "சுழற்சி இயக்கம்", english: "Rotational Motion", definition: "Motion around a central point or axis." }
  ],
  Chemistry: [
    { tamil: "அணு", english: "Atom", definition: "The basic unit of a chemical element." },
    { tamil: "அமைப்பு", english: "Compound", definition: "A substance made of two or more different elements." },
    { tamil: "அமிலம்", english: "Acid", definition: "A substance that donates hydrogen ions and has a pH less than 7." },
    { tamil: "காரம்", english: "Base", definition: "A substance that accepts hydrogen ions and has a pH more than 7." },
    { tamil: "நீராவியாக்கம்", english: "Evaporation", definition: "The process by which liquid turns into vapor." },
    { tamil: "உயிரணுக்கள்", english: "Organic Compounds", definition: "Chemical compounds containing carbon, found in living things." },
    { tamil: "வளிமம்", english: "Gas", definition: "A state of matter without a fixed shape or volume." },
    { tamil: "திடம்", english: "Solid", definition: "A state of matter characterized by particles arranged in a fixed structure." },
    { tamil: "திரவம்", english: "Liquid", definition: "A state of matter that flows and takes the shape of its container." },
    { tamil: "வாயுவியக்கூறு", english: "Molecule", definition: "Two or more atoms bonded together." },
    { tamil: "உயிரி வேதியல்", english: "Biochemistry", definition: "The branch of science concerned with the chemical processes within living organisms." },
    { tamil: "வினைவேகம்", english: "Reaction Rate", definition: "The speed at which a chemical reaction occurs." },
    { tamil: "மூலக்கூறு", english: "Element", definition: "A substance that cannot be broken down into simpler substances by chemical means." },
    { tamil: "பொருள்", english: "Matter", definition: "Anything that has mass and takes up space." },
    { tamil: "சோதனை", english: "Experiment", definition: "A scientific test to discover or prove something." }
  ],
  
  Biology: [
    { tamil: "கஜ்ஜை", english: "Cell", definition: "The smallest structural unit of an organism." },
    { tamil: "மரபணு", english: "Gene", definition: "A unit of heredity which is transferred from a parent to offspring." },
    { tamil: "நியூக்ளியஸ்", english: "Nucleus", definition: "The central and most important part of a cell, containing DNA." },
    { tamil: "மிலைவி", english: "Mitochondria", definition: "Organelles that generate most of the chemical energy needed by the cell." },
    { tamil: "நரம்பு", english: "Neuron", definition: "A nerve cell that transmits nerve impulses." },
    { tamil: "இயல்பாக்கம்", english: "Mutation", definition: "A change in the DNA sequence of an organism." },
    { tamil: "உடல் அமைப்பு", english: "Anatomy", definition: "The branch of science concerned with the bodily structure of humans, animals, and other organisms." },
    { tamil: "உயிரியல்", english: "Biology", definition: "The study of living organisms, divided into many specialized fields." },
    { tamil: "உயிரின் வளரும் விதி", english: "Growth", definition: "The process of increasing in physical size." },
    { tamil: "சகமடக்கம்", english: "Photosynthesis", definition: "The process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water." },
    { tamil: "சுவாசம்", english: "Respiration", definition: "The process in living organisms of taking in oxygen and releasing carbon dioxide." },
    { tamil: "தொற்றுநோய்", english: "Infection", definition: "The invasion and multiplication of microorganisms in body tissues." },
    { tamil: "மனித உடல்", english: "Human Body", definition: "The entire structure of a human being, including the head, neck, trunk, arms, and legs." },
    { tamil: "எலும்பு", english: "Bone", definition: "Rigid organs that form part of the endoskeleton of vertebrates." }
  ],
  
  Mathematics: [
    { tamil: "கோணம்", english: "Angle", definition: "The space between two intersecting lines at the point where they meet." },
    { tamil: "மடங்கு", english: "Multiple", definition: "The product of a number and an integer." },
    { tamil: "மூலெண்", english: "Prime Number", definition: "A natural number greater than 1 that has no positive divisors other than 1 and itself." },
    { tamil: "இணை எண்", english: "Even Number", definition: "A number that is divisible by 2 without a remainder." },
    { tamil: "ஒற்றை எண்", english: "Odd Number", definition: "A number that is not divisible by 2." },
    { tamil: "விகிதம்", english: "Ratio", definition: "A relationship between two numbers showing how many times one value contains another." },
    { tamil: "சதவீதம்", english: "Percentage", definition: "A proportion per hundred." },
    { tamil: "மைய மதிப்பு", english: "Mean", definition: "The average value of a set of numbers." },
    { tamil: "நடுத்தர மதிப்பு", english: "Median", definition: "The middle value in a list of numbers." },
    { tamil: "அடிப்படை", english: "Base", definition: "The number that is raised to a power in exponential notation." },
    { tamil: "மேலெழுத்து", english: "Exponent", definition: "A number that represents how many times the base is multiplied by itself." },
    { tamil: "விகிதாசாரம்", english: "Proportion", definition: "An equation stating that two ratios are equal." }
  ]
  
};

export default function App() {
  const [category, setCategory] = useState("Physics");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryData[category].filter(term =>
    term.tamil.includes(searchTerm) ||
    term.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
  <h1>Tamil Scientific Glossary</h1>

  <div className="tabs">
    {Object.keys(glossaryData).map((key) => (
      <button
        key={key}
        onClick={() => setCategory(key)}
        className={`tab-button ${key === category ? "active" : ""}`}
      >
        {key}
      </button>
    ))}
  </div>

  <input
    type="text"
    placeholder="Search in Tamil or English..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-box"
  />

  <div className="card-grid">
    {filteredTerms.map((term, index) => (
      <div key={index} className="card">
        <h3>{term.tamil} / {term.english}</h3>
        <p>{term.definition}</p>
      </div>
    ))}
  </div>
</div>
  );
}
