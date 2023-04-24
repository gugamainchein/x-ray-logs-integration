# X-Ray: Monitorando Aplicações de Forma Inteligente

## O que é o X-Ray?

O X-Ray da AWS é um serviço de análise e depuração de aplicações que ajuda desenvolvedores a entender o comportamento de suas aplicações distribuídas, identificando problemas de performance e solucionando erros mais rapidamente.

Com ele, é possível visualizar e analisar o fluxo de uma requisição desde o início até o fim, incluindo chamadas a serviços externos e microserviços. O serviço captura informações como tempo de resposta, erros e exceções, além de permitir a criação de mapas de serviços que ajudam a identificar gargalos e possíveis pontos de falha na arquitetura.

Ao utilizar o serviço, os desenvolvedores podem facilmente identificar problemas de performance em suas aplicações e melhorar a experiência do usuário final. Além disso, a ferramenta permite a identificação rápida de erros em ambientes de produção, o que ajuda a reduzir o tempo de inatividade e minimizar o impacto nos usuários.

O X-Ray é fácil de integrar com outras ferramentas da AWS, como o Amazon CloudWatch e o AWS Lambda, e pode ser usado em conjunto com diversas linguagens de programação, como Java, Node.js, Python e Ruby.

Em resumo, o serviço da AWS é uma ferramenta poderosa para analisar e depurar aplicações distribuídas, que ajuda desenvolvedores a identificar problemas de performance e erros de forma mais rápida e eficiente, melhorando a experiência do usuário final.

## Funcionamento do X-Ray

O funcionamento do X-Ray envolve a instrumentação da aplicação, onde o desenvolvedor adiciona código aos componentes da aplicação para gerar dados de rastreamento. Esses dados são enviados para o serviço, onde são agregados e apresentados em uma interface web.

A seguir, descrevo com mais detalhes as etapas envolvidas no funcionamento do X-Ray:

1. Instrumentação da aplicação: para que a aplicação possa ser rastreada pelo serviço, é necessário que ela seja instrumentada, ou seja, que o código seja modificado para gerar dados de rastreamento. A AWS oferece uma série de bibliotecas e SDKs para as principais linguagens de programação, facilitando a instrumentação da aplicação;

2. Geração de dados de rastreamento: após a instrumentação, a aplicação gera dados de rastreamento que incluem informações como o tempo de execução, o nome da operação e a identificação do serviço. Esses dados são enviados para o X-Ray em intervalos regulares, geralmente a cada 1 segundo;

3. Armazenamento e agregação de dados: a ferramenta armazena os dados de rastreamento em um banco de dados distribuído, que permite a agregação e análise dos dados em tempo real. O serviço usa algoritmos de análise para identificar gargalos e pontos de falha na aplicação;

4. Visualização dos dados: a interface web do X-Ray permite que os desenvolvedores visualizem os dados de rastreamento em vários formatos, incluindo gráficos de fluxo e listagens de serviços. Os dados podem ser filtrados e organizados para facilitar a análise;

5. Integração com outros serviços: o serviço pode ser integrado com outros serviços da AWS, como o Amazon CloudWatch e o AWS Lambda, permitindo que os desenvolvedores monitorem e depurem a aplicação de forma mais eficiente;

6. O X-Ray permite que os desenvolvedores definam políticas de retenção de dados personalizadas para seus dados de rastreamento, para garantir que apenas os dados relevantes sejam armazenados e analisados, ajudando a reduzir custos e melhorar o desempenho.

7. A ferramenta pode ser integrado com várias outras ferramentas e serviços de terceiros, como o Datadog, para oferecer ainda mais recursos de análise e depuração para aplicativos em nuvem.

<img src="https://github.com/gugamainchein/x-ray-logs-integration/blob/master/docs/x-ray-1.png?raw=true" alt="X-Ray Image 1" width="100%"/>

<img src="https://github.com/gugamainchein/x-ray-logs-integration/blob/master/docs/x-ray-2.png?raw=true" alt="X-Ray Image 2" width="100%"/>

## Precificação da ferramenta

O modelo de precificação do X-Ray é baseado no número de solicitações de rastreamento que sua aplicação gera. A AWS cobra uma taxa por solicitação de rastreamento, que inclui a coleta, armazenamento e análise dos dados de rastreamento. O preço varia de acordo com a região da AWS em que sua aplicação está sendo executada e do volume de solicitações de rastreamento.

A primeira camada de solicitações de rastreamento é gratuita (100.000). Cada camada adicional de solicitações de rastreamento é cobrada em incrementos de 100.000 solicitações por mês. Por exemplo, se sua aplicação gera 250.000 solicitações de rastreamento em um mês, você será cobrado pela camada de 200.000 a 300.000 solicitações de rastreamento.

Além disso, a AWS oferece um desconto de volume para clientes que geram mais de 1 bilhão de solicitações de rastreamento por mês. Os clientes também podem economizar dinheiro usando o recurso de amostragem do X-Ray para reduzir o número de solicitações de rastreamento que são coletadas.

É importante notar que o X-Ray também cobra uma taxa para armazenamento de dados de rastreamento. O armazenamento é cobrado em incrementos de GB por mês e varia dependendo da região da AWS em que a aplicação está sendo executada.

## Quais as vantagens do X-Ray

O AWS X-Ray traz diversos benefícios para os desenvolvedores e operadores de aplicações distribuídas, entre eles:

- Visualização de ponta a ponta: O X-Ray fornece uma visualização detalhada das solicitações que passam por várias partes de uma aplicação distribuída. Isso ajuda a entender melhor como os diferentes componentes interagem entre si e a identificar problemas em diferentes partes da aplicação.

- Identificação mais rápida de problemas: Com o X-Ray, é possível identificar rapidamente onde os erros estão ocorrendo e quais solicitações estão sendo afetadas. Isso ajuda a reduzir o tempo de resolução de problemas e minimizar o impacto dos problemas nos usuários.

- Melhoria da performance da aplicação: Com a capacidade de rastrear e analisar as solicitações em uma aplicação distribuída, o X-Ray ajuda a identificar gargalos de desempenho e pontos de estrangulamento. Isso permite que os desenvolvedores façam ajustes e otimizações para melhorar a performance da aplicação.

- Redução de custos: O X-Ray ajuda a identificar gargalos e pontos de estrangulamento na aplicação, o que pode levar a um melhor uso dos recursos e a uma redução de custos.

- Integração com outras ferramentas AWS: O X-Ray pode ser facilmente integrado com outras ferramentas e serviços AWS, como o AWS Lambda, o Amazon EC2, o Amazon ECS e o Amazon API Gateway. Isso ajuda a criar uma visão completa e integrada da aplicação distribuída e a simplificar a operação e a gestão da infraestrutura.

## Faça você mesmo

Para configurar o ambiente local, utilizaremos o container do daemon do X-Ray, para fins de padronização das configurações.

Pensando nisso, é fundamental que você já possua o [Docker](https://www.docker.com/) instalado em sua máquina e, após sua devida configuração, execute os passos abaixo:

1. Inicie o Docker em sua máquina abrindo o aplicativo
2. Abra seu terminal de comando
3. Execute o comando: `docker pull amazon/aws-xray-daemon`
4. Realize o clone do projeto `git clone https://github.com/gugamainchein/x-ray-logs-integration.git`
5. Crie seu próprio arquivo `container/xray.env` contendo as seguintes variáveis preenchidas:
   - AWS_ACCESS_KEY_ID={access_key_var}
   - AWS_SECRET_ACCESS_KEY={secret_key_var}
   - AWS_REGION={region_var}
6. Execute o container por meio do comando `docker run --env-file ./container/xray.env -p 2000:2000/udp amazon/aws-xray-daemon`
7. Abra um novo terminal, sem fechar o que está executando o container do Docker
8. Instale as depedências `npm i`
9. Execute o projeto `npm run start`

Após executar os passos acima, seu ambiente local está pronto para enviar logs ao X-Ray da sua conta AWS, sendo exibidos todos os logs e traces processadas na aplicação local.

Para certificar-se de que está tudo certo, você deve visualizar ter um resultado semelhante à este:

<img src="https://github.com/gugamainchein/x-ray-logs-integration/blob/master/docs/x-ray-daemon-container.png?raw=true" alt="X-Ray Daemon Container" width="100%"/>

<img src="https://github.com/gugamainchein/x-ray-logs-integration/blob/master/docs/result-1.png?raw=true" alt="X-Ray Final Result 1" width="100%"/>

<img src="https://github.com/gugamainchein/x-ray-logs-integration/blob/master/docs/result-2.png?raw=true" alt="X-Ray Final Result 2" width="100%"/>

## Histórico de mudanças

- 0.1.0
  - Primeira versão da aplicação

## Sobre o criador

Gustavo Mainchein – [@gugamainchein](https://www.instagram.com/gugamainchein) – gustavomainchein@outlook.com

[Veja mais sobre mim](https://github.com/gugamainchein)

## Faça sua contribuição

1. Realize o fork do projeto (<https://github.com/gugamainchein/cognito-casl/fork>)
2. Crie a nova feature em uma branch (`git checkout -b feature/fooBar`)
3. Faça o commit das suas mudanças (`git commit -am 'Add some fooBar'`)
4. Realize o push para a branch (`git push origin feature/fooBar`)
5. Crie um novo pull request
