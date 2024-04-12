export const styles = {
  timelineContent: { px: 2, display: "flex", justifyContent: "space-between" },
};

// interface IDutyModel {

// }

export interface IRoleModel {
  begin: string;
  end: string;
  title: string;
  orgName: string;
  location: string;
  notes?: string;
  duties?: any[];
}
