import { useEffect, useState } from "react";
import { VIEWTYPE } from "../Types/type-general";
import "./postSelectorType.css";
import Layout from "../Layout/layout";
import { useNavigate } from "react-router-dom";

const PostSelectorType = ({ typeView }: { typeView: VIEWTYPE }) => {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState(typeView);

  const selectOption = (value: VIEWTYPE) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    selectedValue === VIEWTYPE.ALL ? navigate("/all") : navigate("/my-favs");
  }, [selectedValue]);

  return (
    <Layout>
      <div
        className="d-flex d-flex--space-between"
        style={{ width: "14rem", height: "2rem" }}
      >
        <button
          className={`toggle-option ${
            selectedValue === VIEWTYPE.ALL ? "active" : ""
          }`}
          onClick={() => selectOption(VIEWTYPE.ALL)}
        >
          All
        </button>
        <button
          className={`toggle-option ${
            selectedValue === VIEWTYPE.MY_FAVS ? "active" : ""
          }`}
          onClick={() => selectOption(VIEWTYPE.MY_FAVS)}
        >
          My Favs
        </button>
      </div>
    </Layout>
  );
};

export default PostSelectorType;
