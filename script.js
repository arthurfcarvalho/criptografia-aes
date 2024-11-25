// Importação da biblioteca CryptoJS
// Baixe em https://cdnjs.com/libraries/crypto-js ou inclua no seu projeto.
document.addEventListener("DOMContentLoaded", () => {
    const encryptButton = document.getElementById("encrypt");
    const decryptButton = document.getElementById("decrypt");
    const messageInput = document.getElementById("message");
    const keyInput = document.getElementById("key");
    const output = document.getElementById("output");
  
    encryptButton.addEventListener("click", () => {
      const message = messageInput.value;
      const key = keyInput.value;
  
      if (key.length !== 16) {
        alert("A chave deve ter exatamente 16 caracteres.");
        return;
      }
  
      try {
        const encrypted = CryptoJS.AES.encrypt(message, key).toString();
        output.value = encrypted;
      } catch (error) {
        alert("Erro ao cifrar a mensagem.");
      }
    });
  
    decryptButton.addEventListener("click", () => {
      const encryptedMessage = messageInput.value;
      const key = keyInput.value;
  
      if (key.length !== 16) {
        alert("A chave deve ter exatamente 16 caracteres.");
        return;
      }
  
      try {
        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key);
        const originalText = decrypted.toString(CryptoJS.enc.Utf8);
  
        if (!originalText) {
          throw new Error("Decifra falhou.");
        }
  
        output.value = originalText;
      } catch (error) {
        alert("Erro ao decifrar a mensagem. Verifique o texto e a chave.");
      }
    });
  });
  