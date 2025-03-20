import { useEffect } from "react"
import { useAppDispatch } from "../ReduxToolkit/ReduxToolkit/Hooks/Hooks"
import reduxStore from "../ReduxToolkit/ReduxToolkit/Store/Store"
import { clearCredentials } from "../ReduxToolkit/ReduxToolkit/AuthSlice/AuthSlice"

const NoUserLogout = () => {


    const dispatch = useAppDispatch()
    const currentUser = reduxStore
        .getState()
        .auth
        ?.user
    useEffect(() => {

        if (currentUser) return

        dispatch(clearCredentials())

        window.open("/", "_self")

        return () => {

        }
    }, [dispatch])


    return null
}

export default NoUserLogout