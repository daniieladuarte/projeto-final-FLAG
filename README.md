# Memória descritiva

## Para quem é este website?

Este projeto é um website para uma pequena empresa familiar de jardinagem - manutenção de jardins e piscinas e construção de espaços exteriores do zero.

Este website foi pensado para um público adulto, que tenha uma casa ou espaço comercial (como hotéis, escolas, quintas para eventos) com jardim e/ou piscina.

O objetivo deste website é gerar leads e chegar perto dos potenciais clientes criando uma sensação de proximidade - daí a apresentação da equipa com uma pequena curiosidade de cada um, que no caso, é o hobby.

## O que faz este website?

Neste website é possível subscrever a newsletter da empresa, fazer o envio de email para a empresa com pedido de informação.

Uma das features implementadas para ajudar no processo de idealização dos espaços é a listagem de 21 tipos de árvores/plantas disponíveis para o cliente.

## Que ferramentas foram utilizadas na sua execução?

Recorreu-se a uma API externa, a [Perenual](https://perenual.com/), para a página das plantas, utilizando os Hooks UseState & UseEffect.

Também se recorreu aos packages react-hook-form e yup para validação do formulário de contacto.

Definiram-se as rotas com recurso ao package react-router-dom.

## Que aspetos serão desenvolvidos no futuro?

No futuro, está previsto ser implementada a feature de Dark theme/Light theme.

Será também criada uma área de testemunhos, onde o utilizador poderá ler testemunhos da experiência pessoal de cada cliente e ainda deixar o seu próprio testemunho.

Também está previsto desenvolver novos componentes, entre os quais:

- Bloco de tabs
  - Objetivo principal de uso: mostrar os parceiros comerciais, divididos por categorias (piscina, construção, jardim)
- Slider com imagens
  - Objetivo principal de uso: mostrar imagens dos trabalhos executados
- Bloco counter
  - Objetivo principal de utilização: demonstrar alguns números da empresa, como o número de projetos concluídos até à data e número de anos em atividade.

Está em vista uma melhoria na página de plantas, implementando uma search box e adicionando mais informação a cada planta, tal como se é ou não venenosa, se é ou não adequada a interiores e ainda se tem ou não flor ou fruto.
