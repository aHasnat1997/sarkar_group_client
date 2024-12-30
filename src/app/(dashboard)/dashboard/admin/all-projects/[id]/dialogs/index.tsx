import { useState } from "react";
import DialogOne from "./dialogOne";
import DialogTwo from "./dialogTwo";
import DialogThree from "./dialogThree";
import DialogFour from "./dialogFour";
import { TProject } from "@/types";

export default function ProjectDialogButtons({ value, project }: { value: number, project: TProject }) {
  const [open, setOpen] = useState(false);

  if (value === 0) return <DialogOne open={open} setOpen={setOpen} payload={project} />
  else if (value === 1) return <DialogTwo open={open} setOpen={setOpen} projectId={project?.id} />
  else if (value === 2) return <DialogThree open={open} setOpen={setOpen} projectId={project?.id} />
  else if (value === 3) return <DialogFour open={open} setOpen={setOpen} projectId={project?.id} />
  else return <></>
};
