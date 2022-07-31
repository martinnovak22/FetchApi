import { UserCardProps } from "../types";

export function UserCard({
  name,
  username,
  email,
  phone,
  isLoading,
  error,
}: UserCardProps) {
  if (isLoading) {
    return (
      <div className={"FA__userCard"}>
        <span>Loading data...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className={"FA__userCard"}>
        <span>{error}</span>
      </div>
    );
  }
  return (
    <div className={"FA__userCard"}>
      <h1 className={"FA__userName"}>{username}</h1>

      <div className={"FA__description"}>
        <label className={"FA__label"}>Name: </label>
        <output>{name}</output>

        <hr className={"FA__lineBreak"} />

        <label className={"FA__label"}>Email: </label>
        <output>{email}</output>

        <hr className={"FA__lineBreak"} />

        <label className={"FA__label"}>Phone: </label>
        <output>{phone}</output>
      </div>
    </div>
  );
}
