## Projeto ConnectCar challenger sprint 3

## Projeto realizado em JAVA

### Funcionalidades
- Pacote: br.com.fiap.beans - Para a criação das classes principais e dos atributos 
do projeto.
- Pacote: br.com.fiap.DAO - Para a criação da classe ClienteDAO, dessa forma 
pegando as informações do cliente para integração com banco de dados, método
inserir para utilizar o insert e inserir os dados no banco de dados
- Pacote: br.com.fiap.main - Para testar as classes do pacote br.com.fiap.beans, 
br.com.fiap.DAO e do pacote Conexao. Criação de arrayList para armazenar os 
dados do mecanico, criação de for incom para exibir todos mecanicos e exibição 
padrao apenas com SystemOutPrintln para o resto das classes
- Pacote: br.com.fiap. conexão – Para a integração com o banco de dados
- Pacote: BO – Para criação do métodos realizados no crud de Cliente, Veiculo e 
Mecânico
- Pacote: br.com.fiap.excecoes - Para as exceções do projeto, atualmente contando 
apenas com o método de falha na conexão com o banco de dados
- Pacote: br.com.fiap.model - Para a criação da classe Endereço que sera utilizada 
pela API externa do viaCep
- Pacote: br.com.fiap.resource - Para criação do servidor para integração da API 
interna com as demais materias, possui os metodos GET, POST, PUT, DELETE das 
seguintes classes: clienteResource, mecanicoResource, VeiculoResource.
- Pacote: br.com.fiap.service - para a integração da api viaCep
