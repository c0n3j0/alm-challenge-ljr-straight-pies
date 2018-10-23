# Almundo challenge

[![codecov](https://codecov.io/gh/lucianorusso/alm-challenge-ljr-straight-pies/branch/master/graph/badge.svg)](https://codecov.io/gh/lucianorusso/alm-challenge-ljr-straight-pies)

## Intro

Hay un extraño contador que a medida que avanza el tiempo va cambiando su valor. En el primer segundo muestra el valor 3. Cada segundo que pasa, el número que se muestra se va decrementando en 1 hasta llegar a 1. Como el contador cuenta por ciclos, una vez que se llega a 1, se comienza a contar un nuevo ciclo que comienza con el doble del valor inicial del ciclo anterior. Como el ciclo anterior comenzó en 3, este nuevo ciclo comenzará en 6 hasta llegar a 1 nuevamente. Luego comenzará un nuevo ciclo que comenzará en 12, luego otro en 24, y así sucesivamente.

Este modulo obtiene el valor del contador en un instante t

## Uso

```javacript
const counterFactory = require('alm-challenge-ljr-straight-pies')

const initialFactory = 3
const counter = counterFactory(initialValue)

const value = counter(10)

console.log("COUTER", value)
```
