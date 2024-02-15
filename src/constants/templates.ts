import Template from "../shared/types/template";

function getDefaultTemplate(fontSize: string, themeColor: string): Template {
  return {
    page: {
      padding: "16px",
      fontFamily: "Open Sans",
    },
    nameblock: {
      fontSize: fontSize,
    },
    fullName: {
      lineHeight: "1.55",
      color: "black",
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
    designation: {
      color: "black",
      fontSize: fontSize,
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
      fontSize: fontSize,
      lineHeight: "2",
      color: "black",
    },
    aboutTitle: {
      fontSize: fontSize,
      color: themeColor,
      lineHeight: "1.55",
      fontWeight: "600",
    },
    about: {
      fontSize: fontSize,
      lineHeight: "1.55",
      color: "black",
    },
    formBlocks: {
      marginTop: "10px",
    },
    formBlockTitle: {
      fontSize: fontSize,
      color: themeColor,
      lineHeight: "1.55",
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
    entry: {
      marginTop: "8px",
    },
    entryTitle: {
      fontSize: fontSize,
      lineHeight: "1.55",
      fontFamily: "Open Sans",
      fontWeight: "600",
      color: "black",
    },
    entrySubTitle: {
      fontSize: fontSize,
      lineHeight: "1.55",
      fontWeight: "600",
      color: "black",
    },
    entrySubTitle2: {
      fontSize: fontSize,
      lineHeight: "1.55",
      fontWeight: "600",
      color: "black",
    },
    summary: {
      fontSize: fontSize,
      lineHeight: "1.55",
      color: "black",
    },
  };
}

export default getDefaultTemplate;
