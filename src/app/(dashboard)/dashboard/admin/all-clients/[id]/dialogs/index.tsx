import { TClient } from "@/types";
import { useState } from "react";
import DialogOne from "./dialogOne";
import DialogThree from "./dialogThree";

export default function ClientDialogButtons({ payload, value }: { payload: TClient, value: number }) {
  const [open, setOpen] = useState(false);

  if (value === 0) return <DialogOne open={open} setOpen={setOpen} payload={payload} />
  else if (value === 2) return <DialogThree open={open} setOpen={setOpen} payload={payload} />
  else return <></>
};
