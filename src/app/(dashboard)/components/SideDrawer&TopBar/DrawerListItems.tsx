'use client';

import { useEffect, useState } from 'react';
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
import { TUser, TUserRole } from '@/types';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode,
  hasChild: boolean
}

export default function DrawerListItems(): TList[] {
  const [currentStoredUserRole, setCurrentStoredUserRole] = useState<TUserRole | null>(null);
  const storedUser = useAppSelector((state: RootState) => state.auth.user) as TUser;
  useEffect(() => {
    setCurrentStoredUserRole(storedUser?.role);
  }, [storedUser]);

  const adminList: TList[] = [
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard/admin',
      hasChild: false
    },
    {
      icon: <AllEmployeesIcon />,
      title: 'All Employees',
      path: '/dashboard/admin/all-employees',
      hasChild: true
    },
    {
      icon: <AllProjectIcon />,
      title: 'All Projects',
      path: '/dashboard/admin/all-projects',
      hasChild: true
    },
    {
      icon: <ClientsIcon />,
      title: 'Clients',
      path: '/dashboard/admin/all-clients',
      hasChild: true
    },
    {
      icon: <PaymentIcon />,
      title: 'Payment',
      path: '/dashboard/admin/payment',
      hasChild: true
    },
    {
      icon: <ProductIcon />,
      title: 'Product',
      path: '/dashboard/admin/all-products',
      hasChild: true
    },
    {
      icon: <RequisitionIcon />,
      title: 'Requisition',
      path: '/dashboard/admin/requisition',
      hasChild: true
    },
    {
      icon: <ApplicationIcon />,
      title: 'Application',
      path: '/dashboard/admin/application',
      hasChild: true
    },
    {
      icon: <MediaIcon />,
      title: 'Media',
      path: '/dashboard/admin/media',
      hasChild: true
    },
    {
      icon: <DailyReportIcon />,
      title: 'Daily Report',
      path: '/dashboard/admin/daily-report',
      hasChild: true
    }
  ];

  const projectManagerList: TList[] = [
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard/project_manager',
      hasChild: false
    },
    {
      icon: <AllProjectIcon />,
      title: 'My Projects',
      path: '/dashboard/project_manager/all-projects',
      hasChild: true
    },
    {
      icon: <PaymentIcon />,
      title: 'Payment',
      path: '/dashboard/project_manager/payment',
      hasChild: true
    },
    {
      icon: <ProductIcon />,
      title: 'Product',
      path: '/dashboard/project_manager/all-products',
      hasChild: true
    },
    {
      icon: <RequisitionIcon />,
      title: 'Requisition',
      path: '/dashboard/project_manager/requisition',
      hasChild: true
    },
    {
      icon: <ApplicationIcon />,
      title: 'Application',
      path: '/dashboard/project_manager/application',
      hasChild: true
    },
    {
      icon: <MediaIcon />,
      title: 'Media',
      path: '/dashboard/project_manager/media',
      hasChild: true
    },
    {
      icon: <DailyReportIcon />,
      title: 'Daily Report',
      path: '/dashboard/project_manager/daily-report',
      hasChild: true
    }
  ];

  const engineerList: TList[] = [
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard/engineer',
      hasChild: false
    },
    {
      icon: <AllProjectIcon />,
      title: 'My Projects',
      path: '/dashboard/engineer/all-projects',
      hasChild: true
    },
    {
      icon: <PaymentIcon />,
      title: 'Payment',
      path: '/dashboard/engineer/payment',
      hasChild: true
    },
    {
      icon: <RequisitionIcon />,
      title: 'Requisition',
      path: '/dashboard/engineer/requisition',
      hasChild: true
    },
    {
      icon: <ApplicationIcon />,
      title: 'Application',
      path: '/dashboard/engineer/application',
      hasChild: true
    },
    {
      icon: <MediaIcon />,
      title: 'Media',
      path: '/dashboard/engineer/media',
      hasChild: true
    },
    {
      icon: <DailyReportIcon />,
      title: 'Daily Report',
      path: '/dashboard/engineer/daily-report',
      hasChild: true
    }
  ];

  const list = currentStoredUserRole === 'SUPER_ADMIN' ? adminList :
    currentStoredUserRole === 'ADMIN' ? adminList :
      currentStoredUserRole === 'PROJECT_MANAGER' ? projectManagerList :
        currentStoredUserRole === 'ENGINEER' ? engineerList :
          [];

  return list;
};
