import { useState } from "react";
import DialogOne from "./dialogOne";
import DialogTwo from "./dialogTwo";
import DialogThree from "./dialogThree";
import DialogFour from "./dialogFour";

export default function ProjectDialogButtons({ value }: { value: number }) {
  const [open, setOpen] = useState(false);

  if (value === 0) return <DialogOne open={open} setOpen={setOpen} />
  else if (value === 1) return <DialogTwo open={open} setOpen={setOpen} />
  else if (value === 2) return <DialogThree open={open} setOpen={setOpen} />
  else if (value === 3) return <DialogFour open={open} setOpen={setOpen} />
  else return <></>
};
