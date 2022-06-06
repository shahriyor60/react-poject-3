import React from 'react';

import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Account from "../../components/Acount"
import Edit from "../../components/Edit"
import Mesege from "../../components/Mesegaes"
export default () => {
  const content = useRoutes(routes);
  return <>
  {/*   <Account/> */}
  {/* <Edit/> */}
  <Mesege/>
  </>;
};
