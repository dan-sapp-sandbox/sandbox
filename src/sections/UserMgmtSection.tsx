import { Card } from "@/components/Card";

const UserMgmtSection = () => {
  return (
    <Card>
      <div className="bg-violet-900 h-150 w-225 flex flex-col justify-center items-center">
        <span className="text-3xl">CRUD here</span>
      </div>
      <div className="flex flex-col items-end gap-12">
        <span className="text-2xl font-bold">Auth and Content Management Systems</span>
        <span>Auth0 and CMS</span>
        <span>Data table, add/edit modal</span>
        <span>Explain where you used this in the past</span>
        <span>Link to code</span>
      </div>
    </Card>
  );
};

export default UserMgmtSection;
