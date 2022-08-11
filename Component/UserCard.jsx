import React from "react";
import UserCardDetail from "./UserCardDetail";
import { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCard(props) {
  const [view, setview] = useState(false);
  const onClickHandler = () => {
    if (view === true) {
      setview(false);
    } else {
      setview(true);
    }
  };
  return (
    <div className="border-bottom">
      <div
        className="d-flex align-items-center p-3"
        onClick={() => onClickHandler()}
      >
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">
          {props.first} {props.last}
          <span>{view ? <IconChevronUp /> : <IconChevronDown />}</span>
        </span>
      </div>
      {view ? (
        <UserCardDetail location={props.location} email={props.email} />
      ) : (
        false
      )}
    </div>
  );
}
