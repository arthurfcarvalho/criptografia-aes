# Criptografia Simétrica com AES em JavaScript

## Descrição

Este projeto implementa um sistema de cifragem e decifragem de mensagens utilizando o algoritmo **AES (Advanced Encryption Standard)**, que é amplamente reconhecido por sua segurança em criptografia simétrica. A aplicação possui uma interface web intuitiva, permitindo que os usuários interajam diretamente com o sistema para cifrar e decifrar mensagens.

Este trabalho faz parte da disciplina **Segurança da Informação**, do 6º semestre do curso de **Análise e Desenvolvimento de Sistemas (ADS)**, ministrada no **IFTM - Campus Patrocínio**.

## Funcionalidades

- **Cifrar mensagens:** Insira uma mensagem e uma chave de 16 caracteres para obter o texto cifrado.
- **Decifrar mensagens:** Insira o texto cifrado e a mesma chave para restaurar a mensagem original.
- Interface web simples e acessível para facilitar o uso.

## Tecnologias Utilizadas

- **JavaScript**: Para a lógica de cifragem e decifragem, utilizando a biblioteca [CryptoJS](https://cdnjs.com/libraries/crypto-js).
- **HTML e CSS**: Para criar uma interface web amigável.

## Requisitos para Uso

- Navegador web moderno.
- Biblioteca [CryptoJS](https://cdnjs.com/libraries/crypto-js), incluída no projeto.

## Como Usar

1. Clone ou baixe este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam no mesmo diretório.
3. Abra o arquivo `index.html` em um navegador web.
4. Siga os passos abaixo na interface:
   - Digite uma mensagem no campo "Mensagem".
   - Insira uma chave de **16 caracteres** no campo "Chave".
   - Clique em **Cifrar** para obter o texto cifrado.
   - Para decifrar, insira o texto cifrado no campo "Mensagem", a mesma chave e clique em **Decifrar**.

## Exemplos de Uso

### Exemplo 1: Cifrar Mensagem
- **Mensagem**: `Teste de Cifragem`
- **Chave**: `chave12345678910`
- **Resultado (Cifrado)**: `U2FsdGVkX19jNUPyDd+77d74qFjFvZhB0Ep8GEiI0+eHRNfJO9rjqhrAqM1+dG4v`

![image](https://github.com/user-attachments/assets/5e8fb0df-d384-4f58-8dc6-a0778e5a1456)


### Exemplo 2: Decifrar Mensagem
- **Texto Cifrado**: `U2FsdGVkX18IxGiqoGIDpv+8N2cOKuPF19FKZ/DmLe/cIXh4/Bodct+ouFomRUjx`
- **Chave**: `chave12345678910`
- **Mensagem Original**: `Teste de Cifragem`

![image](https://github.com/user-attachments/assets/4387bb62-7993-4f8d-9e94-a93592726a24)


---

**Professor:** Júnio Moreira  
**Aluno:** Arthur de Freitas Carvalho
