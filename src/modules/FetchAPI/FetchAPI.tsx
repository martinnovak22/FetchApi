import { UserCard } from "./components/UserCard";
import React, { useEffect } from "react";
import { UserCardProps } from "./types";
import { getRandomNumber } from "./utils/getRandomNumber";

export function FetchAPI() {
  const [randomUser, setRandomUser] = React.useState<UserCardProps | undefined>(
    undefined
  );
  const fetchURL = "https://jsonplaceholder.typicode.com/users/";

  const fetchRandomUser = async () => {
    const response = await fetch(fetchURL + Math.round(getRandomNumber()));
    await response.json().then((u) => setRandomUser(u));
  };

  useEffect(() => {
    fetchRandomUser().catch((e) => console.log(e));
  }, []);

  return (
    <div className={"FA__container"}>
      <h1 className={"FA__title"}>Fetch random user</h1>

      <UserCard
        id={randomUser?.id}
        name={randomUser?.name}
        username={randomUser?.username}
        email={randomUser?.email}
        phone={randomUser?.phone}
      />

      <div className={"FA__buttonBox"}>
        <label htmlFor={"fetchButton"} className={"FA__buttonLabel"}>
          Click here --{">"}
        </label>

        <input
          id={"fetchButton"}
          type={"button"}
          onClick={() => fetchRandomUser()}
          className={"FA_button"}
          value={"Fetch!"}
        />
      </div>
    </div>
  );
}
