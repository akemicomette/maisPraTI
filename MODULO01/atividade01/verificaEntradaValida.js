function verificaEntradaValida(dadosInseridos){
    if(isNaN(dadosInseridos)){
        console.log('Valor inválido. Reinicie a questão.');
        return false;
    }
    return true;
}

module.exports = { verificaEntradaValida };