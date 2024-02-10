import Template from "../shared/types/template";

const defaultTemplate: Template = {
  page: {
    color: "darkslategrey",
    padding: "16px",
  },
  nameblock: {
    fontSize: "14px",
  },
  fullName: {
    lineHeight: "1.55",
    color: "black",
  },
  designation: {
    // // fontWeight: 600,
    fontSize: "12px",
    lineHeight: "1.55",
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    marginBottom: "10px",
    justifyContent: "space-between",
    fontSize: "11px",
    display: "flex",
    lineHeight: "1.55",
  },
  aboutTitle: {
    // fontWeight: 600,
    fontSize: "12px",
    color: "blueviolet",
    lineHeight: "1.55",
  },
  about: {
    fontSize: "12px",
    lineHeight: "1.55",
    color: "darkslategrey",
  },
  formBlocks: {
    marginTop: "10px",
  },
  formBlockTitle: {
    // fontWeight: 600,
    fontSize: "12px",
    color: "blueviolet",
    lineHeight: "1.55",
  },
  entries: {},
  entry: {
    marginTop: "8px",
    // flexDirection: "row",
    // display: "flex",
  },
  entryItem: {
    fontSize: "12px",
    lineHeight: "1.55",
    // flexGrow: "1",
  },
  entryTitle: {
    // fontFamily: "Open Sans",
    // fontWeight: 600,
    lineHeight: "1.55",
    color: "black",
  },
  entrySubTitle: {
    // fontWeight: 600,
    lineHeight: "1.55",
    fontSize: "10px",
  },
  entrySubTitle2: {
    lineHeight: "1.55",
    fontSize: "10px",
  },
  summary: {
    lineHeight: "1.55",
  },
};

export default { defaultTemplate };
