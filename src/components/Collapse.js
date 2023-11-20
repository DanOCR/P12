import { useState } from "react";
import "./Collapse.css";
import "../responsive/Collapse-mobile.css";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapse">
      <button>
        {props.label}
        <img
          onClick={toggle}
          src={`${
            open
              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB1SURBVHgBrdMBCoAgDIXhHcmbdYSOUjfoSB7BI6xFCRJO594GgyD4fhEkMg4zJ9kim59vipwGr1PCIh08LjLA8YiCH7InHNHw5r8/MsOhiBV3RVbxpYgXN0VQfBrh9+lD+ChCv9O7cSWS6xVdsjsFjVjbZ6YbZ4QAYCUIZTcAAAAASUVORK5CYII="
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB1SURBVHgBrZHRDYAgDEQ7CiM6gps4iiMwAiMwwlkiH2gUWo5L7ovceyEVAJs2a6M2CJnC0J64swueSYykwlPDy9LYKMkHvCT+PbgkQwYjMW9nJO6NZzD9a8sQ7N16ABpukPDwgWQN3CDh4R3JOvhLctQG6+4Cz+47UQZw4KcAAAAASUVORK5CYII="
          }`}
        />
      </button>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
};
export default Collapse;
