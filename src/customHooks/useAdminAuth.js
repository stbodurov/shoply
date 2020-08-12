import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {checkUserIsAdmin} from '../Utils'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

export default function useAdminAuth(props) {
const {currentUser} = useSelector(mapState);
const history = useHistory();

    useEffect(() => {
        if (!checkUserIsAdmin(currentUser)) {
            history.push('/login');
        }
    }, [currentUser]);

    return currentUser;
}
