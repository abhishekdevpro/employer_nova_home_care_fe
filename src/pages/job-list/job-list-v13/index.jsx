
import JobList from "@/components/job-listing-pages/job-list-v13";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Job List V13 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const JobListPage13 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage13
