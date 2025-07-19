import { useState } from "react";
import DialogOne from "./dialogOne";
import DialogTwo from "./dialogTwo";
import DialogThree from "./dialogThree";
import { TEmployeeData } from "@/types";

export default function ProfileDialogButtons({ value, employeeData }: { value: number, employeeData: TEmployeeData }) {
  const [open, setOpen] = useState(false);

  if (value === 0) return <DialogOne open={open} setOpen={setOpen} payload={employeeData} />
  else if (value === 1) return <DialogTwo open={open} setOpen={setOpen} payload={employeeData} />
  else if (value === 2) return <DialogThree open={open} setOpen={setOpen} payload={employeeData} />
  else return <></>
};
