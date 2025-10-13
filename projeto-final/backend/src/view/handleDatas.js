const handleDatas = (datas, type) => {
    // Caso o objeto ou array estiverem vazios, retorna null
    if (!datas || Array.isArray(datas) && datas.length == 0) return null

    // Caso seja um array, somente retorna o array sem novas alterações (usado em getAll())
    // Caso contrário, adiciona a propriedade type a um objeto (usado em getOne())
    return Array.isArray(datas)
        ? datas
        : { type: type, ...datas }
}

module.exports = { handleDatas }
