import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

interface RouterContextType {
  currentPath: string;
  pathname: string;
  search: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return (window.location.pathname || '/') + (window.location.search || '');
    }
    return '/';
  });

  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      startTransition(() => {
        setCurrentPath((window.location.pathname || '/') + (window.location.search || ''));
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    if (to === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }
    startTransition(() => {
      setCurrentPath(to);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pathname = currentPath.split('?')[0] || '/';
  const search = currentPath.includes('?') ? '?' + currentPath.split('?')[1] : '';

  return (
    <RouterContext.Provider value={{ currentPath, pathname, search, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function useLocation() {
  const { pathname, search, currentPath } = useRouter();
  return { pathname, search, currentPath };
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className, onClick, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    // Allow modifier keys (cmd/ctrl for new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
