export interface SectionGroupModel {
  heading?: string;
  text?: string;
  children?: any;
}

export const styles = {
  section: {
    display: "block",
    marginBottom: "16px",
  },
  heading: {
    textAlign: "left",
    marginBottom: "8px",
    borderBottom: "2px solid #6f8faf",
    color: "#6f8faf",
    width: "fit-content",
    fontWeight: "700",
  },
  body: { textAlign: "left" },
  content: { display: "flex", justifyContent: "start", mt: 3 },
};
