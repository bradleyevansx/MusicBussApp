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
  [UserStatus.Active]: "text-green-300",
  [UserStatus.OnHold]: "text-yellow-300",
  [UserStatus.Inactive]: "text-red-300",
};
