import Select from "react-select";
import { TechologyOptionType } from "../../Models/filters-model";
import { useContext, useState } from "react";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

interface TechFilterProps {
  setTechnologyType: (value: string) => void;
}

function TechFilter() {
  const { setTechnologyType } = useContext(HackerNewsContext);

  // Selector options
  const technologyTypes: TechologyOptionType[] = [
    { value: "", label: "Any", icon: "" },
    {
      value: "angular",
      label: "Angular",
      icon: "/assets/angular-logo.png",
    },
    {
      value: "reactjs",
      label: "ReactJs",
      icon: "/assets/react-logo.png",
    },
    { value: "vuejs", label: "VueJs", icon: "/assets/vue-logo.png" },
  ];

  // Select state
  const [selectedTechType, setSelectedTechType] = useState<TechologyOptionType>(
    technologyTypes[0]
  );

  // Handlers
  const handleSelectChange = (selectedOption: TechologyOptionType | null) => {
    if (selectedOption) {
      setSelectedTechType(selectedOption);
      setTechnologyType(selectedOption.value);
    }
  };

  const formatOptionLabel = ({ label, icon }: TechologyOptionType) => (
    <div className="flex align-middle">
      {icon && <img src={icon} alt={label} height="20" className="mr-1" />}
      {label}
    </div>
  );

  // Render
  return (
    <div className="mb-4">
      <label>Technology Type</label>
      <Select
        value={selectedTechType}
        onChange={handleSelectChange}
        options={technologyTypes}
        formatOptionLabel={formatOptionLabel}
        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
}

export default TechFilter;
