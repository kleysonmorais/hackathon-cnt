import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function PerfilPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Perfil" />
      <div className="mt-2 text-center">
        <img
          alt="persona"
          className="h-24 w-24 rounded-full mx-auto"
          src="../imgs/persona.png"
        />
        <p className="py-4 text-xl font-medium">Admin</p>
      </div>

      <div className="bg-white shadow overflow-hidden p-2 m-4 sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div>
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Nome Completo
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Pesquisador Admin da CNT
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Application for
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Backend Developer
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                E-mail
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                admin@cnt.com
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                About
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="perfil" />
    </>
  );
}
