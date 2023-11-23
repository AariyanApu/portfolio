import AddSiglePost from '@/components/dashboard/AddSinglePost';
import DashboardProjects from '@/components/dashboard/DashboardProjects';
import DeletePost from '@/components/dashboard/DeletePost';

export default function Dashboard() {
  return (
    <div className='flex flex-row max-w-6xl mx-auto'>
      {/* <DashboardProjects /> */}

      <AddSiglePost />
      <DeletePost />
    </div>
  );
}
