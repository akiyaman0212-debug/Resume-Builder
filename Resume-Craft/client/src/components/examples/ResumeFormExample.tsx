import { useState } from "react";
import ResumeForm from "../ResumeForm";
import { defaultResumeData, type ResumeData } from "@/lib/resumeTypes";

export default function ResumeFormExample() {
  const [data, setData] = useState<ResumeData>(defaultResumeData);
  return <ResumeForm data={data} onChange={setData} />;
}
