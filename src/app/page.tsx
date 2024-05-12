import { PaginationComponent } from "@/components/PaginationComponent";
import JobComponent from "./components/JobComponent";

export default function Home() {
  return (
    <div className="mt-16">
      <JobComponent/>
      <PaginationComponent/>
    </div>
  );
}
