import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {useLayout} from '../../../core';
import {usePageData} from '../../../core/PageData';

const PageTitle = () => {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData();
  const {config, classes} = useLayout();
  const appPageTitleDirection = config.app?.pageTitle?.direction;

  return (
    <div
      id='kt_page_title'
      data-kt-swapper='true'
      data-kt-swapper-mode='prepend'
      data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
      className={clsx('page-title d-flex flex-wrap me-3', classes.pageTitle.join(' '), config.app?.pageTitle?.class, {
        'flex-column justify-content-center': appPageTitleDirection === 'column',
        'align-items-center': appPageTitleDirection !== 'column',
      })}
    >
      {pageBreadcrumbs && pageBreadcrumbs.length > 0 && config.app?.pageTitle && config.app?.pageTitle?.breadCrumb && (
        <>
          {config.app?.pageTitle?.direction === 'row' && <span className='h-20px border-gray-300 border-start mx-4'></span>}
          <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0'>
            {Array.from(pageBreadcrumbs).map((item, index) => (
              <li
                className={clsx('breadcrumb-item', {
                  'text-dark': !item.isSeparator && item.isActive,
                  'text-muted': !item.isSeparator && !item.isActive,
                })}
                key={`${item.path}${index}`}
              >
                {!item.isSeparator ? (
                  <Link className='text-muted text-hover-primary' to={item.path}>
                    {item.title}
                  </Link>
                ) : (
                  <span className='bullet bg-gray-200 w-5px h-2px'></span>
                )}
              </li>
            ))}
            <li className='breadcrumb-item text-dark'>
              <span>{pageTitle}</span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export {PageTitle};
