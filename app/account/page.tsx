import React from 'react';
import DashboardLayout from '../overview/layout';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AccountPage = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Pengaturan Akun</CardTitle>
          <CardDescription>Ubah Data Pengaturan akun anda</CardDescription>
        </CardHeader>
      </Card>
    </DashboardLayout>
  );
};

export default AccountPage;
