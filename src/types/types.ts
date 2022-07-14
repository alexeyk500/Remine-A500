type ProjectType = {
  id: string;
  name: string;
};

type IssueType = {
  id: string;
};

type UserType = {
  id: string;
  name: string;
};

type ActivityType = {
  id: string;
  name: string;
};

type custom_field = {
  id: string;
  name: string;
  value: string;
};

export type TimeEntryType = {
  id: string;
  project: ProjectType;
  issue: IssueType;
  user: UserType;
  activity: ActivityType;
  hours: number;
  comments: string;
  spent_on: string;
  created_on: string;
  updated_on: string;
  custom_fields: custom_field[];
};
