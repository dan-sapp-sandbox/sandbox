import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { ReportSection } from "./useReportBuilderState";
import { useMemo } from "react";

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 10,
    fontSize: 12,
  },
});

const PdfPreview = ({ reportState }: { reportState: ReportSection[] }) => {
  const documentKey = reportState.map((s) => s.id).join(",");
  const document = useMemo(
    () => (
      <Document key={documentKey}>
        <Page size="A4" style={styles.page}>
          {reportState.map((section) => (
            <View key={section.id} style={styles.section}>
              <Text>{section.content}</Text>
            </View>
          ))}
        </Page>
      </Document>
    ),
    [documentKey],
  );

  return document;
};

export default PdfPreview;
