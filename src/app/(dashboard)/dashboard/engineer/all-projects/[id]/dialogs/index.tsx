import { useState } from "react";
import DialogFour from "./dialogFour";
import { TProject } from "@/types";

export default function ProjectDialogButtons({ value, project }: { value: number, project: TProject }) {
  const [open, setOpen] = useState(false);

  if (value === 3) return <DialogFour open={open} setOpen={setOpen} projectId={project?.id} />
  else return <></>
};
