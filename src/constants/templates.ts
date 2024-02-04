import Template from "../shared/types/template";

const defaultTemplate: Template = {
  name: {
    fontWeight: "600",
    fontSize: "14px",
  },
  details: {
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    marginBottom: "10px",
    justifyContent: "space-between",
    fontSize: "11px",
    display: "flex",
    flexWrap: "wrap",
  },
  about: {
    fontSize: "12px",
  },
};

export default { defaultTemplate };
