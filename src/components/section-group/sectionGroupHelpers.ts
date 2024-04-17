export interface SectionGroupModel {
  heading?: string;
  text?: string;
  children?: any;
}

export const styles = {
  section: { px: { xs: 3, sm: 6 }, my: 3 },
  heading: { textAlign: "left" },
  content: { textAlign: "left" },
};
