import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import axios from "axios";
import UserCard from "../Component/UserCard";

export default function Home() {
  const [n, setUser] = useState("");
  const [datas, setData] = useState([]);
  const genUsers = async () => {
    const resp = await axios.get(`https://randomuser.me/api/`);

    if (n > 0) {
      resp = await axios.get(`https://randomuser.me/api/?results=${n}`);
      setData(resp.data.results);
    } else {
      alert("Invalid number of user");
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {datas.map((person) => (
        <UserCard
          first={person.name.first}
          last={person.name.last}
          img={person.picture.large}
          email={person.email}
          location={person.location}
        />
      ))}

      <p className="text-center mt-3 text-muted fst-italic">
        made by Thatthana Singeon 640612088
      </p>
    </div>
  );
}
