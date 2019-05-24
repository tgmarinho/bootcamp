import React from 'react';

import LoadingIcon from '../../assets/images/loading.svg';

import { Spinner } from './styles';

const Loading = () => <Spinner src={LoadingIcon} alt="Carregando" />;

export default Loading;
