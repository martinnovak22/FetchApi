import { UserCardProps } from "../types";

export function UserCard({ id, name, username, email, phone }: UserCardProps) {
  if (id === undefined) {
    return (
      <div className={"FA__userCard"}>
        <span>The user is being loaded, please wait!</span>
      </div>
    );
  } else {
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
}
