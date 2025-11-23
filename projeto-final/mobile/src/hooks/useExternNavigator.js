import { createNavigationContainerRef } from "@react-navigation/native"
import useServer from "./useServer"

export const navigationRef = createNavigationContainerRef()

// Função que realiza a navegação por meio de consulta
export const externNavigation = async (data) => {
    const fullData = await useServer().getByDataId(data.type, data.id)

    if (navigationRef.isReady()) {
        navigationRef.navigate(data.type, { screen: 'details', params: fullData })
    }
}
