const handleDatas = (datas, type) => {
    // Caso o objeto ou array estiverem vazios, retorna null
    if (!datas || Array.isArray(datas) && datas.length == 0) return null

    // Caso seja um array, adiciona a propriedade type a cada valor desse array (usado em getAll())
    // Caso contrário, adiciona a propriedade type a um objeto (usado em getOne())
    return Array.isArray(datas)
        ? datas.map(data => ({ type: type, ...data }))
        : { type: type, ...datas }
}

module.exports = { handleDatas }
