'use client';
import { DataTable } from '@/components/ui/tables/DataTable';

import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import useSWR, { mutate } from 'swr';
import ModalEditDepartment from './ModalEditDepartment';
import { TableHeader } from '@/components/ui/tables/TableHeader';
import ModalDeleteDepartment from './ModalDeleteDepartment';
import { fetcher } from '@/lib/utils';

export type Department = {
  id: number;
  department_name: string;
};

const DepartmentTable = () => {
  const { data: Departments, error } = useSWR('/api/department', fetcher);
  const handleEdit = async () => {
    await mutate('/api/department');
  };

  const handleDelete = async () => {
    // Optionally, refresh the data
    mutate('/api/department');
  };
  const columns: ColumnDef<Department>[] = [
    {
      accessorKey: 'department_name',
      header: ({ column }) => {
        return <TableHeader column={column} title={'Nama Department'} />;
      },
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        return (
          <div className="flex items-center w-full justify-end">
            <div className="inline-flex rounded-lg shadow-sm ">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <RiSearchLine className="size-5" />
              </button>
              <ModalEditDepartment
                department={row.original}
                onSave={handleEdit}
              />
              <ModalDeleteDepartment
                depart_id={row.original.id}
                onDelete={handleDelete}
              />
            </div>
          </div>
        );
      },
    },
  ];
  if (error) return <div>Error loading data</div>;
  if (!Departments) return <div>Loading...</div>;

  return <DataTable columns={columns} data={Departments} />;
};

export default DepartmentTable;
