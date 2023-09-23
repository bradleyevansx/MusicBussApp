export enum UserStatus {
  Active,
  OnHold,
  Inactive,
}

export const userStatusDisplayNames: Record<UserStatus, string> = {
  [UserStatus.Active]: "Active",
  [UserStatus.OnHold]: "OnHold",
  [UserStatus.Inactive]: "Inactive",
};

export const userStatusColorValues: Record<UserStatus, string> = {
  [UserStatus.Active]: "green",
  [UserStatus.OnHold]: "yellow",
  [UserStatus.Inactive]: "red",
};
