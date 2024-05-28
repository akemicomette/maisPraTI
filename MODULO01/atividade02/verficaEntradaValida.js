function verifyValidEntrance(addData) {
  if (isNaN(addData) || addData < 0) {
    console.log("Valores inseridos inválidos! Reinicie a questão.");
    return false;
  }
  return true;
}

module.exports = { verifyValidEntrance };
