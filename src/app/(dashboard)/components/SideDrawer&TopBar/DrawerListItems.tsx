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
  icon: React.ReactNode,
  hasChild: boolean
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
      path: '/dashboard',
      hasChild: false
    },
    {
      icon: <AllEmployeesIcon />,
      title: 'All Employees',
      path: '/dashboard/all-employees',
      hasChild: true
    },
    {
      icon: <AllProjectIcon />,
      title: 'All Projects',
      path: '/dashboard/all-projects',
      hasChild: true
    },
    {
      icon: <ClientsIcon />,
      title: 'Clients',
      path: '/dashboard/all-clients',
      hasChild: true
    },
    {
      icon: <PaymentIcon />,
      title: 'Payment',
      path: '/dashboard/payment',
      hasChild: true
    },
    {
      icon: <ProductIcon />,
      title: 'Product',
      path: '/dashboard/all-products',
      hasChild: true
    },
    {
      icon: <RequisitionIcon />,
      title: 'Requisition',
      path: '/dashboard/requisition',
      hasChild: true
    },
    {
      icon: <ApplicationIcon />,
      title: 'Application',
      path: '/dashboard/application',
      hasChild: true
    },
    {
      icon: <MediaIcon />,
      title: 'Media',
      path: '/dashboard/media',
      hasChild: true
    },
    {
      icon: <DailyReportIcon />,
      title: 'Daily Report',
      path: '/dashboard/daily-report',
      hasChild: true
    }
  ];

  // const list = currentStoredUser?.role === 'ADMIN' ? adminList : currentStoredUser?.role === 'USER' ? userList : [];
  const list = adminList;

  return list;
};
