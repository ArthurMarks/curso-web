import axios from 'axios'
const SERVER_LOCAL_PATH = 'http://localhost:3000'
const SERVER_REMOTE_PATH = 'https://raw.githubusercontent.com/DGSO0811/Narutopedia-images/refs/heads/main/Narutopedia'

const useServer = () => {
    const getAllData = async (route) => {
        const response = await axios.get(`${SERVER_LOCAL_PATH}/${route}`)
        return response.data
    }

    const getByDataId = async (route, data_id) => {
        const response = await axios.get(`${SERVER_LOCAL_PATH}/${route}/${data_id}`)
        return response.data
    }

    const advancedSearch = async (search_datas) => {
        const response = await axios.post(`${SERVER_LOCAL_PATH}/search`, search_datas)
        return response.data  
    }

    const getPath = (route, data_name) => {
        const defaultPath = `${SERVER_REMOTE_PATH}/${route}`

        return {
            image: `${defaultPath}/image/${data_name}.png`,
            text: `${defaultPath}/text/${data_name}.txt`
        }
    }

    return { getAllData, getByDataId, advancedSearch, getPath }
}

export default useServer
