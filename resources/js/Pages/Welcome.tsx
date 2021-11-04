import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
// @ts-ignore
import { Head } from '@inertiajs/inertia-react';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion,
}: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
      <Head title="Welcome" />

      {canLogin ? (
        <div className="display-none hidden fixed top-0 right-0 px-6 py-4 ">
          {page.props.user ? (
            <InertiaLink
              href={route('dashboard')}
              className="text-sm text-gray-700 underline"
            >
              Dashboard
            </InertiaLink>
          ) : (
            <>
              <InertiaLink
                href={route('login')}
                className="text-sm text-gray-700 underline"
              >
                Log in
              </InertiaLink>

              {canRegister ? (
                <InertiaLink
                  href={route('register')}
                  className="ml-4 text-sm text-gray-700 underline"
                >
                  Register
                </InertiaLink>
              ) : null}
            </>
          )}
        </div>
      ) : null}

      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
          <div className="grid grid-cols-1">
            <div className="p-6">
              <div className="flex items-center">
                
                <div className="text-lg leading-7 font-semibold">
                  Temporarily Disabled
                </div>
              </div>              
                <div className="text-center mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  <p className="text-center">We are currently testing some of our inner technologies and the site is temporarily down.</p>
                  <p className="text-center mt-4">Please contact us at <a className="route-link" href="mailto:Bud@GrowYourOwnNFT.IO">Bud@GrowYourOwnNFT.IO</a> if you have any questions.</p>                
                </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}
