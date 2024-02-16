import Template from "../shared/types/template";

function getDefaultTemplate(fontSize: number, themeColor: string): Template {
  const primarySize = fontSize + 1;
  const secondarySize = fontSize - 1;
  const tertiarySize = fontSize;

  return {
    page: {
      padding: "16px",
      fontFamily: "Open Sans",
    },
    nameblock: {},
    fullName: {
      fontSize: primarySize + 1,
      lineHeight: "1.55",
      color: "black",
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
    designation: {
      color: "black",
      fontSize: tertiarySize,
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
      fontSize: secondarySize,
      lineHeight: "2",
      color: "black",
    },
    aboutTitle: {
      fontSize: primarySize,
      color: themeColor,
      lineHeight: "1.55",
      fontWeight: "600",
    },
    about: {
      fontSize: tertiarySize,
      lineHeight: "1.55",
      color: "black",
    },
    formBlocks: {
      marginTop: 16,
    },
    formBlockTitle: {
      fontSize: primarySize,
      color: themeColor,
      lineHeight: "1.55",
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
    entry: {
      marginTop: "8px",
    },
    entryTitle: {
      fontSize: tertiarySize,
      lineHeight: "1.55",
      fontFamily: "Open Sans",
      fontWeight: "600",
      color: "black",
    },
    entrySubTitle: {
      fontSize: tertiarySize,
      lineHeight: "1.55",
      fontWeight: "600",
      color: "black",
    },
    entrySubTitle2: {
      fontSize: secondarySize,
      lineHeight: "1.55",
      fontWeight: "600",
      color: "black",
    },
    summary: {
      fontSize: tertiarySize,
      lineHeight: "1.55",
      color: "black",
    },
  };
}

export default getDefaultTemplate;
