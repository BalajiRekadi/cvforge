import Template from "../shared/types/template";

const defaultTemplate: Template = {
  page: {
    padding: "16px",
    fontFamily: "Open Sans",
  },
  nameblock: {
    fontSize: "14px",
  },
  fullName: {
    lineHeight: "1.55",
    color: "black",
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  designation: {
    color: "black",
    fontSize: "12px",
    lineHeight: "1.55",
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    marginBottom: "10px",
    justifyContent: "space-between",
    display: "flex",
  },
  detailsItem: {
    fontSize: "11px",
    lineHeight: "2",
    color: "darkslategrey",
  },
  aboutTitle: {
    fontSize: "12px",
    color: "blueviolet",
    lineHeight: "1.55",
    fontWeight: "600",
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
    fontSize: "12px",
    color: "blueviolet",
    lineHeight: "1.55",
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  entry: {
    marginTop: "8px",
  },
  entryTitle: {
    fontSize: "12px",
    lineHeight: "1.55",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "black",
  },
  entrySubTitle: {
    fontSize: "10px",
    lineHeight: "1.55",
    fontWeight: "600",
    color: "black",
  },
  entrySubTitle2: {
    fontSize: "10px",
    lineHeight: "1.55",
    fontWeight: "600",
    color: "darkslategrey",
  },
  summary: {
    fontSize: "12px",
    lineHeight: "1.55",
    color: "darkslategrey",
  },
};

export default { defaultTemplate };
