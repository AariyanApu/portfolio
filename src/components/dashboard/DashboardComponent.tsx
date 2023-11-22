import DashboardContact from './DashboardContact';
import DashboardProjects from './DashboardProjects';
import DashboardReview from './DashboardReview';
import DashboardSkills from './DashboardSkills';

export default function DashboardComponent({ selected }: any) {
  switch (selected) {
    case 'Review':
      return <DashboardReview />;
    case 'Projects':
      return <DashboardProjects />;

    case 'Skills':
      return <DashboardSkills />;

    default:
      return <DashboardContact />;
  }
}
