
import AllApplicants from "@/components/dashboard-pages/employers-dashboard/all-applicants";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "All Applicants || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const AllApplicantsEmploeesPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <AllApplicants />
    </>
  );
};

export default AllApplicantsEmploeesPage
