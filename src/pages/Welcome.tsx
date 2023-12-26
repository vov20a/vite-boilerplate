import { useSearchParams, useLocation } from 'react-router-dom';


export const Welcome = () => {
    const location = useLocation();
    const path = location.pathname;
    let [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    return (
        <div>
            <h1>
                id = {id}
            </h1>
            <h1>
                path = {path}
            </h1>
            <h1>
                Welcome PAGE
            </h1>
        </div>

    );
};

