
import { ADD_PAGE, ARCHIEVE_PAGE, DETAIL_PAGE, HOME_PAGE, NOTES_PAGE } from '../constants/path'
import Home from '../pages/Home'
import Add from '../pages/Add'
import DetailPageWrapper from '../pages/Detail'
import Archieve from '../pages/Archieve'
export const privateRouteList = [
    {
        path: ADD_PAGE,
        exact: true,
        element: <Add />,
    },
    {
        path: ARCHIEVE_PAGE,
        exact: true,
        element: <Archieve />,
    },
    {
        path: NOTES_PAGE,
        exact: true,
        element: <Home />,
    },
    {
        path: DETAIL_PAGE,
        exact: true,
        element: <DetailPageWrapper />,
    },
    {
        path: HOME_PAGE,
        exact: true,
        element: <Home />,
    },
]