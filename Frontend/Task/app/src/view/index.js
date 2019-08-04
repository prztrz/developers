// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Box from '../components/Box';
import Loader from '../components/Loader';
import CurrencyPairsSelector from './CurrencyPairsSelector';
import CoursesList from './CoursesList';
import fetchCurrenciesConfig from '../redux/actions/fetchCurrenciesConfig';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const View = () => {
  const dispatch = useDispatch();

  const isLoadingConfig = useSelector(state => state.isLoadingConfig);

  React.useEffect(() => {
    dispatch(fetchCurrenciesConfig());
  }, [dispatch]);

  return (
    <Container>
      <Box heading="Filter currency pairs">
        {isLoadingConfig ? <Loader /> : <CurrencyPairsSelector />}
      </Box>
      <Box heading="Currency courses">{isLoadingConfig ? <Loader /> : <CoursesList />}</Box>
    </Container>
  );
};

export default View;
