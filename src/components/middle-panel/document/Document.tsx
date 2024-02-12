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
          <Text style={selectedTemplate.detailsItem}>
            {defaultFormBlock.phone}
          </Text>
          <Text style={selectedTemplate.detailsItem}>
            {defaultFormBlock.mail}
          </Text>
          <Text style={selectedTemplate.detailsItem}>
            {defaultFormBlock.github}
          </Text>
          <Text style={selectedTemplate.detailsItem}>
            {defaultFormBlock.linkedIn}
          </Text>
        </View>
        <Text style={selectedTemplate.aboutTitle}>Summary</Text>
        <Text style={selectedTemplate.about}>{defaultFormBlock.about}</Text>

        {formBlocksKeys.map((key) => (
          <View style={selectedTemplate.formBlocks} key={key}>
            <Text style={selectedTemplate.formBlockTitle}>
              {formBlocks[key].name}
            </Text>
            {formBlocks[key].entries.map((entry) => (
              <View style={selectedTemplate.entry} key={entry.title}>
                <Text style={selectedTemplate.entryTitle}>{entry.title}</Text>
                <Text style={selectedTemplate.entrySubTitle}>
                  {entry.subTitle}
                </Text>
                <Text style={selectedTemplate.entrySubTitle2}>
                  {entry.subTitle2}
                </Text>
                <Text style={selectedTemplate.summary}>{entry.summary}</Text>
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default MyDocument;
