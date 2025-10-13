import axios from 'axios'
const SERVER_LOCAL_PATH = 'http://localhost:3000'

const useServer = () => {
    // SERVER_REMOTE_PATH -> 'https://raw.githubusercontent.com/DGSO0811/Narutopedia-images/refs/heads/main/Narutopedia'

    const getAllData = async (screenName) => {
        const response = await axios.get(`${SERVER_LOCAL_PATH}/${screenName}`)
        return response.data
    }

    const getByDataId = async (screenName, dataId) => {
        const response = await axios.get(`${SERVER_LOCAL_PATH}/${screenName}/${dataId}`)
        return response.data
    }

    const getImagePath = (screenName, dataName) => {
        return `https://raw.githubusercontent.com/DGSO0811/Narutopedia-images/refs/heads/main/Narutopedia/${screenName}/image/${dataName}.png`
    }

    return { getAllData, getByDataId, getImagePath }
}

export default useServer
