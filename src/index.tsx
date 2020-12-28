import React, { Suspense, StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const App = lazy(() => import('./App'));

ReactDOM.render(
    <StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Spinner />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root'),
);
