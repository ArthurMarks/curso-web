import { createNavigationContainerRef } from "@react-navigation/native"
import useServer from "./useServer"

export const navigationRef = createNavigationContainerRef()

export const externNavigation = async (data) => {
    const fullData = await useServer().getByDataId(data.type, data.id)

    if (navigationRef.isReady()) {
        navigationRef.navigate(data.type, { screen: 'details', params: fullData })
    }
}
