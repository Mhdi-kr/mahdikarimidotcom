+++
title = "memory management in arduino"
date = "2018-11-25T01:47:16+03:30"
summary = "How to handle precious memory in embeded systems and MCUs"
tags = ["Embeded","C++"]
show = true
+++

### Random access memory types

#### SRAM

Static Random Access Memory

#### EEPROM

Electrically Erasable Programmable Read-only Memory

#### Flash memory

### Possible optimizations

#### Software

use `PROGMEM`
what it does is

```cpp
const dataType variableName[] PROGMEM = {}; // use this form
```

#### Serverside

Do the heavy lifiting on the server. provide lightweight interface for arduino to work with.

### Problems ahead

#### Memory fragmentations
