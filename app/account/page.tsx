import React from 'react';
import DashboardLayout from '../overview/layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AccountCard from './AccountCard';

const AccountPage = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Pengaturan Akun</CardTitle>
          <CardDescription>Ubah Data Pengaturan akun anda</CardDescription>
          <CardContent className="mt-4">
            <AccountCard />
          </CardContent>
        </CardHeader>
      </Card>
    </DashboardLayout>
  );
};

export default AccountPage;
