import { UserCard } from "./components/UserCard";
import { useEffect, useState } from "react";
import { UserCardProps } from "./types";
import { fetchData } from "../../api/fetchData";
import { getRandomNumberOneToTen } from "./utils/getRandomNumber";

export function FetchAPI() {
  const [randomUser, setRandomUser] = useState<UserCardProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomUser = () => {
    setIsLoading(true);
    fetchData(import.meta.env.VITE_API_URL + getRandomNumberOneToTen())
      .then((data) => {
        setRandomUser(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  console.log(randomUser);
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
