<div  align="center">

![Javascript](https://badges.aleen42.com/src/javascript.svg)

</div>

Opabox Desafio Desenvolvedor Full Stack - Backend

#

### 📖 Prerequisites

- [NPM](https://npmjs.com/): please refer to their [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

#

### 🖥️ Iniciar aplicação

```

npm install

npm start

```

#

### :vertical_traffic_light: ENDPOINTS

<strong>/ordenaLista</strong>

`Method POST`

```
http://localhost:8080/ordenaLista
```

Retorna as listas em ordem alfabética e crescente.
<strong>Exemplo de body:</strong>

```
{
 listas: {
 salaN: [ 1, 5, 7, 8 ],
 salaS: [ “a”, “x”, “n” ]
 }

```

<strong>Exemplo de retorno:</strong>

```
{
 listas: {
 salaN: [ 1, 5, 7, 8 ],
 salaS: [ “a”, “n”, “x” ]
 }

```

<strong>/interlace?</strong>

`Method POST`

```
http://localhost:8080/interlace?
```

Retorna um valor booleano informando se as listas possuem intersecção.

<strong>Exemplo de body:</strong>

```
{
 intervaloA: [ 20, 40 ],
 intervaloB: [ 10, 60 ]
}
```

<strong>Exemplo de retorno:</strong>

```
false
```
