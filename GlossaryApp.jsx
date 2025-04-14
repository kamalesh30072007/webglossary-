import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const glossaryData = [
  {
    tamil_term: "அதிகரிப்பு",
    english_term: "Acceleration",
    definition_tamil: "வேகத்தின் மாற்றம் நேரத்தில் நிகழும் அளவு.",
    definition_english: "The rate of change of velocity with time.",
    category: "Physics",
  },
  {
    tamil_term: "மூலக்கூறு",
    english_term: "Molecule",
    definition_tamil: "இரண்டு அல்லது அதற்கும் மேற்பட்ட அணுக்களின் சேர்க்கை.",
    definition_english: "A group of atoms bonded together.",
    category: "Chemistry",
  },
  {
    tamil_term: "உயிரணு",
    english_term: "Cell",
    definition_tamil: "உயிரினத்தின் அடிப்படை கட்டமைப்பு அலகு.",
    definition_english: "The basic structural unit of a living organism.",
    category: "Biology",
  },
  {
    tamil_term: "இடைநிலை",
    english_term: "Median",
    definition_tamil: "தரவுத் தொகுப்பில் மையமான மதிப்பு.",
    definition_english: "The middle value in a data set.",
    category: "Mathematics",
  },
];

export default function GlossaryApp() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = glossaryData.filter((term) => {
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    const matchesSearch =
      term.tamil_term.includes(searchTerm) ||
      term.english_term.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Tamil Scientific Glossary
      </h1>
      <Input
        placeholder="Search by Tamil or English term..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
        <TabsList className="flex justify-center gap-2 flex-wrap">
          {['All', 'Physics', 'Chemistry', 'Biology', 'Mathematics'].map((cat) => (
            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGlossary.map((item, index) => (
          <Card key={index} className="rounded-2xl shadow-md p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-1">{item.tamil_term} / {item.english_term}</h2>
              <p className="text-sm text-gray-700 mb-1"><strong>Tamil:</strong> {item.definition_tamil}</p>
              <p className="text-sm text-gray-600"><strong>English:</strong> {item.definition_english}</p>
              <span className="text-xs text-blue-600 mt-2 inline-block">Category: {item.category}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
