/* eslint-disable react/jsx-no-target-blank */
import {useEffect} from 'react';
import {ILayout, useLayout} from '../../core';

const Footer = () => {
  const {config} = useLayout();
  useEffect(() => {
    updateDOM(config);
  }, [config]);
  return (
    <>
      <div className='text-dark order-2 order-md-1'>
        <span className='text-muted fw-semibold me-1'>
          {new Date().getFullYear().toString()}&copy;
        </span>
        <a
          href='https://tandan.com.vn/'
          target='_blank'
          className='text-gray-800 text-hover-primary'
        >
          Tan Dan JSC
        </a>
      </div>

      <ul className='menu menu-gray-600 menu-hover-primary fw-semibold order-1'>
        <li className='menu-item'>
          <a href='https://keenthemes.com/' target='_blank' className='menu-link px-2'>
            Giới thiệu
          </a>
        </li>

        <li className='menu-item'>
          <a href='https://devs.keenthemes.com/' target='_blank' className='menu-link px-2'>
            Hỗ trợ
          </a>
        </li>
      </ul>
    </>
  );
};

const updateDOM = (config: ILayout) => {
  if (config.app?.footer?.fixed?.desktop) {
    document.body.classList.add('data-kt-app-footer-fixed', 'true');
  }

  if (config.app?.footer?.fixed?.mobile) {
    document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true');
  }
};

export {Footer};
