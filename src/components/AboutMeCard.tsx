import { BiChevronRight } from "react-icons/bi";

export default function AboutMeCard({ skill }: { skill: string }) {
  return (
    <div className="mb-1 flex flex-row gap-1">
      <BiChevronRight className="mt-1" />{" "}
      <span className="text-sm text-[#8892b0]">{skill}</span>
    </div>
  );
}
