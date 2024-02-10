import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import templates from "../../../constants/templates";
import { DefaultFormBlock, FormBlocks } from "../../../shared/types";

const MyDocument = ({ resume }) => {
  const defaultFormBlock: DefaultFormBlock = resume.defaultFormBlock;
  const formBlocks: FormBlocks = resume.formBlocks;
  const formBlocksKeys = Object.keys(formBlocks);

  const selectedTemplate = StyleSheet.create({ ...templates.defaultTemplate });

  return (
    <Document>
      <Page size="A4" style={selectedTemplate.page}>
        <View style={selectedTemplate.nameblock}>
          <Text style={selectedTemplate.fullName}>
            {defaultFormBlock.fullName}
          </Text>
          <Text style={selectedTemplate.designation}>
            {defaultFormBlock.designation}
          </Text>
        </View>
        <View style={selectedTemplate.details}>
          <Text>{defaultFormBlock.phone}</Text>
          <Text>{defaultFormBlock.mail}</Text>
          <Text>{defaultFormBlock.github}</Text>
          <Text>{defaultFormBlock.linkedIn}</Text>
        </View>
        <Text style={selectedTemplate.aboutTitle}>Summary</Text>
        <Text style={selectedTemplate.about}>{defaultFormBlock.about}</Text>

        {formBlocksKeys.map((key) => (
          <View style={selectedTemplate.formBlocks}>
            <Text style={selectedTemplate.aboutTitle}>
              {formBlocks[key].name}
            </Text>
            <View style={selectedTemplate.entries}>
              {formBlocks[key].entries.map((entry) => (
                <View style={selectedTemplate.entry}>
                  <Text style={selectedTemplate.entryItem}>{entry.title}</Text>
                  <Text style={selectedTemplate.entryItem}>
                    {entry.subTitle}
                  </Text>
                  <Text style={selectedTemplate.entryItem}>
                    {entry.subTitle2}
                  </Text>
                  <Text style={selectedTemplate.entryItem}>
                    {entry.summary}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default MyDocument;
