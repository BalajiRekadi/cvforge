import Template from "../shared/types/template";

const defaultTemplate: Template = {
  nameblock: {
    fontWeight: "600",
    fontSize: "14px",
  },
  designation: {
    fontSize: "12px",
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
  aboutTitle: {
    fontWeight: "600",
    fontSize: "12px",
  },
  about: {
    fontSize: "12px",
  },
};

export default { defaultTemplate };
