import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import templates from "../../../constants/templates";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
});

// Create Document Component
const MyDocument = () => {
  const selectedTemplate = templates.defaultTemplate;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={selectedTemplate.nameblock}>
          <Text>Balaji Rekadi</Text>
          <Text style={selectedTemplate.designation}>Software Developer</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
