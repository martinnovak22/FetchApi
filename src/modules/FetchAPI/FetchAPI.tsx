import { UserCard } from "./components/UserCard";
import { useEffect, useState } from "react";
import { UserCardProps } from "./types";
import { fetchUserData } from "../../api/APIUtils";
import { getRandomNumberOneToFifty } from "./utils/getRandomNumber";

export function FetchAPI() {
  const [randomUser, setRandomUser] = useState<UserCardProps>();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomUser = () => {
    setIsloading(true);
    fetchUserData(import.meta.env.VITE_API_URL + getRandomNumberOneToFifty())
      .then((data) => {
        setRandomUser(data);
      })

      .catch((err) => {
        setError(err.message);
      })
      .then(() => setIsloading(false));
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className={"FA__container"}>
      <h1 className={"FA__title"}>Fetch random user</h1>

      <UserCard
        name={randomUser?.name}
        username={randomUser?.username}
        email={randomUser?.email}
        phone={randomUser?.phone}
        isLoading={isLoading}
        error={error}
      />

      <div className={"FA__buttonBox"}>
        <label htmlFor={"fetchButton"} className={"FA__buttonLabel"}>
          Click here --{">"}
        </label>

        <input
          id={"fetchButton"}
          type={"button"}
          onClick={() => {
            fetchRandomUser();
          }}
          className={"FA_button"}
          value={"Fetch!"}
        />
      </div>
    </div>
  );
}
