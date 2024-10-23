'use client';

import DashboardIcon from '@/assets/icons/dashboard.svg';
import AllEmployeesIcon from '@/assets/icons/all-employees.svg';
import AllProjectIcon from '@/assets/icons/all-projects.svg';
import ClientsIcon from '@/assets/icons/clients.svg';
import PaymentIcon from '@/assets/icons/payment.svg';
import ProductIcon from '@/assets/icons/product.svg';
import RequisitionIcon from '@/assets/icons/requisition.svg';
import ApplicationIcon from '@/assets/icons/application.svg';
import MediaIcon from '@/assets/icons/media.svg';
import DailyReportIcon from '@/assets/icons/daily-report.svg';

// import { useAppSelector } from '@/redux/hooks';
// import { RootState } from '@/redux/store';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode
}

export default function DrawerListItems(): TList[] {
  // const [currentStoredUser, setCurrentStoredUser] = useState<TUser | null>(null);
  // const storedUser = useAppSelector((state: RootState) => state.auth.user);
  // useEffect(() => {
  //   setCurrentStoredUser(storedUser);
  // }, [storedUser]);

  const adminList: TList[] = [
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: <AllEmployeesIcon />,
      title: 'All Employees',
      path: '/dashboard/all-employees'
    },
    {
      icon: <AllProjectIcon />,
      title: 'All Projects',
      path: '/dashboard/all-projects'
    },
    {
      icon: <ClientsIcon />,
      title: 'Clients',
      path: '/dashboard/clients'
    },
    {
      icon: <PaymentIcon />,
      title: 'Payment',
      path: '/dashboard/payment'
    },
    {
      icon: <ProductIcon />,
      title: 'Product',
      path: '/dashboard/all-products'
    },
    {
      icon: <RequisitionIcon />,
      title: 'Requisition',
      path: '/dashboard/requisition'
    },
    {
      icon: <ApplicationIcon />,
      title: 'Application',
      path: '/dashboard/application'
    },
    {
      icon: <MediaIcon />,
      title: 'Media',
      path: '/dashboard/media'
    },
    {
      icon: <DailyReportIcon />,
      title: 'Daily Report',
      path: '/dashboard/daily-report'
    }
  ];

  // const list = currentStoredUser?.role === 'ADMIN' ? adminList : currentStoredUser?.role === 'USER' ? userList : [];
  const list = adminList;

  return list;
};
