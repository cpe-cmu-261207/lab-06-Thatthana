import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";

export default function UserCardDetail(data) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {data.email}
      </p>
      <p>
        <IconMapPins />
        {data.location.city +
          " " +
          data.location.state +
          " " +
          data.location.country +
          " " +
          data.location.postcode}
      </p>
    </div>
  );
}
