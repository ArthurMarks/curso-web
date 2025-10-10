import { createNavigationContainerRef } from "@react-navigation/native"

const navigationRef = createNavigationContainerRef()
/** Hook que permite referenciar um container de navegação, sendo possível acessá-lo mesmo fora do esquema de abas */

const navigate = (data) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(data.type, {
            screen: 'details',
            params: { data }
        })
    }
}
/** Função que lida com a navegação de telas fora do container de navegação (acessa uma aba específica independente da aba atual) */
/** No momento, essas funcionalidades servem apenas para o Search.js, pois ele está fora do container de navegação */

export { navigationRef, navigate }
