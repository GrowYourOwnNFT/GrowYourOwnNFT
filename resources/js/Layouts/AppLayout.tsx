import { Inertia } from '@inertiajs/inertia';
// @ts-ignore
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
//import JetApplicationMark from '@/Jetstream/ApplicationMark';
import JetBanner from '@/Jetstream/Banner';
import JetDropdown from '@/Jetstream/Dropdown';
import JetDropdownLink from '@/Jetstream/DropdownLink';
import JetNavLink from '@/Jetstream/NavLink';
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink';
import { Team } from '@/types';

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function DisabledLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  const page = useTypedPage();
  const route = useRoute();
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  function switchToTeam(e: React.FormEvent, team: Team) {
    e.preventDefault();
    Inertia.put(
      route('current-team.update'),
      {
        team_id: team.id,
      },
      {
        preserveState: false,
      },
    );
  }

  function logout(e: React.FormEvent) {
    e.preventDefault();
    Inertia.post(route('logout'));
  }

  return (
  <div className="flex flex-col h-screen">					
      <nav id="header-nav" className="sticky top-0 drop-shadow-sm text-white bg-dark"> 
        {/* <!-- Primary Navigation Menu --> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* <!-- Logo --> */}
              <div className="flex-shrink-0 flex items-center">
                <InertiaLink className="text-center" href={route('dashboard')}>
                  <span className="text-white table-cell text-sm">Grow Your Own</span>
                  <span className="font-bold text-lg">NFT</span>
                </InertiaLink>
              </div>

              {/* <!-- Navigation Links --> */}
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <JetNavLink
                  href={route('galleries')}
                  active={route().current('galleries')}
                >
                  Galleries
                </JetNavLink>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                  href={route('growrooms')}
                  active={route().current('growrooms')}
                >
                  Growrooms
                </JetNavLink>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                  href={route('drops')}
                  active={route().current('drops')}
                >
                  Drops
                </JetNavLink>
              </div>
            </div>

            <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                  href={route('dashboard')}
                  active={route().current('dashboard')}
                >
                  Dashboard
                </JetNavLink>
              </div>
              {/* <!-- Settings Dropdown --> */}
              <div className="hidden space-x-8 sm:-my-px sm:flex pt-4">
                <JetDropdown
                  align="right"
                  width="48"
                  renderTrigger={() =>
                    page.props.jetstream.managesProfilePhotos ? (
                      <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src={page.props.user.profile_photo_url}
                          alt={page.props.user.name}
                        />
                      </button>
                    ) : (
                      <span className="inline-flex rounded-md">
                        
                        <button
                          type="button"
                          className="nav-link inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md focus:outline-none transition"
                        >
                          

                          <svg
                            className="ml-2 -mr-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </span>
                    )
                  }
                >
                  {/* <!-- Account Management --> */}
                  <div className="block px-4 py-2 text-xs text-gray-400">
                    Dashboard Menu
                  </div>
                  <div className="border-t border-purple-100"></div>
                  <JetDropdownLink href={route('profile.show')}>
                    Profile
                  </JetDropdownLink>

                  {page.props.jetstream.hasApiFeatures ? (
                    <JetDropdownLink href={route('api-tokens.index')}>
                      API Tokens
                    </JetDropdownLink>
                  ) : null}

                  <div className="border-t border-purple-100"></div>

                  {/* <!-- Authentication --> */}
                  <form onSubmit={logout}>
                    <JetDropdownLink as="button">Log Out</JetDropdownLink>
                  </form>
                </JetDropdown>
              </div>
            </div>
            </div>
            {/* <!-- Hamburger --> */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(!showingNavigationDropdown)
                }
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-brown-100 focus:outline-none focus:bg-brown-100 focus:text-gray-500 transition"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={classNames({
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    })}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={classNames({
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    })}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Responsive Navigation Menu --> */}
        <div
          className={classNames('sm:hidden', {
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          })}
        >
          <div className="pt-2 pb-3 space-y-1">
            <JetResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Dashboard
            </JetResponsiveNavLink>
          </div>

          {/* <!-- Responsive Settings Options --> */}
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="flex items-center px-4">
              {page.props.jetstream.managesProfilePhotos ? (
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={page.props.user.profile_photo_url}
                    alt={page.props.user.name}
                  />
                </div>
              ) : null}

              <div>
                <div className="font-medium text-base text-green-800">
                  {page.props.user.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {page.props.user.email}
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <JetResponsiveNavLink
                href={route('profile.show')}
                active={route().current('profile.show')}
              >
                Profile
              </JetResponsiveNavLink>

              {page.props.jetstream.hasApiFeatures ? (
                <JetResponsiveNavLink
                  href={route('api-tokens.index')}
                  active={route().current('api-tokens.index')}
                >
                  API Tokens
                </JetResponsiveNavLink>
              ) : null}

              {/* <!-- Authentication --> */}
              <form method="POST" onSubmit={logout}>
                <JetResponsiveNavLink as="button">
                  Log Out
                </JetResponsiveNavLink>
              </form>

              {/* <!-- Team Management --> */}
              {page.props.jetstream.hasTeamFeatures ? (
                <>
                  <div className="border-t border-gray-200"></div>

                  <div className="block px-4 py-2 text-xs text-green-400">
                    Manage Team
                  </div>

                  {/* <!-- Team Settings --> */}
                  <JetResponsiveNavLink
                    href={route('teams.show', [
                      page.props.user.current_team!,
                    ])}
                    active={route().current('teams.show')}
                  >
                    Team Settings
                  </JetResponsiveNavLink>

                  {page.props.jetstream.canCreateTeams ? (
                    <JetResponsiveNavLink
                      href={route('teams.create')}
                      active={route().current('teams.create')}
                    >
                      Create New Team
                    </JetResponsiveNavLink>
                  ) : null}

                  <div className="hidden border-t border-gray-200"></div>
                    
                  {/* <!-- Team Switcher --> */}
                  <div className="block px-4 py-2 text-xs text-green-400">
                    Switch Teams
                  </div>
                  {page.props.user?.all_teams?.map(team => (
                    <form onSubmit={e => switchToTeam(e, team)} key={team.id}>
                      <JetResponsiveNavLink as="button">
                        <div className="flex items-center">
                          {team.id == page.props.user.current_team_id && (
                            <svg
                              className="mr-2 h-5 w-5 text-green-400"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          )}
                          <div>{team.name}</div>
                        </div>
                      </JetResponsiveNavLink>
                    </form>
                  ))}
                </>
              ) : null}
              
            </div>
          </div>
        </div>
      </nav>	
      <div className="flex flex-col">
          <Head title={title} />
          <JetBanner />
      </div>		
      <div className="flex flex-col flex-grow">

        {/* <!-- Page Heading --> */}
        {renderHeader ? (
        <header className="bg-army shadow">
            <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
                {renderHeader()}
            </div>            
        </header>
        ) : null}

        {/* <!-- Page Content --> */}
        <main>{children}</main>
        </div>

        {/* <!-- Page Footer --> */}        
        <footer className="text-white bg-army">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex">
                {/* <!-- Tagline --> */}
                <div className="text-sm text-center flex-shrink-0 flex items-center">
                The future of Cannabis has arrived... <br />Are you ready?
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">

                </div>

            </div>

            <div className="flex justify-between h-16">
            <div className="flex">
            <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                    href={route('about')}
                    active={route().current('about')}
                >
                    About
                </JetNavLink>
                </div>
                <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                    href={route('features')}
                    active={route().current('features')}
                >
                    Features
                </JetNavLink>
                </div>
                <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                    href={route('faq')}
                    active={route().current('faq')}
                >
                    FAQ
                </JetNavLink>
                </div>                
                <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                    href={route('support')}
                    active={route().current('support')}
                >
                    Support
                </JetNavLink>
                </div>    
                <div className="hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                    href={route('terms-and-conditions')}
                    active={route().current('terms-and-conditions')}
                >
                    Terms & Conditions
                </JetNavLink>
                </div>    
                <div className="text-sm hidden space-x-8 sm:-my-px sm:ml-4 sm:flex">
                <JetNavLink
                    href={route('privacy-policy')}
                    active={route().current('privacy-policy')}
                >
                    Privacy Policy
                </JetNavLink>
                </div>    
            </div>
            </div>
            
            </div>
        </div>
        <div className="bg-dark">
            <div
            className="
                container
                mx-auto
                py-2
                px-5
                flex flex-wrap flex-col
                sm:flex-row
            "
            >
            <p className="text-purple-500 text-sm text-center sm:text-left">
                
                <a
                href="https://www.growyourownnft.io/"
                className="text-sm text-purple-600 ml-1"
                target="_blank"
                >Grow Your Own NFT</a
                >
            </p>
            <span
                className="
                inline-flex
                sm:ml-auto sm:mt-0
                mt-2
                justify-center
                sm:justify-start
                "
            >
                <a href="" className="text-purple-500" title="Facebook">
                <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="ml-3 text-purple-500" title="Twitter">
                <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="ml-3 text-purple-500" title="Discord">
                <i className="fab fa-discord"></i>
                </a>        
            </span>
            </div>
        </div>
        </footer>
  </div>
  );
}
